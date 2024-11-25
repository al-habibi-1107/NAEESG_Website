import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>
            <i className="fas fa-phone"></i> Quick Contact: +91 72762 50850 | +91 93342 02265
          </span>
          <span>
            <i className="fas fa-envelope"></i> enterprisenae@gmail.com
          </span>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img
            src="/logo.png"
            alt="NAE ElectroSwitchgear  Pvt. Ltd."
            className="logo-image"
          />
          <p className="logo-text">NAE Electro Switchgear Pvt. Ltd.</p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setMenuOpen(false)}>
               Products
              </Link>
            </li>
            <li>
              <Link to="/brands" onClick={() => setMenuOpen(false)}>
                Brands
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;