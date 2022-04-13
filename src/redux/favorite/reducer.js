import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteItems: []
  },
  reducers: {
    addAnimeFavorite: (state, action) => {
      state.favoriteItems.push(action.payload)
    },
    removeAnimeFavorite: (state, action) =>{
      state.favoriteItems = state.favoriteItems.filter(anime => anime.img !== action.payload )
    }
  }
})

export const {addAnimeFavorite, removeAnimeFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer