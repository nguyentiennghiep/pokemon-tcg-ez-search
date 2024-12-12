import React from 'react';
import styles from './styles.module.css'; // Import CSS module

interface IntroductionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearchClick: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearchClick,
}) => {
  return (
    <section className={styles.introduction}>
      <h1>Welcome to Pokémon TCG</h1>
      <p>
        Discover the world of Pokémon Trading Card Game. Collect, trade, and
        battle with your favorite Pokémon cards.
      </p>
      <div className={styles.searchContainer}>
        <input
          type='text'
          placeholder='Search by card name'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchBar}
        />
        <button onClick={handleSearchClick} className={styles.searchButton}>
          Search
        </button>
      </div>
    </section>
  );
};

export default Introduction;
