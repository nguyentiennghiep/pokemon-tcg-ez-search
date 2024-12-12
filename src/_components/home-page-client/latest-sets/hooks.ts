import { useCallback } from 'react';

export const useLatestSets = (
  currentPage: number,
  totalPages: number,
  inputPage: string,
  setCurrentPage: (page: number) => void,
  setInputPage: (page: string) => void
) => {
  const handlePageInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputPage(event.target.value);
    },
    [setInputPage]
  );

  const handlePageInputBlur = useCallback(() => {
    const page = Number(inputPage);
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    } else {
      setInputPage(currentPage.toString());
    }
  }, [inputPage, totalPages, setCurrentPage, setInputPage, currentPage]);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setInputPage((currentPage - 1).toString());
    }
  }, [currentPage, setCurrentPage, setInputPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setInputPage((currentPage + 1).toString());
    }
  }, [currentPage, totalPages, setCurrentPage, setInputPage]);

  return {
    handlePageInputChange,
    handlePageInputBlur,
    handlePrevPage,
    handleNextPage,
  };
};
