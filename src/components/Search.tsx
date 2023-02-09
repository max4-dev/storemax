import { useRef, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearch, setFilter, setTitle, setActivePage } from '../redux/slices/filterSlice';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';
import { useState } from 'react';

import searchIcon from '../assets/images/icons/search.svg';
import deleteIcon from '../assets/images/icons/close-black.svg';

const Search: FC = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: any) => state.filter.search);

  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 250),
    [],
  );

  const handleInputChange = (value: any) => {
    setInputValue(value.target.value);
    updateSearchValue(value.target.value);

    dispatch(setFilter(0));
    dispatch(setTitle('Все товары'));
    dispatch(setActivePage(1));
  };

  const handleClear = () => {
    dispatch(setSearch(''));
    setInputValue('');
    inputRef.current?.focus();
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
          <img src={deleteIcon} alt="" />
        </button>
      )}
      <Link className="search__btn" to="/">
        <img src={searchIcon} alt="" />
      </Link>
    </label>
  );
};

export default Search;
