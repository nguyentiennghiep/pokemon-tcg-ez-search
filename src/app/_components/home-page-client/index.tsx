'use client';

import Introduction from './introduction';
import FeaturedCards from './featured-cards';
import HighestPricedCards from './highest-priced-cards';
import { useHomePageClient } from './hooks';
import LatestSets from './latest-sets';

const HomePageClient = () => {
  const {
    featuredCards,
    highestPricedCards,
    loadingSets,
    loadingCards,
    currentPage,
    inputPage,
    currentFeaturedPage,
    inputFeaturedPage,
    currentSets,
    selectedSet,
    searchQuery,
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
  } = useHomePageClient();

  return (
    <>
      <Introduction
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearchClick={() => {
          if (searchQuery.trim()) {
            router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
          }
        }}
      />
      <LatestSets
        currentSets={currentSets}
        loadingSets={loadingSets}
        currentPage={currentPage}
        totalPages={totalPages}
        inputPage={inputPage}
        setCurrentPage={setCurrentPage}
        setInputPage={setInputPage}
        handleSetClick={(set) => {
          setSelectedSet(set);
          fetchFeaturedCards(set.id, 1);
          setCurrentFeaturedPage(1);
          setInputFeaturedPage('1');
        }}
      />
      <FeaturedCards
        selectedSet={selectedSet}
        featuredCards={featuredCards}
        loadingCards={loadingCards}
        currentFeaturedPage={currentFeaturedPage}
        totalFeaturedPages={totalFeaturedPages}
        inputFeaturedPage={inputFeaturedPage}
        setCurrentFeaturedPage={setCurrentFeaturedPage}
        setInputFeaturedPage={setInputFeaturedPage}
        fetchFeaturedCards={fetchFeaturedCards}
      />
      <HighestPricedCards highestPricedCards={highestPricedCards} />
    </>
  );
};

export default HomePageClient;
