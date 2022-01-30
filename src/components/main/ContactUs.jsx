import React from "react";
import { Navbar, Header, Content, Footer } from "../common";
import { ContactContent } from ".";

const ContactUs = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Content title="Contact Us" content={<ContactContent />} />
      <Footer />
    </React.Fragment>
  );
};

export default ContactUs;
