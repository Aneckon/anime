import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuth, setUser } from '../../../../../../../redux/user/reducer';

import { Fetch } from '../../../../../../fetch';

export const Login = ({ login, setLogin }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const autch = '/login';

  const handleLogin = (event) => {
    event.preventDefault();
    if (email.length !== 0 && password.length !== 0) {
      Fetch({ email, password, autch });
      setLogin(false);
      dispatch(setUser({ email, password, username }));
      dispatch(setIsAuth(true));
    }
  };

  return (
    <div className={login ? 'auth auth__block' : 'auth'}>
      <button className="auth__btn" onClick={() => setLogin(false)}>
        +
      </button>
      <form onSubmit={handleLogin}>
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
        <button>Логін</button>
      </form>
    </div>
  );
};
