import React from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from "prop-types";

function Navbar({ auth }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DevConnector
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profiles">
                {" "}
                Developers
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            {auth.isAuthenticated ? "":
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
              </Link>
              </li>}
            {auth.isAuthenticated ? "":
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
              </Link>
              </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = {
  auth: PropTypes.object.isRequired
}
const mapState = state => ({
  auth: state.auth
})
export default connect(mapState, null)(Navbar);
