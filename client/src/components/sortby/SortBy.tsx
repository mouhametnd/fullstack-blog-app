import React from 'react';
import { sortByOptions } from '../../constants/globalConstants';
import CustomSelect from '../customSelect/CustomSelect';
import { ISelectOption } from '../customSelect/customSelectTypes';

const SortBy = () => {
  // todo from constants
  const clickHandler = (option: ISelectOption) => {
    console.log('selectedOption', option);
  };
  return <CustomSelect title="Sort by" selectOptions={sortByOptions} optionClickHandler={clickHandler} />;
};

export default SortBy;
