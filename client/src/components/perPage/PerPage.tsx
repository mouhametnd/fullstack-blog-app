import React from 'react';
import { useDispatch } from 'react-redux';
import { perPageOptions } from '../../constants/globalConstants';
import { searchParamsSliceActions } from '../../store/slices/searchParams/searchParamsSlice';
import { TPerPageValues } from '../../types/types';
import CustomSelect from '../customSelect/CustomSelect';
import { ISelectOption } from '../customSelect/customSelectTypes';

const { setPerPage } = searchParamsSliceActions;
const PerPage = () => {
  const dispath = useDispatch();
  const clickHandler = ({ value }: ISelectOption) => {
    dispath(setPerPage(value as TPerPageValues));
  };
  return <CustomSelect title="Blogs Per Page" selectOptions={perPageOptions} optionClickHandler={clickHandler} />;
};

export default PerPage;
