import { useState } from 'react';

const usePagination = (initialValue: number) => {
  const [currentPage, setCurrentPage] = useState<number>(initialValue);

  return { currentPage, setCurrentPage };
};

export default usePagination;
