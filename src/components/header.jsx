import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="logo" href="#">
            <img className="logo__img" src="images/logo.svg" alt="" />
          </a>
          <label className="search">
            <input className="search__input" type="text" placeholder="Поиск" />
            <button className="search__btn" type="submit">
              <img src="images/icons/search.svg" alt="" />
            </button>
          </label>
          <div className="sign">
            <a className="signin sign__btn" href="#">
              Войти
            </a>
            <a className="signup sign__btn" href="#">
              Регистрация
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
