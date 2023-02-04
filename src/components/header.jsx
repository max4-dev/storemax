import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTotalCount } from '../redux/slices/cartSlice';
import Search from './Search';

import logo from '../assets/images/logo.svg';
import cartIcon from '../assets/images/icons/cart.svg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const totalCount = useSelector(selectTotalCount);

  const handleToggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="logo" to="/">
            <img className="logo__img" src={logo} alt="" />
          </Link>
          <Search />
          <div className={'sign' + (open ? ' sign--active' : '')}>
            <a className="signin sign__btn" href="#">
              Войти
            </a>
            <a className="signup sign__btn" href="#">
              Регистрация
            </a>
            <Link className="sign__btn cart-btn" to="/cart">
              {totalCount ? <span>{totalCount}</span> : ''}
              <img src={cartIcon} alt="" />
            </Link>
          </div>
          <button
            className={'menu-btn' + (open ? ' menu-btn--active' : '')}
            onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
