import SetPageClient from './setPageClient';
import { fetchFromApi } from '@/app/utils/api';
import { PokemonSet } from '@/app/_components/sets/types';

interface SetPageProps {
  params: {
    setid: string;
  };
}

export default async function SetPage({ params }: SetPageProps) {
  const { setid } = params;
  let initialSet: PokemonSet | null = null;

  try {
    const response = await fetchFromApi(`sets/${setid}`);
    initialSet = response.data || null;
  } catch (error) {
    console.error('Error fetching set:', error);
  }

  return <SetPageClient initialSet={initialSet} />;
}
