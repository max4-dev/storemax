import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="logo" to="/">
            <img className="logo__img" src="images/logo.svg" alt="" />
          </Link>
          <label className="search">
            <input className="search__input" type="text" placeholder="Поиск" />
            <Link to="/">
              <button className="search__btn" type="submit">
                <img src="images/icons/search.svg" alt="" />
              </button>
            </Link>
          </label>
          <div className={'sign' + (open ? ' sign--active' : '')}>
            <a className="signin sign__btn" href="#">
              Войти
            </a>
            <a className="signup sign__btn" href="#">
              Регистрация
            </a>
            <Link className="sign__btn cart-btn" to="/cart">
              <span>3</span>
              <img src="images/icons/cart.svg" alt="" />
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
