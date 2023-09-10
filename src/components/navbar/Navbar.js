import { useEffect, useState } from "react";
import { useContextProvider } from "../../providers/Provider.js";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "../../assets/hamburger_light.png";
import CloseIcon from "../../assets/x_light.png";
import Logo from "../../assets/METx_logo.png";
import "./Navbar.scss";

export default function Navbar() {
  const { isMenuOpen, setIsMenuOpen } = useContextProvider();

  const navigate = useNavigate();

  const [navLinks, setNavLinks] = useState([
    { val: "Login", route: "login" },
    { val: "Play", route: "play" },
    { val: "Search", route: "search" },
    { val: "Favorites", route: "favorites" },
    { val: "Random", route: "random" },
    { val: "About", route: "about" },
  ]);

  //add function to block scroll when navmenu open?

  return (
    <nav className="navbar">
      <img
        className="navbar__logo"
        src={Logo}
        alt="logo"
        onClick={() => {
          navigate("/");
          setIsMenuOpen(false);
        }}
      />
      METxplorer
      <img
        className="navbar__toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        src={isMenuOpen ? CloseIcon : Hamburger}
        alt="hamburger menu icon"
      />
      {/* open menu section */}
      {isMenuOpen && (
        <div className="navbar__open">
          <div className="navbar__open__content">
            {navLinks &&
              navLinks.map(({ val, route }, i) => (
                <Link
                  key={i}
                  className="navbar__open__content__link"
                  to={route}
                >
                  {val}
                </Link>
              ))}
            ;
            <a
              className="navbar__open__content__link"
              href="https://metmuseum.github.io/"
              target="_blank"
            >
              MET API
            </a>
            <a
              className="navbar__open__content__link"
              href="https://www.metmuseum.org//"
              target="_blank"
            >
              Visit
            </a>
            <div className="navbar__open__content__link">Dark Mode</div>
          </div>
        </div>
      )}
    </nav>
  );
}
