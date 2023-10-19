import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/new_logo.jpg";

class Navbar extends Component {
  state = {};
  render() {
    const { value, name, onChange } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link
            className="navbar-brand d-flex flex-row align-items-center"
            to="/"
          >
            <div className="rounded-circle">
              <img
                src={logo}
                alt=""
                srcSet=""
                height="50px"
                width="70px"
                className="rounded-circle"
              />
            </div>
            <span className="mx-2 texthead">Only Homes Properties</span>
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Our Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <input
                  type="text"
                  className="form-control form-control-sm col-2"
                  value={value}
                  onChange={onChange}
                  name={name}
                  placeholder="Search location"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
