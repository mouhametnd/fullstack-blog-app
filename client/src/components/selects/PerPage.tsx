import { useDispatch } from 'react-redux';
import { perPageOptions } from '../../constants';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import { searchParamsSliceActions } from '../../store/slices/searchParams/searchParamsSlice';
import { ISelectOption, TPerPageValues } from '../../types';
import CustomSelect from '../customSelect/CustomSelect';

const { resetBlogsState } = blogsSliceActions;
const { setPerPage } = searchParamsSliceActions;
const PerPage = () => {
  const dispath = useDispatch();
  const clickHandler = ({ value }: ISelectOption) => {
    dispath(setPerPage(value as TPerPageValues));
    dispath(resetBlogsState());
  };
  return <CustomSelect title="Blogs Per Page" selectOptions={perPageOptions} defaultValue={1} optionClickHandler={clickHandler} />;
};

export default PerPage;
