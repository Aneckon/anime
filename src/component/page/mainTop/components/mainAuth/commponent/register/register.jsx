import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { setIsAuth, setUser } from '../../../../../../../redux/user/reducer';
import { Fetch } from '../../../../../../fetch';

export const Register = ({ registers, setRegister }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const autch = '/register';

  const handleRegistr = () => {
    Fetch({ username, email, password, autch });
    dispatch(setUser({ email, password, username }));
    setRegister(false);
    dispatch(setIsAuth(true));
  };

  return (
    <div className={registers ? 'auth auth__block' : 'auth'}>
      <button className="auth__btn" onClick={() => setRegister(false)}>
        +
      </button>
      <form onSubmit={handleSubmit(handleRegistr)}>
        {errors?.firstName?.type === 'required' && <p>This field is required</p>}
        {errors?.firstName?.type === 'maxLength' && <p>First name cannot exceed 20 characters</p>}
        {errors?.firstName?.type === 'pattern' && <p>Alphabetical characters only</p>}
        <input
          {...register('firstName', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Нікнейм"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors?.email?.type === 'required' && <p>This field is required</p>}
        {errors?.email?.type === 'maxLength' && <p>First name cannot exceed 20 characters</p>}
        {errors?.email?.type === 'pattern' && <p>Alphabetical characters only</p>}
        <input
          {...register('email', {
            required: true,
            maxLength: 20,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          placeholder="Електронна пошта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.password?.type === 'required' && <p>This field is required</p>}
        {errors?.password?.type === 'maxLength' && <p>First name cannot exceed 20 characters</p>}
        {errors?.password?.type === 'pattern' && <p>Alphabetical characters only</p>}
        <input
          {...register('password', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Регистрація</button>
      </form>
    </div>
  );
};
