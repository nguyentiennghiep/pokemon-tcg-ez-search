'use client';

import {
  useEffect,
  useState,
  useRef,
  useCallback,
  LegacyRef,
  Suspense,
} from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { fetchFromApi } from '@/app/utils/api';
import {
  Card as PokemonCard,
  CardsResponse,
} from '@/app/_components/sets/types';
import Card from '@/app/_components/card';
import { ClipLoader } from 'react-spinners';
import styles from './styles.module.css'; // Import CSS module

const SearchPageContent: React.FC = () => {
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [endOfCards, setEndOfCards] = useState<boolean>(false);
  const [newSearchQuery, setNewSearchQuery] = useState<string>('');
  const [prevSearchQuery, setPrevSearchQuery] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);
  const searchParams = useSearchParams();
  const query = searchParams?.get('query');
  const router = useRouter();

  useEffect(() => {
    const fetchCards = async () => {
      if (query) {
        setLoading(true);
        try {
          const cardsData: CardsResponse = await fetchFromApi('cards', {
            q: `name:*${query}*`,
            orderBy: '-cardmarket.prices.averageSellPrice',
            pageSize: '20',
            page: page.toString(),
          });

          if (page === 1) {
            setCards(cardsData.data);
          } else {
            setCards((prevCards) => [...prevCards, ...cardsData.data]);
          }

          if (cardsData.data.length < 20) {
            setEndOfCards(true);
          } else {
            setEndOfCards(false);
          }
        } catch (error) {
          console.error('Error fetching cards:', error);
        } finally {
          setLoading(false);
          setLoadingMore(false);
        }
      }
    };

    fetchCards();
  }, [query, page]);

  const lastCardElementRef = useCallback(
    (node: Element) => {
      if (loadingMore || endOfCards) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setLoadingMore(true);
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingMore, endOfCards]
  );

  const handleNewSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewSearchQuery(event.target.value);
  };

  const handleNewSearchClick = () => {
    if (newSearchQuery.trim()) {
      setCards([]);
      setPage(1);
      setEndOfCards(false);
      setLoading(true);
      setPrevSearchQuery(newSearchQuery);
      router.push(`/search?query=${encodeURIComponent(newSearchQuery)}`);
    }
  };

  const isSearchDisabled =
    !newSearchQuery.trim() || newSearchQuery === prevSearchQuery;

  if (loading && page === 1) {
    return (
      <div className={styles.loadingSpinner}>
        <ClipLoader size={50} color={'#123ABC'} loading={loading} />
      </div>
    );
  }

  return (
    <div className={styles.searchPage}>
      <h1>{`Search Results for "${query}"`}</h1>
      <div className={styles.searchContainer}>
        <input
          type='text'
          placeholder='Search by card name'
          value={newSearchQuery}
          onChange={handleNewSearchChange}
          className={styles.searchBar}
        />
        <button
          onClick={handleNewSearchClick}
          className={styles.searchButton}
          disabled={isSearchDisabled}
        >
          Search
        </button>
      </div>
      {cards.length === 0 && !loading && (
        <div className={styles.noResults}>
          <Image
            src='/no-result-found.png'
            alt='No results found'
            width={400}
            height={300}
          />
        </div>
      )}
      <div className={styles.cardGrid}>
        {cards.map((card, index) => {
          if (cards.length === index + 1) {
            return (
              <div
                ref={
                  lastCardElementRef as LegacyRef<HTMLDivElement> | undefined
                }
                key={card.id}
              >
                <Card
                  imageSrc={card.images.small}
                  largeImageSrc={card.images.large}
                  altText={card.name}
                  cardName={card.name}
                  series={card.set.series}
                  setName={card.set.name}
                  averageSellPrice={card.cardmarket?.prices?.averageSellPrice}
                  marketUrl={card.cardmarket?.url}
                />
              </div>
            );
          } else {
            return (
              <Card
                key={card.id}
                imageSrc={card.images.small}
                largeImageSrc={card.images.large}
                altText={card.name}
                cardName={card.name}
                series={card.set.series}
                setName={card.set.name}
                averageSellPrice={card.cardmarket?.prices?.averageSellPrice}
                marketUrl={card.cardmarket?.url}
              />
            );
          }
        })}
      </div>
      {loadingMore && (
        <div className={styles.loadingSpinner}>
          <ClipLoader size={50} color={'#123ABC'} loading={loadingMore} />
        </div>
      )}
    </div>
  );
};

// Wrap SearchPageContent with Suspense
const SearchPage: React.FC = () => {
  return (
    <Suspense
      fallback={<ClipLoader size={50} color={'#123ABC'} loading={true} />}
    >
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;
