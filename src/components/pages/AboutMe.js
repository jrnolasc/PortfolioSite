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
            I am a software engineer with over four years of experience in Web
            and Game Development. I have a passion for learning and creating all
            sorts of applications. I enjoy getting to work with others to
            develop new and creative projects.
          </p>
        </div>
        <div className="rightSection">
          <div className="skill-box">
            <h4>FrontEnd</h4>
            <ul>
              <li>
                <i class="fa-brands fa-react"></i>
              </li>
              <li>
                <i class="fa-brands fa-css3-alt"></i>
              </li>
              <li>
                <i class="fa-brands fa-html5"></i>
              </li>
              <li>
                <i class="fa-brands fa-js"></i>
              </li>
            </ul>
          </div>
          <div className="skill-box">
            <h4>BackEnd</h4>
            <ul>
              <li>this</li>
              <li>this</li>
              <li>this</li>
              <li>this</li>
            </ul>
          </div>
          <div className="skill-box">
            <h4>Tools</h4>
            <ul>
              <li>
                <i class="fa-brands fa-git"></i>
              </li>
              <li>
                <i class="fa-brands fa-docker"></i>
              </li>
              <li>
                <i class="fa-brands fa-aws"></i>
              </li>
              <li>this</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
