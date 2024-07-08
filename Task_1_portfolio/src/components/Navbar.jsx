import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [navLinks, setNavLinks] = useState(false);
  const toogleMenu = () => {
    setMenuToggle(!menuToggle);
    if (menuToggle == false) {
      setNavLinks(!navLinks);
    } else {
      setNavLinks(!navLinks);
    }
  };
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="navbar">
      {navLinks && (
        <div className="modal">
          <Link to="/">01. Home</Link>
          <Link to="/about">02. About</Link>
          <Link to="/experience">03. Experience</Link>
          <Link to="/work">04. Work</Link>
          <Link to="/contact">05. Contact</Link>
        </div>
      )}
      <div className="logo">PE</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="menu">
        {menuToggle === false ? (
          <button onClick={toogleMenu}>
            <HiMenuAlt3 />
          </button>
        ) : (
          <button onClick={toogleMenu}>
            <AiOutlineClose />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
