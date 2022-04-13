import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setIsAuth, setUser } from '../../../../../redux/user/reducer';
import { Fetch } from '../../../../fetch';

import './menu.css';

export const Menu = () => {
  const userInfo = useSelector((state) => state.user.currentUser);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const autch = '/logoute';

  const handleRemove = () => {
    dispatch(setIsAuth(false));
    Fetch({ autch });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('state')
  };

  const user = localStorage.getItem('user');

  useEffect(() => {
    if (user) {
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
    }
  }, [dispatch]);

  return (
    <div className="menu">
      <div className="menu__title" onClick={() => setMenu(!menu)}>
        {userInfo ? userInfo.username : <>loading....</>}
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512.005 512.005"
          xmlSpace="preserve">
          <g>
            <g>
              <path
                d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005
			L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251
			l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      <div className={menu ? 'menuDropdown block' : 'menuDropdown'}>
        <NavLink to="/addanime">Добавити Аниме</NavLink>
        <button onClick={handleRemove}>Вийти</button>
      </div>
    </div>
  );
};
