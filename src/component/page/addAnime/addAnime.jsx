import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { FetchAddAnime } from '../../fetch';

import './addAnime.css';

export const AddAnime = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [name, setsName] = useState('');
  const [img, setImg] = useState('');
  const [categorie, setCategorie] = useState('');
  const [studio, setStudio] = useState('');
  const [description, setDescription] = useState('');
  const [rating] = useState(0);

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    if (
      name.length !== 0 &&
      img.length !== 0 &&
      categorie.length !== 0 &&
      studio.length !== 0 &&
      description.length !== 0
    ) {
      FetchAddAnime({ name, img, categorie, studio, description, rating });
      <Navigate to="/" />;
    } else {
      return;
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="main__title">Добавити Своє аніме</h1>
        <form className="form" onSubmit={handleSubmit(handleSubmitAdd)}>
          {errors?.img?.type === 'required' && <p>This field is required</p>}
          {errors?.img?.type === 'pattern' && <p>Alphabetical characters only</p>}
          <input
            {...register('img', {
              required: true,
              pattern: /^[]+$/i,
            })}
            placeholder="Вставте силку на картинку"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          {errors?.name?.type === 'required' && <p>This field is required</p>}
          {errors?.name?.type === 'pattern' && <p>Alphabetical characters only</p>}
          <input
            {...register('name', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            value={name}
            onChange={(e) => setsName(e.target.value)}
            placeholder="Назва вашого аніме"
          />
          {errors?.categorie?.type === 'required' && <p>This field is required</p>}
          {errors?.categorie?.type === 'pattern' && <p>Alphabetical characters only</p>}
          <input
            {...register('categorie', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
            placeholder="Категорії вашого аніме"
          />
          {errors?.studio?.type === 'required' && <p>This field is required</p>}
          {errors?.studio?.type === 'pattern' && <p>Alphabetical characters only</p>}
          <input
            {...register('studio', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            value={studio}
            onChange={(e) => setStudio(e.target.value)}
            placeholder="Назва студії"
          />
          {errors?.description?.type === 'required' && <p>This field is required</p>}
          {errors?.description?.type === 'pattern' && <p>Alphabetical characters only</p>}
          <textarea
            {...register('description', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Опишіть про що аніме"
          />
          <button>Добавити</button>
        </form>
      </div>
    </div>
  );
};
