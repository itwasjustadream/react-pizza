import { Sort } from '../filter/types';

export type FetchPizzaType = {
  category: string;
  search: string;
  sort: Sort;
  currentPage: number;
};

export type Pizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
