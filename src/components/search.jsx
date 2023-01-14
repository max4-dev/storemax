import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearch, setFilter, setTitle, setActivePage } from '../redux/slices/filterSlice';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';
import { useState } from 'react';

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.filter.search);

  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef();

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 250),
    [],
  );

  const handleInputChange = (value) => {
    setInputValue(value.target.value);
    updateSearchValue(value.target.value);

    dispatch(setFilter(0));
    dispatch(setTitle('Все товары'));
    dispatch(setActivePage(1));
  };

  const handleClear = () => {
    dispatch(setSearch(''));
    setInputValue('');
    inputRef.current.focus();
  };

  return (
    <label className="search">
      <input
        onChange={(value) => handleInputChange(value)}
        className="search__input"
        type="text"
        placeholder="Хочу купить..."
        value={inputValue}
        ref={inputRef}
      />
      {search && (
        <button onClick={handleClear} className="search__close">
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
