import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">AMS</Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">Feedback</Link>
            </li>
          </ul>

          {/* Login Dropdown */}
          <div className="dropdown me-3">
            <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Login
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/login/teacher">Login as Teacher</Link></li>
              <li><Link className="dropdown-item" to="/login/student">Login as Student</Link></li>
            </ul>
          </div>

          {/* Sign Up Dropdown */}
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Sign Up
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/signup/teacher">Sign Up as Teacher</Link></li>
              <li><Link className="dropdown-item" to="/signup/student">Sign Up as Student</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
