import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar({ mode, toggleMode }) {
  return (
    <nav className={!mode ? "navLight" : "navDark"}>
      <p>
        <span>S</span>ourjya7
      </p>
      <ul>
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="links">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="links">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="links">
            Contact
          </Link>
        </li>
      </ul>
      <div className="form-check form-switch darkMode">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={toggleMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {!mode ? "Enable Dark Mode" : "Enable Light Mode"}
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
