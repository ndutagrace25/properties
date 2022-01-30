import React from "react";
import { Navbar, Header, Content, Footer } from "../common";
import { AboutContent } from ".";

const Aboutus = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Content title="About Us" content={<AboutContent />} />
      <Footer />
    </React.Fragment>
  );
};

export default Aboutus;
