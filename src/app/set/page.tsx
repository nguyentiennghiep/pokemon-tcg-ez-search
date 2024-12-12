'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchFromApi } from '@/utils/api';
import { PokemonSet } from '@/app/_components/sets/types';
import Sets from '@/app/_components/sets';
import styles from './styles.module.css';
import { ClipLoader } from 'react-spinners'; // Import the loading spinner

const SetListPage: React.FC = () => {
  const [sets, setSets] = useState<PokemonSet[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const router = useRouter();

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const response = await fetchFromApi('sets');
        const sortedSets = response.data.sort(
          (a: PokemonSet, b: PokemonSet) => {
            return (
              new Date(b.releaseDate).getTime() -
              new Date(a.releaseDate).getTime()
            );
          }
        );
        setSets(sortedSets);
      } catch (error) {
        console.error('Error fetching sets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSets();
  }, []);

  const handleSetClick = (setId: string) => {
    router.push(`/set/${setId}`);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredSets = sets.filter((set) =>
    set.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className={styles.loadingSpinner}>
        <ClipLoader size={50} color={'#123ABC'} loading={loading} />
      </div>
    );
  }

  return (
    <div className={styles.setListPage}>
      <h1>Pokémon TCG Sets</h1>
      <input
        type='text'
        placeholder='Search by set name'
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.searchBar}
      />
      <div className={styles.setsGrid}>
        {filteredSets.map((set) => (
          <Sets
            key={set.id}
            id={set.id}
            name={set.name}
            series={set.series}
            releaseDate={set.releaseDate}
            logo={set.images.logo}
            onClick={() => handleSetClick(set.id)}
            showLink={false} // Pass showLink prop
          />
        ))}
      </div>
    </div>
  );
};

export default SetListPage;
