export type TCustomSelectProps = {
  selectOptions: ISelectOption[];
  optionClickHandler: (a: ISelectOption) => unknown;
  title: string;
};

export interface ISelectOption {
  title: string;
  value: string;
}
