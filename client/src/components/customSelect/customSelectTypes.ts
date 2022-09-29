export type TCustomSelectProps = {
  selectOptions: ISelectOption[];
  optionClickHandler: (a: ISelectOption) => unknown;
  title: string;
  defaultValue?: number
};

export interface ISelectOption {
  title: string;
  value: string;
}
