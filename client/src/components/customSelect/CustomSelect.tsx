import React, { useState } from 'react';
import ArrowIcon from '../others/ArrowIcon';
import { ISelectOption, TCustomSelectProps } from './customSelectTypes';
import './customSelect.scss';

const CustomSelect = ({ selectOptions, optionClickHandler, title }: TCustomSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<ISelectOption>(selectOptions[0]!);
  const [shouldDisplayOptions, setShouldDisplayOptions] = useState<boolean>(false);

  const optionHandler = (option: ISelectOption) => {
    optionClickHandler(option);
    setSelectedOption(option);
  };
// todo continue with tech icon
  return (
    <div onClick={() => setShouldDisplayOptions(prev => !prev)}>
      <span className="flex  gap-1  cursor-pointer">
        {title}:<span>{selectedOption.title}</span>
        <ArrowIcon className={shouldDisplayOptions ? 'rotate-180' : ''} />
      </span>

      <ul className="cont-options">
        {selectOptions.map(option => {
          return (
            // todo add special class to activated link
            // todo click eventBubling must be stopped
            <li
              className="cont-options__option hover cursor-pointer text-red-100"
              key={option.title + option.value}
              data-value={option.value}
              onClick={() => optionHandler(option)}
            >
              <span>
                
              {option.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomSelect;
