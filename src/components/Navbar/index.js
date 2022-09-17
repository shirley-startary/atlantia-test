import React from "react";
import "./Navbar.css"
import logo from "../../logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="nav-logo"><img src={logo}/> </span>
    </nav>
  )
}

export default Navbar;