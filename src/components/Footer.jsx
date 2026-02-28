import React from 'react';
import '../styles.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {year} WALEECO — All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
