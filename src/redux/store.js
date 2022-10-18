import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/FilterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
})