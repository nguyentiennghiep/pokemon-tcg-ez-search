import { useCallback } from 'react';
import { PokemonSet } from '../../../types/types';

export const useFeaturedCards = (
  selectedSet: PokemonSet | null,
  currentFeaturedPage: number,
  totalFeaturedPages: number,
  inputFeaturedPage: string,
  setCurrentFeaturedPage: (page: number) => void,
  setInputFeaturedPage: (page: string) => void,
  fetchFeaturedCards: (setId: string, page: number) => void
) => {
  const handleFeaturedPageInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputFeaturedPage(event.target.value);
    },
    [setInputFeaturedPage]
  );

  const handleFeaturedPageInputBlur = useCallback(() => {
    const page = Number(inputFeaturedPage);
    if (page > 0 && page <= totalFeaturedPages) {
      setCurrentFeaturedPage(page);
      fetchFeaturedCards(selectedSet!.id, page);
    } else {
      setInputFeaturedPage(currentFeaturedPage.toString());
    }
  }, [
    inputFeaturedPage,
    totalFeaturedPages,
    setCurrentFeaturedPage,
    fetchFeaturedCards,
    selectedSet,
    setInputFeaturedPage,
    currentFeaturedPage,
  ]);

  const handlePrevFeaturedPage = useCallback(() => {
    if (currentFeaturedPage > 1) {
      setCurrentFeaturedPage(currentFeaturedPage - 1);
      setInputFeaturedPage((currentFeaturedPage - 1).toString());
      fetchFeaturedCards(selectedSet!.id, currentFeaturedPage - 1);
    }
  }, [
    currentFeaturedPage,
    setCurrentFeaturedPage,
    setInputFeaturedPage,
    fetchFeaturedCards,
    selectedSet,
  ]);

  const handleNextFeaturedPage = useCallback(() => {
    if (currentFeaturedPage < totalFeaturedPages) {
      setCurrentFeaturedPage(currentFeaturedPage + 1);
      setInputFeaturedPage((currentFeaturedPage + 1).toString());
      fetchFeaturedCards(selectedSet!.id, currentFeaturedPage + 1);
    }
  }, [
    currentFeaturedPage,
    totalFeaturedPages,
    setCurrentFeaturedPage,
    setInputFeaturedPage,
    fetchFeaturedCards,
    selectedSet,
  ]);

  return {
    handleFeaturedPageInputChange,
    handleFeaturedPageInputBlur,
    handlePrevFeaturedPage,
    handleNextFeaturedPage,
  };
};
