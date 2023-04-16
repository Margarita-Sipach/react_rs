import { createSlice } from '@reduxjs/toolkit';
import { sliceInitType } from 'type';

const initialState: sliceInitType = {
  search: '',
  searchCards: [],
  formCards: [],
};

export const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: initialState,
  reducers: {
    getSearchValue(state, action) {
      state.search = action.payload;
    },
    newSearchCards(state, action) {
      state.searchCards = action.payload;
    },
    newFormCards(state, action) {
      state.formCards.push(action.payload);
    },
  },
});

export default toolkitSlice.reducer;
export const { getSearchValue, newFormCards, newSearchCards } = toolkitSlice.actions;
