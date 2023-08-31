import React from "react";
import "../../App.css";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="aboutMe-Container">
        <div className="leftSection">
          <h1 className="abtMe">About Me</h1>
          <p className="summary">
            With over six years of experience in the tech industry, I am a
            seasoned professional dedicated to driving innovation and
            excellence. My diverse expertise encompasses multiple domains,
            including impactful contributions to game development, DevOps
            practices, and cutting-edge web development. Throughout my journey,
            I have honed my skills and refined my problem-solving abilities,
            always seeking to bridge the gap between creativity and technical
            precision. I am also known for being a collaborative team player,
            thriving in environments where I can work closely with others to
            achieve shared goals.
          </p>
          <div className="abt-facts">
            <div className="abt-facts-box">
              <ul>
                <li>
                  <i class="fa-solid fa-graduation-cap"></i>
                  <p className="facts-text">
                    Earned my Computer Science degree from the University of
                    Arkansas.
                  </p>
                </li>
              </ul>
            </div>
            <div className="abt-facts-box">
              <ul>
                <li>
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                  <p className="facts-text">
                    I enjoy restoring classic cars in my free time. Right now,
                    I'm busy working on a 76 Firebird!
                  </p>
                </li>
              </ul>
            </div>
            <div className="abt-facts-box">
              <ul>
                <li>
                  <i class="fa-solid fa-music"></i>
                  <p className="facts-text">
                    I enjoy picking up new instruments. I've been playing the
                    violin for over 7 years, and now I'm diving into learning
                    the flute.
                  </p>
                </li>
              </ul>
            </div>
            <div className="abt-facts-box">
              <ul>
                <li>
                  <i class="fa-solid fa-headphones"></i>
                  <p className="facts-text">
                    I used to host an in-house podcast where I chatted with my
                    colleagues. It was a great way to learn more about them and
                    what drives them.
                  </p>
                </li>
              </ul>
            </div>
          </div>
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
