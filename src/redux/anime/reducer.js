import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const animeFetch = createAsyncThunk('anime/animeFetch', async function () {
  const res = await fetch('http://localhost:5000/api/animeList');
  const data = await res.json();
  return data;
});

const animeSlice = createSlice({
  name: 'anime',
  initialState: {
    animeList: [],
    animeItems: null,
    searchText: '',
  },
  reducers: {
    animeItems: (state, action) => {
      state.animeItems = action.payload;
    },
    changeSearch: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: {
    [animeFetch.pending]: (state) => {
      state.status = 'loading';
    },
    [animeFetch.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.animeList = action.payload;
    },
  },
});

export const { animeItems, changeSearch } = animeSlice.actions;
export default animeSlice.reducer;
