import React from 'react';
import { useSelector } from 'react-redux';

import { MainCard } from './components';

import './mainContent.css';

export const MainContent = ({ anime }) => {
  const status = useSelector((state) => state.anime.status);

  return (
    <div className="main__content">
      <div className="container">
        <div className="row">
          {status === 'loading' && <h2>loading...</h2>}
          {anime.map((card) => (
            <MainCard
              key={card._id}
              episode={card.episode}
              name={card.name}
              img={card.img}
              studio={card.studio}
              categorie={card.categorie}
              description={card.description}
              rating={card.Rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
