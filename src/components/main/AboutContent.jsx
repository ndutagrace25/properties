import React from "react";
import { DemoRequest } from ".";
import { call, mail } from "../../images";

const AboutContent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center about">
      <div className="about-text col-md-8 mt-3 px-2">
        <p>
          Only Homes Properties we specialize in House and Estate Management,
          Sales of Commercial & Residential Houses, and Land for Sale /Lease and
          House Letting .
        </p>
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap align-items-center">
            <div className="d-flex flex-column about-text">
              <div className="my-2">
                <i class="fas fa-phone"></i>
                <a className="mx-3" href="tel:0722946748">
                  +254723038130
                </a>
              </div>
            </div>
            <div className="d-flex flex-column about-text">
              <div className="my-2">
                <i class="fas fa-envelope-square"></i>
                <a className="mx-3" href="mailto:abedigitalsltd@gmail.com">
                  onlyhomesproperties@gmail.com
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
                      src="https://maps.google.com/maps?q=ruiru%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                    <a href="https://www.online-timer.net"></a>
                    <br />

                    <i class="fas fa-map-marker"></i>
                    <span className="mx-3">
                      Our Office - Ruiru, Nairobi Kenya 254
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
      </div>
    </div>
  );
};

export default AboutContent;
