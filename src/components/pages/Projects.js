import React from "react";
import "../../App.css";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="project-title">Projects</h1>
        <div className="projects-grid">
          <div className="project-left">
            <img
              className="project-image"
              src="images/HTHAS.png"
              alt="Housing The Human and Sacred"
              onClick={() =>
                window.open(
                  "https://tesseract.hosted.uark.edu/human_and_sacred/public/virtualtour.html",
                  "_blank"
                )
              }
            />
            {/* <div className="hover-item"></div> */}
            <div className="project-text">
              <h3 className="project-name"> Housing The Human and Sacred</h3>
              <p>
                An innovative WebGL application enabling users to explore
                residences envisioned by the acclaimed architect Fay Jones.
              </p>
              <div className="tech-stack">
                <p className="tech">Unity</p>
                <p className="tech">C#</p>
              </div>
              <div className="project-links">
                <p
                  className="link-icons"
                  onClick={() =>
                    window.open(
                      "https://tesseract.hosted.uark.edu/human_and_sacred/public/virtualtour.html",
                      "_blank"
                    )
                  }
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="project-right">
            <img
              className="project-image"
              src="images/HTHAS.png"
              alt="Housing The Human and Sacred"
              onClick={() =>
                window.open(
                  "https://tesseract.hosted.uark.edu/human_and_sacred/public/virtualtour.html",
                  "_blank"
                )
              }
            />
            {/* <div className="hover-item"></div> */}
            <div className="project-text">
              <h3 className="project-name"> Housing The Human and Sacred</h3>
              <p>
                An innovative WebGL application enabling users to explore
                residences envisioned by the acclaimed architect Fay Jones.
              </p>
              <div className="tech-stack">
                <p className="tech">Unity</p>
                <p className="tech">C#</p>
              </div>
              <div className="project-links">
                <p
                  className="link-icons"
                  onClick={() =>
                    window.open(
                      "https://tesseract.hosted.uark.edu/human_and_sacred/public/virtualtour.html",
                      "_blank"
                    )
                  }
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="project-left">
            <img
              className="project-image"
              src="images/St.Mary's360.PNG"
              alt="St.Mary's_360"
              onClick={() =>
                window.open("https://migrantvoices.uark.edu/german/", "_blank")
              }
            />
            {/* <div className="hover-item"></div> */}
            <div className="project-text">
              <h3 className="project-name"> St.Mary_360</h3>
              <p>
                An immersive 360-degree tour unveiling the captivating interiors
                and architectural nuances of St. Mary's Church in Altus,
                Arkansas. Embark on a digital journey that transports you
                through the sacred spaces and rich history of this cherished
                architectural.
              </p>
              <div className="tech-stack">
                <p className="tech">Unity</p>
                <p className="tech">C#</p>
              </div>
              <div className="project-links">
                <p
                  className="link-icons"
                  onClick={() =>
                    window.open(
                      "https://migrantvoices.uark.edu/german/",
                      "_blank"
                    )
                  }
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </p>
                <p
                  className="link-icons"
                  onClick={() =>
                    window.open(
                      "https://github.com/jrnolasc/St.Marys360/tree/main",
                      "_blank"
                    )
                  }
                >
                  <i class="fa-solid fa-code"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
