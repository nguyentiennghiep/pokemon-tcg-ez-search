'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useCallback, LegacyRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import {
  PokemonSet,
  Card as PokemonCard,
  CardsResponse,
} from '@/app/_components/sets/types';
import Card from '@/app/_components/card';
import { fetchFromApi } from '@/app/utils/api';
import { ClipLoader } from 'react-spinners'; // Import the loading spinner

interface SetPageClientProps {
  initialSet: PokemonSet | null;
}

const fetchRarities = async () => {
  try {
    const response = await fetch('https://api.pokemontcg.io/v2/rarities');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching rarities:', error);
    return [];
  }
};

const fetchSetCards = async (
  setId: string,
  page: number,
  rarity: string,
  cardName: string
) => {
  try {
    let query = `set.id:${setId}`;
    if (rarity) {
      query += ` rarity:${rarity}`;
    }
    if (cardName) {
      query += ` name:${cardName}*`; // Use wildcard for partial matching
    }
    const cardsData: CardsResponse = await fetchFromApi('cards', {
      q: query,
      orderBy: '-number', // Order by number in descending order
      pageSize: '20',
      page: page.toString(),
    });
    return cardsData.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};

const SetPageClient: React.FC<SetPageClientProps> = ({ initialSet }) => {
  const params = useParams();
  const router = useRouter();
  const setid  = params?.setid;
  const [set, setSet] = useState<PokemonSet | null>(initialSet);
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [rarities, setRarities] = useState<string[]>([]);
  const [selectedRarity, setSelectedRarity] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [loading, setLoading] = useState(!initialSet);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [endOfCards, setEndOfCards] = useState(false); // State to track if all cards have been loaded
  const observer = useRef<IntersectionObserver | null>(null);

  // Fetch initial set and rarities
  useEffect(() => {
    const fetchInitialData = async () => {
      if (setid && !initialSet) {
        try {
          const response = await fetchFromApi(`sets/${setid}`);
          const data = await response.json();
          if (data) {
            setSet(data);
          } else {
            router.push('/404');
          }
        } catch (error) {
          console.error('Error fetching set:', error);
          router.push('/404');
        } finally {
          setLoading(false);
        }
      }

      const raritiesData = await fetchRarities();
      setRarities(raritiesData);
    };

    fetchInitialData();
  }, [setid, initialSet, router]);

  // Fetch cards based on filters and pagination
  useEffect(() => {
    if (setid && !endOfCards) {
      const fetchCards = async () => {
        setLoadingMore(true);
        const cardsData = await fetchSetCards(
          setid as string,
          page,
          selectedRarity,
          cardName
        );
        setCards((prevCards) =>
          page === 1 ? cardsData : [...prevCards, ...cardsData]
        );
        setLoadingMore(false);
        if (cardsData.length < 20) {
          setEndOfCards(true); // Set end of cards if less than page size is returned
        }
      };

      fetchCards();
    }
  }, [setid, page, selectedRarity, cardName, endOfCards]);

  const lastCardElementRef = useCallback(
    (node: Element) => {
      if (loadingMore || endOfCards) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingMore, endOfCards]
  );

  const handleRarityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRarity(event.target.value);
    setCards([]);
    setPage(1);
    setEndOfCards(false); // Reset end of cards state
  };

  const handleCardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(event.target.value);
    setCards([]);
    setPage(1);
    setEndOfCards(false); // Reset end of cards state
  };

  if (loading) {
    return (
      <div className={styles.loadingSpinner}>
        <ClipLoader size={50} color={'#123ABC'} loading={loading} />
      </div>
    );
  }

  if (!set) {
    return null; // This will never be reached because of the redirect
  }

  return (
    <div className={styles.setPage}>
      <div className={styles.setHeader}>
        <h1>{set.name}</h1>
        <Image
          src={set.images.logo}
          alt={`${set.name} logo`}
          width={256}
          height={92}
        />
      </div>
      <div className={styles.setDetails}>
        <p>
          <strong>Series:</strong> {set.series}
        </p>
        <p>
          <strong>Release Date:</strong> {set.releaseDate}
        </p>
        <p>
          <strong>Total Cards:</strong> {set.total}
        </p>
        <p>
          <strong>Printed Total:</strong> {set.printedTotal}
        </p>
      </div>
      <h2>Cards</h2>
      <div className={styles.filterSearchContainer}>
        <div className={styles.filterContainer}>
          <label htmlFor='rarityFilter'>Filter by Rarity:</label>
          <select
            id='rarityFilter'
            value={selectedRarity}
            onChange={handleRarityChange}
          >
            <option value=''>All</option>
            {rarities.map((rarity) => (
              <option key={rarity} value={rarity}>
                {rarity}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.searchContainer}>
          <label htmlFor='cardNameSearch'>Search by Card Name:</label>
          <input
            type='text'
            id='cardNameSearch'
            value={cardName}
            onChange={handleCardNameChange}
            placeholder='Enter card name'
          />
        </div>
      </div>
      <div className={styles.cardsGrid}>
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
                  averageSellPrice={card.cardmarket.prices.averageSellPrice}
                  marketUrl={card.cardmarket.url}
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
                averageSellPrice={card.cardmarket.prices.averageSellPrice}
                marketUrl={card.cardmarket.url}
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

export default SetPageClient;
