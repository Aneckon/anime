import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnimeFavorite, removeAnimeFavorite } from '../../../redux/favorite/reducer';

import './mainAnime.css';

export const MainAnime = () => {
  const dispatch = useDispatch();
  const anime = useSelector((state) => state.anime.animeItems);

  const animeList = useSelector((state) => state.anime.animeList);
  const animeItem = animeList.some((items) => items.img === animeList.img);

  const handleFavorite = () => {
    if (animeItem !== true) {
      dispatch(addAnimeFavorite(anime));
    } else {
      dispatch(removeAnimeFavorite(anime));
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main__anime">
          <div className="row">
            <div className="col-6">
              <img src={anime.img} alt="" />
              <svg
                className={animeItem ? 'btn__favorite' : 'btn__favorite btn__favorite-active'}
                onClick={handleFavorite}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 54" id="Layer_54">
                  <path d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z" />
                </g>
              </svg>
            </div>
            <div className="col-6">
              <h1>{anime.name}</h1>
              <div className="main__anime-categorie">
                <p>{anime.categorie}</p>
                <p className="main__anime-rating">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 59.93">
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M33.93,1.18l8.72,17.34,19.5,2.78a2.1,2.1,0,0,1,1.19,3.61L49.24,38.4l3.33,19.06a2.15,2.15,0,0,1-3.13,2.23L32,50.69l-17.44,9a2.15,2.15,0,0,1-3.13-2.23L14.76,38.4.65,24.9A2.1,2.1,0,0,1,1.85,21.3l19.5-2.78L30.07,1.18A2.17,2.17,0,0,1,33.93,1.18Z" />
                        <path d="M51.43,26c-16,1.5-29,11.41-32.29,24.27l-.05,0,2.46-14.1-10.45-10,14.44-2.07L32,11.35l6.46,12.83Z" />
                      </g>
                    </g>
                  </svg>
                  {anime.rating}
                </p>
              </div>
              <div className="main__anime-descroptions">
                <p>{anime.description}</p>
              </div>
              <p className="studio">{anime.studio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
