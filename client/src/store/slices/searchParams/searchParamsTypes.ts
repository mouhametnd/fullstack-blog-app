import { IBaseAction, TPerPageValues, TSortByValues } from '../../../types';

export interface ISearchParamsSlice {
  sortBy: TSortByValues;
  perPage: TPerPageValues;
}

export interface ISearchParamsSliceCaseReducers {
  [x: string]: (state: ISearchParamsSlice, action: { type: string; payload: any }) => ISearchParamsSlice;
  setSortBy(a: ISearchParamsSlice, b: ISetSortByAction): ISearchParamsSlice;
  setPerPage(a: ISearchParamsSlice, b: ISetPerPageAction): ISearchParamsSlice;
}

export interface ISetSortByAction extends IBaseAction{
  payload: TSortByValues;
}

export interface ISetPerPageAction  extends IBaseAction{
  payload: TPerPageValues;
}

export type TSetUserReducer = (a: ISearchParamsSlice, b: ISetSortByAction) => ISearchParamsSlice;
