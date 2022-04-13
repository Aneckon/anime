import React from 'react';
import { useSelector } from 'react-redux';

import { MainFavorite, MainTop } from '..';

import './favorite.css';
export const Favorite = () => {
  const animeFavorite = useSelector(state => state.favorite.favoriteItems)

  return (
    <div className="main">
      <MainTop />
      <MainFavorite anime={animeFavorite} />
    </div>
  );
};
