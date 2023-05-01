import React from "react";
import ContactForm from "../../components/ContactForm";
import FormatWrapper from "..";

const ContactUs = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <FormatWrapper>
      <div className="mw">
        <div className="contactpaged">
          <div className="title">
            <h1>Contact Us</h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </FormatWrapper>
  );
};

export default ContactUs;
