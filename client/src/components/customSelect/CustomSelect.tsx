import React, { useState } from 'react';
import ArrowIcon from '../others/ArrowIcon';
import { ISelectOption, TCustomSelectProps } from './customSelectTypes';
import './customSelect.scss';
import CheckIcon from '../others/CheckIcon';

const CustomSelect = ({ selectOptions, optionClickHandler, title }: TCustomSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<ISelectOption>(selectOptions[0]!);
  const [shouldDisplayOptions, setShouldDisplayOptions] = useState<boolean>(false);

  const optionHandler = (option: ISelectOption) => {
    if (selectedOption.value === option.value) return;
    optionClickHandler(option);
    setSelectedOption(option);
  };

  return (
    // todo pass to  some to class
    <div className="relative" onClick={() => setShouldDisplayOptions(prev => !prev)}>
      <span className="flex  gap-1  cursor-pointer text-gray-100">
        {title}:<span className="font-semibold  text-cyanGreen-100">{selectedOption.title}</span>
        <ArrowIcon className={shouldDisplayOptions ? 'rotate-180' : ''} />
      </span>

      <ul className={`cont-options ${shouldDisplayOptions && 'is-open'}`}>
        {selectOptions.map(option => {
          return (
            <li
              className={`cont-options__option hover cursor-pointer flex gap-2 ${
                selectedOption.value === option.value && 'cont-options__option--active'
              }`}
              key={option.title + option.value}
              data-value={option.value}
              onClick={() => optionHandler(option)}
            >
              <span>{option.title}</span>
              <CheckIcon />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomSelect;
