import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "./logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-default navbar-expand-lg fixed-top custom-navbar">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <ion-icon size="large" name="menu"></ion-icon>
          </button>
          <NavLink to="/">
            <img src={logo} className="img-fluid nav-logo-mobile" alt="logo" />
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="container">
              <NavLink to="/">
                <img
                  src={logo}
                  className="img-fluid nav-logo-desktop"
                  alt="logo"
                />
              </NavLink>
              <ul
                className="navbar-nav ml-auto nav-right"
                dataeasing="easeInOutExpo"
                dataspeed="1250"
                dataoffset="65"
              >
                <li className="nav-item nav-custom-link">
                  <p className="nav-link">
                    <NavLink to="/">Home</NavLink>
                  </p>
                </li>
                <li className="nav-item nav-custom-link">
                  <p className="nav-link">
                    <NavLink to="/Vademecum">Vademecum</NavLink>
                  </p>
                </li>
                <li className="nav-item nav-custom-link">
                  <p className="nav-link">
                    <NavLink to="/Nosotros">Nosotros</NavLink>
                  </p>
                </li>
                <li className="nav-item nav-custom-link">
                  <p className="nav-link">
                    <NavLink to="/Contactanos">Contactanos</NavLink>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
