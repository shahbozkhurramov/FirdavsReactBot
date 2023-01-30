import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  function toggleMenu(){
    const nav = document.querySelector('#nav') as HTMLElement;
    const menu = document.querySelector('#menu') as HTMLElement;
    const menuToggle = document.querySelector('.nav__toggle') as HTMLElement;
    let isMenuOpen = false;
    isMenuOpen = !isMenuOpen;
    menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
    menu.hidden = !isMenuOpen;
    nav.classList.toggle('nav--open');
  }
  return (
    <div className="app-header">
      <Link to="">
      <img src={require('../Images/logo.png')} alt="App logo" className="app-logo" />
      </Link>
      <nav id="nav" className="nav">
          <ul className="nav__menu" id="menu" tabIndex={-1} aria-label="main navigation" hidden>
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={toggleMenu}>Kurslar</Link>
            </li>
            <li className="nav__item">
              <Link to="/contactus" className="nav__link" onClick={toggleMenu}>Bog'lanish</Link>
            </li>
            <li className="nav__item">
              <Link to="/aboutus" className="nav__link" onClick={toggleMenu}>Biz haqimizda</Link>
            </li>
          </ul>
          <button className="nav__toggle" aria-expanded="false" aria-controls="menu" onClick={toggleMenu}>
            <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
              <title>Toggle Menu</title>
              <g>
                <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
                <circle className="menuicon__circle" r="23" cx="25" cy="25" />
              </g>
            </svg>
          </button>
        </nav>
    </div>

  );
}
