import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FetchAddAnime } from '../../fetch';

import './addAnime.css';

export const AddAnime = () => {
  const [name, setsName] = useState('');
  const [img, setImg] = useState('');
  const [categorie, setCategorie] = useState('');
  const [studio, setStudio] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.length !== 0 &&
      img.length !== 0 &&
      categorie.length !== 0 &&
      studio.length !== 0 &&
      description.length !== 0
    ) {
      FetchAddAnime({ name, img, categorie, studio, description, rating });
      <Navigate to='/' />
    } else {
      return
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="main__title">Добавити Своє аніме</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Вставте силку на картинку"
            required
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setsName(e.target.value)}
            placeholder="Назва вашого аніме"
            required
          />
          <input
            type="text"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
            placeholder="Категорії вашого аніме"
            required
          />
          <input
            type="text"
            value={studio}
            onChange={(e) => setStudio(e.target.value)}
            placeholder="Назва студії"
            required
          />
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Опишіть про що аніме"
            required
          />
          <button>Добавити</button>
        </form>
      </div>
    </div>
  );
};
