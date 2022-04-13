import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { animeItems } from '../../../../../redux/anime/reducer';

import './mainCard.css';

export const MainCard = ({ name, img, categorie, rating, studio, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlSubmit = () => {
    dispatch(animeItems({ name, img, categorie, rating, description, studio }));
    navigate(`/anime/${name}`);
  };

  return (
    <div className="col-md-4 col-sm-6">
      <div className="main__card" onClick={handlSubmit}>
        <img src={img} alt="" />
        <div className="main__card-content">
          <h2>{name}</h2>
          <div className="main__card-categorie">
            <p>{categorie}</p>
          </div>
          <p className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 59.93">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M33.93,1.18l8.72,17.34,19.5,2.78a2.1,2.1,0,0,1,1.19,3.61L49.24,38.4l3.33,19.06a2.15,2.15,0,0,1-3.13,2.23L32,50.69l-17.44,9a2.15,2.15,0,0,1-3.13-2.23L14.76,38.4.65,24.9A2.1,2.1,0,0,1,1.85,21.3l19.5-2.78L30.07,1.18A2.17,2.17,0,0,1,33.93,1.18Z" />
                  <path d="M51.43,26c-16,1.5-29,11.41-32.29,24.27l-.05,0,2.46-14.1-10.45-10,14.44-2.07L32,11.35l6.46,12.83Z" />
                </g>
              </g>
            </svg>
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
};
