import { useState } from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import './customSelect.scss';
import CheckIcon from '../icons/CheckIcon';
import { ISelectOption, TCustomSelectProps } from '../../types';

const CustomSelect = ({ selectOptions, optionClickHandler, title, defaultValue }: TCustomSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<ISelectOption>(selectOptions[defaultValue || 0]!);
  const [shouldDisplayOptions, setShouldDisplayOptions] = useState<boolean>(false);

  const optionHandler = (option: ISelectOption) => {
    if (selectedOption.value === option.value) return;
    optionClickHandler(option);
    setSelectedOption(option);
  };

  return (
    <div className="relative" onClick={() => setShouldDisplayOptions(prev => !prev)}>
      <span className="span-title">
        {title}:<span className="span-value">{selectedOption.title}</span>
        <ArrowIcon className={`stroke-cyanGreen-100 ${shouldDisplayOptions && 'rotate-180'}`} />
      </span>

      <ul className={`cont-options ${shouldDisplayOptions && 'is-open'}`}>
        {selectOptions.map(option => {
          return (
            <li
              key={option.title + option.value}
              data-value={option.value}
              onClick={() => optionHandler(option)}
              className={`cont-options__option hover  ${
                selectedOption.value === option.value && 'cont-options__option--active'
              }`}
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
