import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza, FetchPizzaType } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzaType>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { category, search, sort, currentPage } = params;
    const { data } = await axios.get(
      `https://405ee8d1da7c9e4f.mokky.dev/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}${search}`,
    );
    return data.items as Pizza[];
  },
);
