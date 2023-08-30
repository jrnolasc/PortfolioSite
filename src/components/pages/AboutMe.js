import React from "react";
import "../../App.css";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="aboutMe-Container">
        <div className="leftSection">
          <img className="abtMe-img" src="images/header_img.png" alt="idk" />
          <h1 className="abtMe">About Me</h1>
          <p className="summary">
            With over six years of experience in the tech industry, I am a
            seasoned professional dedicated to driving innovation and
            excellence. My diverse expertise encompasses multiple domains,
            including impactful contributions to game development, DevOps
            practices, and cutting-edge web development. Throughout my journey,
            I have honed my skills and refined my problem-solving abilities,
            always seeking to bridge the gap between creativity and technical
            precision.
          </p>
        </div>
        <div className="rightSection">
          <div className="skill-box">
            <h4>FrontEnd</h4>
            <ul>
              <li>
                <img
                  className="skill-icon"
                  src="images/react.png"
                  alt="not here"
                />
              </li>
              <li>
                <img
                  className="skill-icon"
                  src="images/css.png"
                  alt="not here"
                />
              </li>
              <li>
                <img
                  className="skill-icon"
                  src="images/Html.png"
                  alt="not here"
                />
              </li>
              <li>
                <img
                  className="skill-icon"
                  src="images/tailwind.png"
                  alt="not here"
                />
              </li>
            </ul>
          </div>
          <div className="skill-box">
            <h4>BackEnd</h4>
            <ul>
              <li>
                <img
                  className="skill-icon"
                  src="images/postgresql.png"
                  alt="not here"
                />
              </li>
              <li>
                <img
                  className="skill-icon"
                  src="images/php.png"
                  alt="not here"
                />
              </li>
              <li>
                <img
                  className="skill-icon"
                  src="images/mySql.png"
                  alt="not here"
                />
              </li>
              <li>
                <img
                  className="skill-icon"
                  src="images/restAPI.png"
                  alt="not here"
                />
              </li>
            </ul>
          </div>
          <div className="skill-box">
            <h4>Tools</h4>
            <ul>
              <li>
                <i class="fa-brands fa-git"></i>
              </li>
              <li>
                <img
                  className="skill-icon"
                  src="images/aws.png"
                  alt="not here"
                />
              </li>
              <li>
                <img
                  className="skill-icon"
                  src="images/docker.png"
                  alt="not here"
                />
              </li>
              <li>
                <img
                  className="skill-icon"
                  src="images/nextjs.png"
                  alt="not here"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
