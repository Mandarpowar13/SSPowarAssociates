import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import logo from "../content/logo.png";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/" style={{ fontSize: "13px" }}>
          <img
            src={logo} // Update with correct image URL
            width="60"
            height="30"
            alt="Logo"
          />
          S S POWAR AND ASSOCIATE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
