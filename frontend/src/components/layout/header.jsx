import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container container-fluid px-5">
          <NavLink className="navbar-brand fs-1" href="#">
            TORMET
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse bg-light p-3" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register-tournament" className="nav-link">
                  New Tournament
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
