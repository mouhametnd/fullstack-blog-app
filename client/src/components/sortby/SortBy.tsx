import { useDispatch } from 'react-redux';
import { sortByOptions } from '../../constants/globalConstants';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import { searchParamsSliceActions } from '../../store/slices/searchParams/searchParamsSlice';
import { TSortByValues } from '../../types/types';
import CustomSelect from '../customSelect/CustomSelect';
import { ISelectOption } from '../customSelect/customSelectTypes';

const { resetBlogsState } = blogsSliceActions;
const { setSortBy } = searchParamsSliceActions;
const SortBy = () => {
  const dispath = useDispatch();

  const clickHandler = ({ value }: ISelectOption) => {
    dispath(setSortBy(value as TSortByValues));
    dispath(resetBlogsState());
  };
  return <CustomSelect title="Sort by" selectOptions={sortByOptions} optionClickHandler={clickHandler} />;
};

export default SortBy;
