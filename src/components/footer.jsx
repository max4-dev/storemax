import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <Link to="/">
          <img className="logo__img" src="images/footer-logo.jpg" alt="" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
