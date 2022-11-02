import React from "react";
import logo from "./../Assets/logo.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-conataier">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
