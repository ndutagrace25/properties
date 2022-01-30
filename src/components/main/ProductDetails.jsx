import React, { Component } from "react";
import { Navbar, Footer } from "../common";
import { RequestProduct } from ".";

class ProductDetails extends Component {
  state = {};

  render() {
    const { name, image, description } = this.props.location.state;

    const displayDescription =
      description instanceof Array
        ? description.map((desc, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center flex-row px-5"
            >
              {desc}
            </div>
          ))
        : null;
    return (
      <React.Fragment>
        <Navbar />
        <div className="container mb-4">
          <div className="flex-row d-flex justify-content-between align-items-center product-desc">
            <div className="col-md-6">
              <img src={image} alt="" className="img-fluid" />
            </div>
            <div className="d-flex flex-column col-md-6">
              <strong className="text-capitalize d-flex justify-content-center my-3">
                {name}
              </strong>
              {displayDescription}
              {/* <div className="mt-3 d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-sm btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Request This Product
                </button>
                <RequestProduct name={name} />
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProductDetails;
