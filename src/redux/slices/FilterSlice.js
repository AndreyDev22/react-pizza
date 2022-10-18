import { createSlice } from '@reduxjs/toolkit'

/*========= Начальное состояние =========*/
const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности по убыванию',
    sortProperty: 'rating',
  },
};
/*======================================*/

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action);
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;