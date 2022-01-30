import React, { Component } from "react";
import { Navbar, Header, Content } from "../common";
import { connect } from "react-redux";
import { sendMessage } from "../../actions/smsActions";
import { Link } from "react-router-dom";
import { data } from "./data";
import classNames from "classnames";

class Layout extends Component {
  state = {
    text: "",
    data: [],
  };

  componentDidMount() {
    this.setState({
      data,
    });
  }

  search = (nameKey, myArray) => {
    return myArray.filter((data) =>
      data.location.toLowerCase().includes(nameKey.toLowerCase())
    );
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (e.target.value !== "") {
      const resultObject = this.search(e.target.value, data);
      console.log(resultObject);
      this.setState({
        data: resultObject,
      });
    } else {
      this.setState({ data });
    }
  };

  render() {
    const { data, text } = this.state;

    const displayProduct =
      data instanceof Array
        ? data.map((product) => (
            <div
              key={product.id}
              className="shadow m-2 p-3 col-xs-7 col-sm-7 col-md-7 col-lg-2 product d-flex align-items-center justify-content-center flex-column"
            >
              <div
                id={"carouselExampleCaptions" + product.id}
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {product.images.map((image, index) => (
                    <div
                      className={classNames(
                        "carousel-item",
                        index === 0 && "active"
                      )}
                      key={index}
                    >
                      <img src={image} className="d-block w-100" alt="..." />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={"#carouselExampleCaptions" + product.id}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={"#carouselExampleCaptions" + product.id}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="mt-2 border-top col-md-12 d-flex justify-content-center align-items-center pt-1 flex-column">
                <span className="mt-2 fw-bold">{product.description}</span>
                <div className="">
                  <div className="">
                    <span className="fw-bold">Location:</span>{" "}
                    {product.location}
                  </div>
                  <div className="">
                    <span className="fw-bold">Price:</span> {product.price}
                  </div>
                  <div className="">
                    <span className="fw-bold">Parking:</span> {product.parking}
                  </div>
                  <div className="">
                    <span className="fw-bold">Securiry:</span>{" "}
                    {product.security}
                  </div>
                  <div className="">
                    <span className="fw-bold">Water:</span> {product.water}
                  </div>
                </div>
                <div className="">{product.more}</div>
                {/* <button className="btn btn-sm btn-success mt-3">
                  Enquire more
                </button> */}
                <div className="fs-6 text-success mt-3 fst-italic">
                  For booking and viewing arrangements contact or WhatsApp
                  0723038130
                </div>
              </div>
            </div>
          ))
        : null;
    return (
      <React.Fragment>
        <Navbar onChange={this.onChange} name="text" value={text} />
        <Header />
        <Content
          title="Our Properties"
          content={displayProduct}
          onChange={this.onChange}
          name="text"
          value={text}
        />
      </React.Fragment>
    );
  }
}

export default connect(null, { sendMessage })(Layout);
