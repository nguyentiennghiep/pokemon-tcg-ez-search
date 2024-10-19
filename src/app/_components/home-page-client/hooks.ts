import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  PokemonSet,
  SetsResponse,
  Card as PokemonCard,
  CardsResponse,
} from '../sets/types';
import { fetchFromApi } from '@/app/utils/api';

export const useHomePageClient = () => {
  const [setsData, setSetsData] = useState<PokemonSet[]>([]);
  const [featuredCards, setFeaturedCards] = useState<PokemonCard[]>([]);
  const [highestPricedCards, setHighestPricedCards] = useState<PokemonCard[]>(
    []
  );
  const [loadingSets, setLoadingSets] = useState<boolean>(true); // Add loading state for sets
  const [loadingCards, setLoadingCards] = useState<boolean>(false); // Add loading state for cards
  const [currentPage, setCurrentPage] = useState<number>(1); // Add current page state
  const [inputPage, setInputPage] = useState<string>('1'); // Add input page state
  const [currentFeaturedPage, setCurrentFeaturedPage] = useState<number>(1); // Add current page state for featured cards
  const [inputFeaturedPage, setInputFeaturedPage] = useState<string>('1'); // Add input page state for featured cards
  const [selectedSet, setSelectedSet] = useState<PokemonSet | null>(null); // Add state for selected set
  const [searchQuery, setSearchQuery] = useState<string>(''); // Add state for search query
  const setsPerPage = 5; // Number of sets per page
  const featuredCardsPerPage = 14; // Number of featured cards per page
  const router = useRouter();

  useEffect(() => {
    const fetchSetsAndCards = async () => {
      try {
        const setsData: SetsResponse = await fetchFromApi('sets');
        const sortedSets = setsData.data.sort(
          (a: PokemonSet, b: PokemonSet) => {
            const dateA = new Date(a.releaseDate).getTime();
            const dateB = new Date(b.releaseDate).getTime();
            return dateB - dateA;
          }
        );
        const newestSet = sortedSets[0];
        setSetsData(sortedSets);
        fetchFeaturedCards(newestSet.id, 1);
        setSelectedSet(newestSet); // Set the newest set as the selected set initially

        const highestPricedCardsData: CardsResponse = await fetchFromApi(
          'cards',
          {
            orderBy: '-cardmarket.prices.averageSellPrice',
            pageSize: '10',
          }
        );
        setHighestPricedCards(highestPricedCardsData.data);
      } catch (error) {
        console.error('Error fetching sets or cards:', error);
      } finally {
        setLoadingSets(false); // Set loadingSets to false
      }
    };

    fetchSetsAndCards();
  }, []);

  const fetchFeaturedCards = async (setId: string, page: number) => {
    setLoadingCards(true); // Set loadingCards to true
    try {
      const cardsData: CardsResponse = await fetchFromApi('cards', {
        q: `set.id:${setId}`,
        orderBy: '-cardmarket.prices.averageSellPrice',
        pageSize: featuredCardsPerPage.toString(),
        page: page.toString(),
      });
      setFeaturedCards(cardsData.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    } finally {
      setLoadingCards(false); // Set loadingCards to false
    }
  };

  // Calculate the sets to display on the current page
  const indexOfLastSet = currentPage * setsPerPage;
  const indexOfFirstSet = indexOfLastSet - setsPerPage;
  const currentSets = setsData.slice(indexOfFirstSet, indexOfLastSet);

  // Calculate the total number of pages
  const totalPages = Math.ceil(setsData.length / setsPerPage);
  const totalFeaturedPages = Math.ceil(
    (selectedSet?.total || 0) / featuredCardsPerPage
  );

  return {
    featuredCards,
    highestPricedCards,
    loadingSets,
    loadingCards,
    currentPage,
    inputPage,
    currentFeaturedPage,
    inputFeaturedPage,
    selectedSet,
    currentSets,
    searchQuery,
    setsPerPage,
    featuredCardsPerPage,
    totalPages,
    totalFeaturedPages,
    setCurrentPage,
    setInputPage,
    setCurrentFeaturedPage,
    setInputFeaturedPage,
    setSelectedSet,
    setSearchQuery,
    fetchFeaturedCards,
    router,
  };
};
