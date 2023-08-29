import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="leftSection">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            Julio
            <span className="highlight"> Nolasco</span>
          </h1>
          <p className="hero-description">Software Engineer.</p>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="bton--large"
            onClick={() =>
              window.open(
                "https://github.com/jrnolasc/Resume/blob/main/Julio_Nolasco_Resume.pdf",
                "_blank"
              )
            }
          >
            Resume <i className="fa-solid fa-download" />
          </Button>
        </div>
        <div className="rightSection">
          <img
            className="heroImg"
            src="images/Hero_Img.gif"
            alt="images/header_img.png"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
