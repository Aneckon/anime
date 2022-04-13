import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { animeFetch } from './redux/anime/reducer';

import { AddAnime, Favorite, Header, Main, MainAnime } from './component';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(animeFetch());
  }, [dispatch]);

  return (
    <div className="Anime">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/anime/:title" element={<MainAnime />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/addanime" element={<AddAnime />} />
      </Routes>
    </div>
  );
};
