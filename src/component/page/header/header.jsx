import React from 'react';
import { Link } from 'react-router-dom';

import { Categorie} from './components';

import './header.css';

export const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Link to='/' className="header__logo">
            YamiAnime
          </Link>
          <div className="header__content">
            <Categorie />
          </div>
        </div>
      </div>
    </div>
  );
};
