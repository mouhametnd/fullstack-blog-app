import { useDispatch } from 'react-redux';
import { perPageOptions } from '../../constants/globalConstants';
import { blogsSliceActions } from '../../store/slices/blogs/blogsSlice';
import { searchParamsSliceActions } from '../../store/slices/searchParams/searchParamsSlice';
import { TPerPageValues } from '../../types/types';
import CustomSelect from '../customSelect/CustomSelect';
import { ISelectOption } from '../customSelect/customSelectTypes';

const { resetBlogs } = blogsSliceActions;
const { setPerPage } = searchParamsSliceActions;
const PerPage = () => {
  const dispath = useDispatch();
  const clickHandler = ({ value }: ISelectOption) => {
    dispath(setPerPage(value as TPerPageValues));
    dispath(resetBlogs());
  };
  return <CustomSelect title="Blogs Per Page" selectOptions={perPageOptions} defaultValue={1} optionClickHandler={clickHandler} />;
};

export default PerPage;
