import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <header className="site-header dark">
      <div className="container header-inner">
        <Link className="brand" to="/">WALEECO</Link>
        <nav id="primary-nav" className="nav">
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <Link className="btn contact-red" to="/contact">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
