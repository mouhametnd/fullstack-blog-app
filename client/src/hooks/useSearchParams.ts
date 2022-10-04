import { useSelector } from 'react-redux';
import { ISearchParamsSlice } from '../store/slices/searchParams/searchParamsTypes';
import { IStore } from '../types';

const useSearchParams = () => {
  const searchParams = useSelector<IStore, ISearchParamsSlice>(state => state.searchParams);
  return { searchParams };
};

export default useSearchParams;
