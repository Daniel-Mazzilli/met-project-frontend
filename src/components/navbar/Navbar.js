import { useState } from "react";
import { useContextProvider } from "../../providers/Provider.js";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer.js";
import Hamburger from "../../assets/hamburger_light.png";
import CloseIcon from "../../assets/x_light.png";
import Logo from "../../assets/METx_logo.png";
import "./Navbar.scss";

export default function Navbar() {
  const { isMenuOpen, setIsMenuOpen, isMenuClosing, setIsMenuClosing } =
    useContextProvider();

  const navigate = useNavigate();

  const [navLinks, setNavLinks] = useState([
    { val: "Login", route: "login" },
    { val: "Play", route: "play" },
    { val: "Explore", route: "search" },
    { val: "Favorites", route: "user/favorites" },
    { val: "Random", route: "random-item" },
    { val: "About", route: "about" },
  ]);

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => setIsMenuOpen(false), "795");
    } else {
      setIsMenuOpen(true);
      setIsMenuClosing(false);
    }
  }

  return (
    <nav className="navbar">
      <img
        className="navbar__logo hover__pointer"
        src={Logo}
        alt="logo"
        onClick={() => {
          navigate("/");
          setIsMenuOpen(false);
        }}
      />
      <Link
        className="navbar__header"
        to="/"
        onClick={() => setIsMenuOpen(false)}
      >
        METxplorer
      </Link>
      <img
        className="navbar__toggle hover__pointer"
        onClick={closeMenu}
        src={isMenuOpen && !isMenuClosing ? CloseIcon : Hamburger}
        alt="hamburger menu icon"
      />
      {/* open menu section */}
      {isMenuOpen && (
        <div
          className={
            isMenuClosing ? "navbar__open nav-close" : "navbar__open nav-open"
          }
        >
          <div className="navbar__open__content">
            {navLinks &&
              navLinks.map(({ val, route }, i) => (
                <Link
                  key={i}
                  className="navbar__open__content__link"
                  to={route}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {val}
                </Link>
              ))}
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
            <div>Dark Mode TBA</div>
            <Footer />
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div
          className={
            isMenuClosing ? "navbar__cover__inactive" : "navbar__cover"
          }
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
}
