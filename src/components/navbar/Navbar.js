import { useState } from "react";
import Hamburger from "../../assets/hamburger_light.png";
import "./Navbar.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <img className="navbar__img" onClick={() => setIsMenuOpen(true)} src={Hamburger} alt="hamburger menu icon" />
      MET Explorer
      {isMenuOpen && <div className="navbar__open">
        <div className="navbar__open__content">
            Hello
        </div>
        <div className="navbar__open__cover" onClick={() => setIsMenuOpen(false)}> 
        </div>
      </div>}
    </nav>
  );
}
