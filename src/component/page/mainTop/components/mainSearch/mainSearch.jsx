import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch } from '../../../../../redux/anime/reducer';

import './mainSearch.css';

export const MainSearch = () => {
  const dispatch = useDispatch()
  const search = useSelector(state => state.searchText)

  return (
    <div className="main__search">
      <input
        value={search}
        onChange={(e) => dispatch(changeSearch(e.target.value))}
        type="text"
        placeholder="Пошук"
      />
    </div>
  );
};
