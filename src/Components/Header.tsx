import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  function toggleMenu(){
    var menu = document.getElementById("nav-menu") as HTMLElement;
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  return (
    <div className="app-header">
      <img src={require('../Images/firdavs.jpg')} alt="App logo" className="app-logo" />
      <div className="menu-button" id="menu-button" onClick={toggleMenu}>
          <div className="menu-button-line"></div>
          <div className="menu-button-line"></div>
          <div className="menu-button-line"></div>
        </div>
        <nav className="nav-menu" id="nav-menu">
          <ul>
            <li><Link to="/firdavsreactbot" onClick={toggleMenu}>Kurslar</Link></li>
            <li><Link to="/firdavsreactbot/contactus" onClick={toggleMenu}>Bog'lanish</Link></li>
          </ul>
        </nav>
    </div>
  );
}
