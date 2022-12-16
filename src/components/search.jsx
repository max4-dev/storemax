import React from 'react';
import { Link } from 'react-router-dom';

const Search = ({ searchValue, setSearchValue, setActiveType }) => {
  return (
    <label className="search">
      <input
        onChange={(event) => {
          setSearchValue(event.target.value);
          setActiveType(0);
        }}
        className="search__input"
        type="text"
        placeholder="Поиск"
        value={searchValue}
      />
      <Link className="search__btn" to="/">
        <img src="images/icons/search.svg" alt="" />
      </Link>
    </label>
  );
};

export default Search;
