// ContactMe.js

import React from "react";
import "./ContactMe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-me">
      <div className="contact-me-content">
        <div className="form-container">
          <h2>Contact Me</h2>
          <p>
            Feel free to reach out! You can contact me through the form below or
            via email at tommyye04@hotmail.com.
          </p>
          <form action="https://formspree.io/f/xjvnvyra" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="6"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="additional-text">
          <h3>Get in touch</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            {" : "} 647-781-8203
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
