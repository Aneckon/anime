import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsAuth } from '../../../redux/user/reducer';

import { MainSearch, IconFavorites, MainAuth, Menu } from './components';

import './mainTop.css';

export const MainTop = () => {
  const tokenSave = localStorage.getItem('token');
  const isLogin = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tokenSave) {
      dispatch(setIsAuth(true));
    }
  }, [dispatch, tokenSave]);

  return (
    <div className="main__top">
      <div className="container">
        <div className="main__top-content">
          <MainSearch />
          {isLogin ? <IconFavorites /> : null}
          {isLogin ? null : <MainAuth />}
          {isLogin ? <Menu /> : null}
        </div>
      </div>
    </div>
  );
};
