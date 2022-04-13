import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setIsAuth, setUser } from '../../../../../../../redux/user/reducer';
import { Fetch } from '../../../../../../fetch';

export const Register = ({ register, setRegister }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const autch = '/register';

  const handleRegistr = (event) => {
    event.preventDefault();
    if (email.length !== 0 && password.length !== 0 && username.length !== 0) {
      Fetch({ username, email, password, autch });
      dispatch(setUser({ email, password, username }));
      setRegister(false);
      dispatch(setIsAuth(true));
    }
  };

  return (
    <div className={register ? 'auth auth__block' : 'auth'}>
      <button className="auth__btn" onClick={() => setRegister(false)}>
        +
      </button>
      <form onSubmit={handleRegistr}>
        <input
          type="text"
          placeholder="ник"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Електронна пошта"
          pattern=".+@gmail\.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Регистрація</button>
      </form>
    </div>
  );
};
