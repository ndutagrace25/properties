import React from "react";
import { Link } from "react-router-dom";

const Content = ({ content, title, name, onChange, value }) => {
  return (
    <section className="bg-white py-3">
      <div className="mobile-menu d-flex justify-content-center border-bottom col-md-12">
        <div className="navbar-nav texthead d-flex align-items-center d-flex flex-row">
          <div className="nav-item ms-3">
            <Link className="nav-link active" aria-current="page" to="/">
              Our Properties
            </Link>
          </div>
          <div className="nav-item ms-3">
            <Link className="nav-link" to="/aboutus">
              About Us
            </Link>
          </div>
          <div className="nav-item ms-3 search">
            <input
              type="text"
              className="form-control form-control-sm col-1"
              value={value}
              onChange={onChange}
              name={name}
              placeholder="Search location"
            />
          </div>
        </div>
      </div>
      <h4 cla="text-center font-weight-bold text-warning">{title}</h4>

      <div className="d-flex justify-content-between flex-wrap container-fluid">
        {content}
      </div>
    </section>
  );
};

export default Content;
