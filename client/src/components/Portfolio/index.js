import React from "react";
import "./style.css";
import farm from "../Blog/Posts/Post7/farm.gif";
function Portfolio() {
  return (
    <div>
      <h1 className="header">developer portfolio</h1>
      <hr className="headHr" />
      <div className="mainBody" id="portfolioBody">
        <p id="pf">
          Visit me on{" "}
          <a href="https://github.com/coryjquirk" target="_blank">
            GitHub
          </a>{" "}
          to see code I'm writing solo and collaboratively.
        </p>
        <p>Scroll down for <a href="#appsList">personal projects</a>.</p>
        <div id="toolKit">
          <h2>skills</h2>
          <p>
            <i className="fa fa-asterisk"></i> Ordered by{" "}
            <strong>familiar</strong> <i className="fa fa-arrow-right"></i>{" "}
            <strong>learning</strong>
          </p>
          <h3>Languages:</h3>
          <button className="toolkitBtn">Java</button>
          <button className="toolkitBtn">JavaScript</button>
          <button className="toolkitBtn">Python</button>
          <button className="toolkitBtn">Go</button>
          <button className="toolkitBtn">TypeScript</button>
          <button className="toolkitBtn">Ruby</button>
          <button className="toolkitBtn">C/C++</button>
          <button className="toolkitBtn">C#/.NET</button>
          <h3>CI/CD:</h3>
          <button className="toolkitBtn">Kubernetes</button>
          <button className="toolkitBtn">Jenkins</button>
          <button className="toolkitBtn">Docker</button>
          <button className="toolkitBtn">Helm</button>
          <button className="toolkitBtn">ArgoCD</button>
          <h3>Back end:</h3>
          <button className="toolkitBtn">SQL</button>
          <button className="toolkitBtn">Node</button>
          <button className="toolkitBtn">Heroku</button>
          <button className="toolkitBtn">MongoDB</button>
          <button className="toolkitBtn">Express</button>
          <button className="toolkitBtn">Azure</button>
          <h3>Front end:</h3>
          <button className="toolkitBtn">HTML</button>
          <button className="toolkitBtn">CSS</button>
          <button className="toolkitBtn">jQuery</button>
          <button className="toolkitBtn">Bootstrap</button>
          <button className="toolkitBtn">Fontawesome</button>
          <button className="toolkitBtn">CSS Flexbox + Grid</button>
          <h3>Frameworks:</h3>
          <button className="toolkitBtn">Spring Boot</button>
          <button className="toolkitBtn">React</button>
          <button className="toolkitBtn">Django</button>
          <button className="toolkitBtn">Angular</button>
          <button className="toolkitBtn">Vue</button>
          <h3>Methodologies:</h3>
          <button className="toolkitBtn">Agile</button>
          <button className="toolkitBtn">Scrum</button>
          <button className="toolkitBtn">Mobile-first</button>
          <button className="toolkitBtn">MVPs</button>
          <button className="toolkitBtn">PWAs</button>
          <h3>Software:</h3>
          <button className="toolkitBtn">IntelliJ</button>
          <button className="toolkitBtn">Visual Studio Code</button>
          <button className="toolkitBtn">Google Suite</button>
          <button className="toolkitBtn">Office 365</button>
          <h3>Dependency management:</h3>
          <button className="toolkitBtn">Maven</button>
          <button className="toolkitBtn">npm</button>
          <button className="toolkitBtn">apt</button>
          <button className="toolkitBtn">pip</button>
          <button className="toolkitBtn">yarn</button>
          <h3>Operating systems:</h3>
          <button className="toolkitBtn">Windows 10/11</button>
          <button className="toolkitBtn">Mac OS X</button>
          <button className="toolkitBtn">Linux (Ubuntu)</button>
        </div>
        <br/>
        <div id="appsList">
          <h2>personal projects</h2>
            <div>
              <div id="portfolioItem">
                <h2>Tomato Farm</h2>
                <p>
                  Managing farm plots of varying cultivation styles and their
                  tomato plants of various varieties (heirloom, cherry, slicer,
                  etc).
                  <ul>
                    <li>Full stack Spring Boot application</li>
                    <li>
                      Spring Security authentication, bcrypt password hashing
                    </li>
                    <li>SQL database</li>
                    <li>JUnit testing</li>
                  </ul>
                </p>
                <a
                  href="https://github.com/coryjquirk/farm-companion/"
                  target="_blank"
                >
                  <img
                    className="scrnsht"
                    src={
                      "https://res.cloudinary.com/dgwzirogr/image/upload/v1650613475/frontendSBA/appscreenshot_kotu04.png"
                    }
                    alt="farm companion"
                  />
                </a>
                <div className="portfBtnDiv">
                  <a
                    href="https://github.com/coryjquirk/TomatoFarm/"
                    target="_blank"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      GitHub repo <i className="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h2>Farm Companion</h2>
                <p>
                  Hosts useful information for the staff of a small farm
                  project.
                  <ul>
                    <li>Username/PW authentication</li>
                    <li>Excel sheets from Mircosoft OneDrive Cloud</li>
                    <li>
                      <a
                        href="https://storymaps.arcgis.com/stories/52354515142b4631a1e09d402743d36e"
                        target="_blank"
                      >
                        Interactive ArcGIS StoryMap
                      </a>
                    </li>
                    <li>MERN stack (MongoDB, Express, React, Node)</li>
                  </ul>
                </p>
                <a
                  href="https://github.com/coryjquirk/farm-companion/"
                  target="_blank"
                >
                  <img className="scrnsht" src={farm} alt="farm companion" />
                </a>
                <div className="portfBtnDiv">
                  <a
                    href="https://farm-companion.herokuapp.com/"
                    target="_blank"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      Deployed app <i className="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/farm-companion/"
                    target="_blank"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      GitHub repo <i className="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h2>this website</h2>
                <p>
                  I wrote this website from scratch to be optimized for mobile and desktop, and I designed many of the custom components you see.
                  <ul>
                    <li>Code: React, Express, Node, HTML/CSS/JavaScript</li>
                    <li>Deployment: NameSilo DNS, Netlify cloud hosting</li>
                    <li>UI/UX: Bootstrap, Fontawesome</li>
                  </ul>
                 The site utilizes a service worker to cache important files for fastest performance and a webmanifest to carry important metadata that allows it to
                work on a variety of browsers other than just Chrome.
                </p>
                <div className="portfBtnDiv">
                  <a
                    href="https://github.com/coryjquirk/portfolio"
                    target="_blank"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      GitHub repo <i className="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="ghostDiv"></div>
    </div>
  );
}

export default Portfolio;
