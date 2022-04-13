import { configureStore } from '@reduxjs/toolkit';
import AnimeReducer from './anime/reducer';
import favoriteReducer from './favorite/reducer';
import userReducer from './user/reducer';


const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedStore = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    anime: AnimeReducer,
    favorite: favoriteReducer,
    user: userReducer,
  },
}, persistedStore);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
