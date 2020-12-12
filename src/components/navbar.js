import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import './navbar.css';

const Navbar = ({ history }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
            >
              Weather
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/forecast"
            >
              Forecast
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/history"
            >
              History
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/pollution"
            >
              Pollution
            </NavLink>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
