import React, { useState } from "react";
import "./Header.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="./logo.png" alt="Logo" width={100} />
        <div className="head">
          <a href="#residence">Residencies</a>
          <a href="/">Our Values</a>
          <a href="/">Contact Us</a>
          <a href="/">Get Started</a>
          <button className="button">
            <a href="/">Contact</a>
          </button>
        </div>
        <div className="menu">
          {isOpen ? (
            <AiOutlineCloseCircle  size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>
      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        <a href="#residence" onClick={closeMenu}>Residencies</a>
        <a href="/" onClick={closeMenu}>Our Values</a>
        <a href="/" onClick={closeMenu}>Contact Us</a>
        <a href="/" onClick={closeMenu}>Get Started</a>
        <button className="button">
          <a href="/" onClick={closeMenu}>Contact</a>
        </button>
      </div>
    </nav>
  );
};

export default Header;
