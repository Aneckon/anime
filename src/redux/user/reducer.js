import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isAuth: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setUser, setIsAuth } = userSlice.actions;
export default userSlice.reducer;
