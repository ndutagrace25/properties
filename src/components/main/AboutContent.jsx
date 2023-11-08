import React from "react";

const AboutContent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center about">
      <div className="about-text col-md-8 mt-3 px-2">
        <p>
          Only Homes Properties we specialize in House and Estate Management,
          Sales of Commercial & Residential Houses, House for Sell, House for
          Rent, and Land for Sale /Lease and House Letting.
        </p>

        <p>Some of our services include: </p>
        <ul>
          <li>House for sale in Kenya</li>
          <li>Homes for rent Nairobi</li>
          <li>Real estate agents Kenya</li>
          <li>Apartments for sale in Kenya</li>
          <li>Gated communities Nairobi</li>
          <li>Land for sale Kenya</li>
          <li>Commercial properties Nairobi</li>
          <li>Residential plots for sale Nairobi</li>
          <li>Property management services Kenya</li>
          <li>Rental apartments Nairobi, Kenya</li>
        </ul>
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap align-items-center">
            <div className="d-flex flex-column about-text">
              <div className="my-2">
                <i className="fas fa-phone"></i>
                <a className="mx-3" href="tel:0722946748">
                  +254723038130
                </a>
              </div>
            </div>
            <div className="d-flex flex-column about-text">
              <div className="my-2">
                <i className="fas fa-envelope-square"></i>
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
                      title="Only Homes Property"
                    ></iframe>
                    <a href="https://www.online-timer.net"></a>
                    <br />

                    <i className="fas fa-map-marker"></i>
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
