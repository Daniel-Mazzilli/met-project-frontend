import { useState } from "react";
import Hamburger from "../../assets/hamburger_light.png";
import CloseIcon from "../../assets/x_light.png";
import "./Navbar.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <img
        className="navbar__img"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        src={isMenuOpen ? CloseIcon : Hamburger}
        alt="hamburger menu icon"
      />
      METxplorer
      {isMenuOpen && (
        <div className="navbar__open">
          <div className="navbar__open__content">
            <div className="navbar__open__content__link">Login</div>
            <div className="navbar__open__content__link">Play</div>
            <div className="navbar__open__content__link">Search</div>
            <div className="navbar__open__content__link">Favorites</div>
            <div className="navbar__open__content__link">Random</div>
            <div className="navbar__open__content__link">About</div>
            <div className="navbar__open__content__link">MET API</div>
            <div className="navbar__open__content__link">Visit</div>
            <div className="navbar__open__content__link">Dark Mode</div>
          </div>
          <div
            className="navbar__open__cover"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></div>
        </div>
      )}
    </nav>
  );
}
