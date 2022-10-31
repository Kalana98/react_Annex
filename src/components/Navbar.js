import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [togglerIcon, setTogglerIcon] = useState("nav__toggler");

  const navToggler = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
    //TogglerIcon

    togglerIcon === "nav__toggler"
      ? setTogglerIcon("nav__toggler toggler")
      : setTogglerIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <h5> Hotline : 0763996272</h5>

      <NavLink to="/" className="nav__brand">
        Ego Annex
      </NavLink>
      <ul className={active}>
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/Gallery" className="nav__link">
            Gallery
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/About" className="nav__link">
            About us
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/Contact" className="nav__link">
            Contact us
          </NavLink>
        </li>
      </ul>
      <div onClick={navToggler} className={togglerIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
