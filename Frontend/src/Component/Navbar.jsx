import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
<<<<<<< HEAD
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">AMS</Link>
=======
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> d3f3a75b4aa421a127a48bf63e64570989a306ef

  const toggleNavbar = () => {
    setIsOpen(!isOpen);

    // Prevent body scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">
                Feedback
              </Link>
            </li>
          </ul>

          {/* Login Dropdown */}
          <div className="dropdown me-3">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Login
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/login/teacher">
                  Login as Teacher
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/login/student">
                  Login as Student
                </Link>
              </li>
            </ul>
          </div>

          {/* Sign Up Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Sign Up
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/signup/teacher">
                  Sign Up as Teacher
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/signup/student">
                  Sign Up as Student
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
