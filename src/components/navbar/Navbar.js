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
      MET Explorer
      {isMenuOpen && (
        <div className="navbar__open">
          <div className="navbar__open__content">Hello, Dan!</div>
          <div
            className="navbar__open__cover"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></div>
        </div>
      )}
    </nav>
  );
}
