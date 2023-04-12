import { useState, FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './Search';

import logo from '../assets/images/logo.svg';
import sun from '../assets/images/icons/sun.svg';
import moon from '../assets/images/icons/moon.svg';
import cartIcon from '../assets/images/icons/cart.svg';
import { selectTotalCount } from '../redux/cart/selectors';
import { useTheme } from '../hooks/use-theme';

enum Theme {
  WHITE = 'white',
  DARK = 'dark'
}

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const totalCount = useSelector(selectTotalCount);
  const {theme, setTheme} = useTheme();

  const handleToggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const handleChangeTheme = () => {
    setTheme(theme === Theme.WHITE ? Theme.DARK : Theme.WHITE);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="logo" to="/">
            <img className="logo__img" src={logo} alt="" />
          </Link>
          <Search />
          <ul className={'sign' + (open ? ' sign--active' : '')}>
            <li className="sign__item">
              <button onClick={handleChangeTheme} className="sign__btn cart-btn">
                {theme === Theme.WHITE ? <img src={moon} alt="" /> :
                <img src={sun} alt="" />}
              </button>
            </li>
            <li className="sign__item">
              <Link className="signin sign__btn" to="/login">
                Войти
              </Link>
            </li>
            <li className="sign__item">
              <Link className="signup sign__btn" to='/register'>
                Регистрация
              </Link>
            </li>
            <li className="sign__item">
              <Link className="sign__btn cart-btn" to="/cart">
                {totalCount ? <span>{totalCount}</span> : ''}
                <img src={cartIcon} alt="" />
              </Link>
            </li>
          </ul>
          
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
