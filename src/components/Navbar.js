import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowUp } from "react-icons/hi";
import { BsX, BsJustify } from "react-icons/bs";

export default function Navbar() {
  const [scrollTop, setScrollTop] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); //Toggle
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* SCROLL */}
      <a href="#" className={scrollTop ? "scroll-top active" : "scroll-top"}>
        <HiArrowNarrowUp />
      </a>
      {/* SCROLL BUTTON */}
      <a
        className={scrollTop ? "btn-mobile active" : "btn-mobile"}
        href="https://www.gorendezvous.com/en/Osteosante"
        rel="noreferrer noopener"
        target="_blank"
      >
        Réservez rendez-vous
      </a>
      <header className="header">
        <div className="navbar dp-flex align-c container">
          <Link to="/">
            <img src="./images/logo.jpg" alt="Logo" className="navbar__logo" />
          </Link>

          {/* ICON */}
          <div className="navbar__icon" onClick={handleClick}>
            {click ? <BsX /> : <BsJustify />}
          </div>

          <nav className={click ? "navbar__menu show-menu" : "navbar__menu"}>
            <Link to="/" className="navbar__link" onClick={closeMobileMenu}>
              Accueil
            </Link>
            <Link
              to="/services"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              A propos
            </Link>
            <Link
              to="/contact"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
          <div className="wrapper-btn">
            <a
              className="btn-takeadate"
              href="https://www.gorendezvous.com/en/Osteosante"
              rel="noreferrer noopener"
              target="_blank"
            >
              Réservez votre rendez-vous
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
