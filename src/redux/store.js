import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/FilterSlice';
import cart from './slices/CartSlice';
import pizzas from './slices/PizzasSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart,
    pizzas,
  },
})