import React from "react";
import { DemoRequest } from ".";
import { call, mail, office } from "../../images";

const ContactContent = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap align-items-center">
        <div className="d-flex flex-column about-text">
          <img
            src={call}
            alt=""
            srcSet=""
            className="image-fluid my-2"
            height="70"
            width="100"
          />
          <div className="my-2">
            <i className="fas fa-phone"></i>
            <a className="mx-3" href="tel:0722946748">
              +254700000000
            </a>
          </div>
        </div>
        <div className="d-flex flex-column about-text">
          <img
            src={mail}
            alt=""
            srcSet=""
            className="image-fluid my-2"
            height="70"
            width="100"
          />
          <div className="my-2">
            <i className="fas fa-envelope-square"></i>
            <a className="mx-3" href="mailto:abedigitalsltd@gmail.com">
              example@gmail.com
            </a>
          </div>
        </div>
        <div className="d-flex flex-column about-text">
          <div className="my-2">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="184"
                  height="147"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Revelon%20Plaza&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://www.online-timer.net"></a>
                <br />

                <i className="fas fa-map-marker"></i>
                <span className="mx-3">
                  Our Office - Revlon Plaza, Second Floor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-3 col-12 d-flex justify-content-center">
        <p>
          <button
            className="btn btn-sm btn-success"
            data-bs-toggle="modal"
            data-bs-target="#demoRequest"
          >
            Request For System Demo
          </button>
          <DemoRequest />
        </p>
      </div> */}
    </div>
  );
};

export default ContactContent;
