import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../App';

const Search = () => {
  const { searchValue, setSearchValue, setActiveType, setActivePage, setActiveTitle } =
    useContext(AppContext);

  return (
    <label className="search">
      <input
        onChange={(event) => {
          setSearchValue(event.target.value);
          setActiveType(0);
          setActivePage(1);
          setActiveTitle('Все товары');
        }}
        className="search__input"
        type="text"
        placeholder="Хочу купить      "
        value={searchValue}
      />
      {searchValue && (
        <button
          onClick={() => {
            setSearchValue('');
          }}
          className="search__close">
          <img src="images/icons/close-black.svg" alt="" />
        </button>
      )}
      <Link className="search__btn" to="/">
        <img src="images/icons/search.svg" alt="" />
      </Link>
    </label>
  );
};

export default Search;
