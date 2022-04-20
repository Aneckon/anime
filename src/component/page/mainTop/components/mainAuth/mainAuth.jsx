import React, { useState } from 'react';

import { Login, Register } from './commponent';

import './mainAuth.css';

export const MainAuth = () => {
  const [login, setLogin] = useState(false);
  const [registers, setRegister] = useState(false);

  return (
    <div className="main__auth">
      <div className="main__auth-btn">
        <button onClick={() => setLogin(true)}>Логін</button>
        <button onClick={() => setRegister(true)}>Регистрація</button>
      </div>
      <Register registers={registers} setRegister={setRegister} />
      <Login logins={login} setLogin={setLogin} />
    </div>
  );
};
