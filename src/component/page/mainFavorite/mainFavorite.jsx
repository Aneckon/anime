import React from 'react';
import { useSelector } from 'react-redux';

import { MainCard } from '../mainContent/components';

export const MainFavorite = () => {
  const animeFavorite = useSelector((state) => state.favorite.favoriteItems);

  return (
    <div className="main__content">
      <div className="container">
        <div className="row">
          {animeFavorite.map((card) => (
            <MainCard
              key={card.episode}
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
