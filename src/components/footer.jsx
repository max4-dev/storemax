import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/footer-logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <Link to="/">
          <img className="logo__img" src={logo} alt="" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
