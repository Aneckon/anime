import React, { useState } from 'react';

import './categorie.css';

export const Categorie = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const submitOpen = () => {
    setDropdownOpen(!dropdownOpen)
  };

  return (
    <div onClick={submitOpen} className="header__categorie">
      Категорії
      <div className={dropdownOpen ? 'header__dropdown block' : 'header__dropdown none'}>
        <div className="header__dropdown-col">
          <p>Animation</p>
          <p>Drama</p>
          <p>Fantasy</p>
          <p>Action</p>
        </div>
        <div className="header__dropdown-col">
          <p>Mystery</p>
          <p>Magic</p>
          <p>Shounen</p>
          <p>Adventure</p>
        </div>
      </div>
    </div>
  );
};
