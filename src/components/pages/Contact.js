import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-msg">Let's get in touch!</p>
      <div className="contact-content">
        <div className="info-box">
          <span className="icons">
            <i class="fa-regular fa-envelope"></i>
          </span>
          <div className="info-text">
            <h3>Email</h3>
            <p>julio96@att.net</p>
          </div>
        </div>
        <div className="info-box">
          <span className="icons">
            <i
              onClick={() =>
                window.open("https://github.com/jrnolasc", "_blank")
              }
              class="fa-brands fa-github"
            ></i>
          </span>
          <div className="info-text">
            <h3>Github</h3>
            <p
              onClick={() =>
                window.open("https://github.com/jrnolasc", "_blank")
              }
            >
              jrnolasc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
