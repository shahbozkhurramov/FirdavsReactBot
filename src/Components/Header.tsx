import React from "react";

export default function Header() {
  function toggleMenu(){
    var menu = document.getElementById("nav-menu") as HTMLElement;
    var closeBtn = document.getElementById("close-button") as HTMLElement;
    if (menu.style.display === "block") {
      menu.style.display = "none";
      closeBtn.style.display = "none";
    } else {
      menu.style.display = "block";
      closeBtn.style.display = "block";
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
            <li><a href="/firdavsreactbot">Kurslar</a></li>
            <li><a href="/firdavsreactbot/contactus">Bog'lanish</a></li>
          </ul>
        </nav>
    </div>
  );
}
