import { useDispatch } from 'react-redux';
import { sortByOptions } from '../../constants';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import { searchParamsSliceActions } from '../../store/slices/searchParams/searchParamsSlice';
import { ISelectOption, TSortByValues } from '../../types';
import CustomSelect from '../customSelect/CustomSelect';

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
