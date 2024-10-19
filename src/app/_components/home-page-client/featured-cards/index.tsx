import React from 'react';
import { PokemonSet, Card as PokemonCard } from '../../sets/types';
import { ClipLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../../card';
import styles from './styles.module.css'; // Import CSS module

interface FeaturedCardsProps {
  selectedSet: PokemonSet | null;
  featuredCards: PokemonCard[];
  loadingCards: boolean;
  currentFeaturedPage: number;
  totalFeaturedPages: number;
  inputFeaturedPage: string;
  setCurrentFeaturedPage: (page: number) => void;
  setInputFeaturedPage: (page: string) => void;
  fetchFeaturedCards: (setId: string, page: number) => void;
}

const FeaturedCards: React.FC<FeaturedCardsProps> = ({
  selectedSet,
  featuredCards,
  loadingCards,
  currentFeaturedPage,
  totalFeaturedPages,
  inputFeaturedPage,
  setCurrentFeaturedPage,
  setInputFeaturedPage,
  fetchFeaturedCards,
}) => {
  const handleFeaturedPageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputFeaturedPage(event.target.value);
  };

  const handleFeaturedPageInputBlur = () => {
    const page = Number(inputFeaturedPage);
    if (page > 0 && page <= totalFeaturedPages) {
      setCurrentFeaturedPage(page);
      fetchFeaturedCards(selectedSet!.id, page);
    } else {
      setInputFeaturedPage(currentFeaturedPage.toString());
    }
  };

  const handlePrevFeaturedPage = () => {
    if (currentFeaturedPage > 1) {
      setCurrentFeaturedPage(currentFeaturedPage - 1);
      setInputFeaturedPage((currentFeaturedPage - 1).toString());
      fetchFeaturedCards(selectedSet!.id, currentFeaturedPage - 1);
    }
  };

  const handleNextFeaturedPage = () => {
    if (currentFeaturedPage < totalFeaturedPages) {
      setCurrentFeaturedPage(currentFeaturedPage + 1);
      setInputFeaturedPage((currentFeaturedPage + 1).toString());
      fetchFeaturedCards(selectedSet!.id, currentFeaturedPage + 1);
    }
  };

  return (
    <section className={styles.featuredCards}>
      <h2>
        Featured Cards{' '}
        {selectedSet && `- ${selectedSet.series} / ${selectedSet.name}`}
      </h2>
      {loadingCards ? (
        <div className={styles.loadingSpinner}>
          <ClipLoader size={50} color={'#123ABC'} loading={loadingCards} />
        </div>
      ) : (
        <>
          <div className={styles.cardGrid}>
            {featuredCards.map((card) => (
              <Card
                key={card.id}
                imageSrc={card.images.small}
                largeImageSrc={card.images.large}
                altText={card.name}
                cardName={card.name}
                averageSellPrice={card.cardmarket.prices.averageSellPrice}
                marketUrl={card.cardmarket.url} // Pass market URL prop
              />
            ))}
          </div>
          <div className={styles.pagination}>
            <button
              onClick={handlePrevFeaturedPage}
              disabled={currentFeaturedPage === 1}
              className={styles.paginationButton}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <input
              type='number'
              value={inputFeaturedPage}
              onChange={handleFeaturedPageInputChange}
              onBlur={handleFeaturedPageInputBlur}
              min='1'
              max={totalFeaturedPages}
              className={styles.paginationInput}
            />
            <span>/ {totalFeaturedPages}</span>
            <button
              onClick={handleNextFeaturedPage}
              disabled={currentFeaturedPage === totalFeaturedPages}
              className={styles.paginationButton}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedCards;
