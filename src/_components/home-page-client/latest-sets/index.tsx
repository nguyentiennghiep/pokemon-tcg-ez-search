import React from 'react';
import { PokemonSet } from '../../sets/types';
import { ClipLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Sets from '../../sets';
import styles from './styles.module.css'; // Import CSS module
import { useLatestSets } from './hooks';

interface LatestSetsProps {
  currentSets: PokemonSet[];
  loadingSets: boolean;
  currentPage: number;
  totalPages: number;
  inputPage: string;
  setCurrentPage: (page: number) => void;
  setInputPage: (page: string) => void;
  handleSetClick: (set: PokemonSet) => void;
}

const LatestSets: React.FC<LatestSetsProps> = ({
  currentSets,
  loadingSets,
  currentPage,
  totalPages,
  inputPage,
  setCurrentPage,
  setInputPage,
  handleSetClick,
}) => {
  const {
    handlePageInputChange,
    handlePageInputBlur,
    handlePrevPage,
    handleNextPage,
  } = useLatestSets(
    currentPage,
    totalPages,
    inputPage,
    setCurrentPage,
    setInputPage
  );

  return (
    <section className={styles.latestSets}>
      <h2>Latest Sets</h2>
      {loadingSets ? (
        <div className={styles.loadingSpinner}>
          <ClipLoader size={50} color={'#123ABC'} loading={loadingSets} />
        </div>
      ) : (
        <>
          <div className={styles.setsGrid}>
            {currentSets.map((set) => (
              <Sets
                key={set.id}
                id={set.id}
                name={set.name}
                series={set.series}
                releaseDate={set.releaseDate}
                logo={set.images.logo}
                onClick={() => handleSetClick(set)} // Pass the handleSetClick function
              />
            ))}
          </div>
          <div className={styles.pagination}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <input
              type='number'
              value={inputPage}
              onChange={handlePageInputChange}
              onBlur={handlePageInputBlur}
              min='1'
              max={totalPages}
              className={styles.paginationInput}
            />
            <span>/ {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
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

export default LatestSets;
