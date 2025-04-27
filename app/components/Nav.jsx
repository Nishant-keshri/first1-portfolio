import React, { useState } from 'react';
import './Total.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Navbar'>
      <div className="NavLeft">PortFolio</div>

      {/* Hamburger Button */}
      <div className="Hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav Links */}
      <div className={`NavCenter ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#about" onClick={toggleMenu}>About me</a></li>
          <li><a href="#works" onClick={toggleMenu}>My Works</a></li>
          <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
        </ul>
      </div>

      <div className="NavRight">
        <a href="/information">
          <button>Contact</button>
        </a>
      </div>
    </div>
  )
}

export default Nav;
