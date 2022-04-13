import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredAnime } from '../../../redux/selectors/anime';

import { MainTop, MainContent } from '..';

import './main.css';

export const Main = () => {
  const anime = useSelector(getFilteredAnime);

  return (
    <div className="main">
      <MainTop />
      <MainContent anime={anime} />
    </div>
  );
};
