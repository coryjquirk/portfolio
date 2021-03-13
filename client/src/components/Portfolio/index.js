import React, { useState, useEffect } from "react";
import { Container } from "../Grid";
import "./style.css";
import READMEgen from "./Images/readme-generator.gif";
import weatherdashboard from "./Images/weatherdashboard.gif";
import creditcroc from "./Images/creditcroc.gif";
import cartcroc from "./Images/cartcroc.gif";
import whatscooking from "./Images/whatscooking.gif";
import ArtGallery from "./ArtGallery";
import CodeSymbol from "./code.png";

function Portfolio() {
  const [appsOpened, openApps] = React.useState(false);
  const [artOpened, openArt] = React.useState(false);
  function revealApps() {
    openApps(true);
  }
  function hideApps() {
    openApps(false);
  }
  function revealArt() {
    openArt(true);
  }
  function hideArt() {
    openArt(false);
  }

  return (
    <Container fluid>
      <button
        className="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>web development</h1>
      </button>
      <h1 className="desktopHeader">web development</h1>
      <hr className="headHr" />
      <div className="meat">
        <p id="pf">
          Visit me on{" "}
          <a href="https://github.com/coryjquirk" target="_blank">
            GitHub
          </a>{" "}
          to see sites I'm coding, both solo and collaboratively.
        </p>
        <p id="pf">
          I'm a full-stack web developer looking for full time remote work and
          freelance work. I aim to make elegant and intuitive sites with
          JavaScript, CSS, and React.js, taking a user perspective in designing
          UI/UX.
        </p>
        <div id="connectLink">
          <button className="standardButton">
            <a href="/contact">
              connect <i className="fa fa-arrow-right"></i>
            </a>
          </button>
        </div>
        <div id="appsList">
          <img id="codeSymbol" src={CodeSymbol} alt="code symbol </>"></img>
          <h3>developer toolkit</h3>
          <p id="toolkit" className="fa-ul">
            <li>
              <i className="fa fa-cog"></i> <strong>Front end:</strong>{" "}
              <li>
                <span id="desktopToolbox">
                  Design - HTML, CSS, Bootstrap, Fontawesome
                </span>
              </li>
              <li id="mobileToolbox">
                Design - HTML, CSS, Bootstrap, Fontawesome
              </li>
              <li>
                <span id="desktopToolbox">
                  Function - vanilla JavaScript, jQuery
                </span>
              </li>
              <li id="mobileToolbox">Function - vanilla JavaScript, jQuery</li>
            </li>
            <li>
              <i className="fa fa-cog"></i> <strong>Back end:</strong>{" "}
              <span id="desktopToolbox"> MySQL and no-SQL</span>
              <li id="mobileToolbox">MySQL and no-SQL</li>
            </li>
            <li>
              <i className="fa fa-cog"></i>{" "}
              <strong>Full stack engineering:</strong>
              <span id="desktopToolbox"> MERN stack </span>
              <li id="mobileToolbox">
                <strong>MERN stack</strong>
              </li>
              <span id="desktopToolbox">
                {" "}
                (MongoDB, Express.js, React.js, Node.js)
              </span>
              <li id="mobileToolbox">
                (MongoDB, Express.js, React.js, Node.js)
              </li>
            </li>
            <li>
              <i className="fa fa-cog"></i> <strong>Git BASH</strong> for
              collaboration and version control
            </li>
            <li>
              <i className="fa fa-cog"></i> <strong>Deployment:</strong> Heroku
              cloud application platform
            </li>
            <li>
              <i className="fa fa-cog"></i> <strong>npm</strong> (Node Package
              Manager) to import JavaScript features
            </li>
            <li>
            <i className="fa fa-cog"></i> <strong>Methodologies: </strong>
              <li><span id="desktopToolbox">Agile</span></li>
              <li id="mobileToolbox">Agile</li>
              <li><span id="desktopToolbox">daily scrum</span></li>
              <li id="mobileToolbox">daily scrum</li>
              <li><span id="desktopToolbox">kanban project management boards</span></li>
              <li id="mobileToolbox">kanban project management boards</li>
            </li>
            <li>
              <i className="fa fa-cog"></i> <strong>Sites:</strong>
              <span id="desktopToolbox"> Mobile-first</span>
              <li id="mobileToolbox">Mobile-first</li>
              <span id="desktopToolbox">
                {" "}
                Progressive web applications (PWAs)
              </span>
              <li id="mobileToolbox">Progressive web applications (PWAs</li>
            </li>

            <li>
              <i className="fa fa-cog"></i> Frameworks on my horizon:{" "}
              <span id="desktopToolbox">Angular.js, Vue.js, Django.py</span>
              <li id="mobileToolbox">Angular.js, Vue.js, Django.py</li>
            </li>
            <li>
              <i className="fa fa-cog"></i> Hardware experience:{" "}
              <li><span id="desktopToolbox">Built my PC</span></li>
              <li id="mobileToolbox">Built my PC</li>
              <li><span id="desktopToolbox">Raspberry Pi 4</span></li>
              <li id="mobileToolbox">Raspberry Pi 4</li>
            </li>
            <li>
              <i className="fa fa-cog"></i> <strong>Python</strong>
              <li><span id="desktopToolbox">beginner exposure</span></li>
              <li id="mobileToolbox">beginner exposure</li>
            </li>
            <p>
              <a href="contact">I'm looking for work!</a> (March 2021)
            </p>
          </p>
        </div>
        <div id="appsList">
          {appsOpened === false && (
            <button
              className="appsListCtrl standardButton"
              onClick={revealApps}
            >
              <i className="fa fa-plus"></i>
            </button>
          )}
          {appsOpened === true && (
            <button className="appsListCtrl standardButton" onClick={hideApps}>
              <i className="fa fa-minus"></i>
            </button>
          )}
          <h3 id="appsHeader">portfolio</h3>
          {appsOpened === true && (
            <div>
              <p>
                A few completed projects so far. Deployed applications are
                hosted on free servers so they may need a minute to start up.
              </p>
              <p>
                Please visit me on{" "}
                <a href="https://github.com/coryjquirk" target="_blank">
                  GitHub
                </a>{" "}
                to view code repositories.
              </p>
              <div id="portfolioItem">
                <h3>Weather Dashboard</h3>
                <p>
                  Displays current weather conditions and a 5-day forecast with
                  the OpenWeatherMap API. Users' recent cities are saved with
                  client-side local storage.
                </p>
                <a
                  href="https://coryjquirk.github.io/weather-dashboard/"
                  target="_blank"
                >
                  <img
                    className="scrnsht"
                    src={weatherdashboard}
                    alt="cart croc"
                  />
                </a>
                <div className="portfBtnDiv">
                  <a
                    href="https://coryjquirk.github.io/weather-dashboard/"
                    target="_blank"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      Deployed app <i className="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/weather-dashboard"
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
                <h3>What's Cooking?</h3>
                <p>
                  Helps you find recipes based on the ingredients you have at
                  home. Searches a recipe database with a third-party API, and
                  shows nearby grocery stores with Google Maps.
                </p>
                <a
                  href="https://coryjquirk.github.io/whats-cookin/"
                  target="_blank"
                >
                  <img
                    className="scrnsht"
                    src={whatscooking}
                    alt="whats cookin"
                  />
                </a>

                <div className="portfBtnDiv">
                  <a
                    href="https://coryjquirk.github.io/whats-cookin/"
                    target="_blank"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      Deployed app <i className="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/whats-cookin"
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
                <h3>Password Generator</h3>
                <p>
                  Generates a secure/unique password consisting of symbols,
                  numbers, and letters, offering the user an option of length
                  and character types.
                </p>
                <a
                  href="https://coryjquirk.github.io/password-generator/"
                  target="_blank"
                >
                  <img
                    className="scrnsht"
                    src="https://coryjquirk.github.io/password-generator/images/demo.gif"
                    alt="password generator"
                  />
                </a>
                <div className="portfBtnDiv">
                  <a
                    href="https://coryjquirk.github.io/password-generator/"
                    target="_blank"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      Deployed app <i className="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/password-generator"
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
                <h3>bud GEt</h3>
                <p>
                  Budget tracker that CRUDs data with a remotely hosted database
                  (MongoDB Atlas) and the support of cache storage (IndexedDB).
                </p>
                <a
                  href="https://calm-anchorage-17785.herokuapp.com/"
                  target="_blank"
                  target="_blank"
                >
                  <img
                    className="scrnsht"
                    src="https://raw.githubusercontent.com/coryjquirk/bud-get/main/bud-get.gif"
                    alt="budget tracker"
                  />
                </a>
                <div className="portfBtnDiv">
                  <a
                    href="https://calm-anchorage-17785.herokuapp.com/"
                    target="_blank"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      Deployed app <i className="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/bud-get"
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
                <h3>Credit Croc</h3>
                <p>
                  Create a visual overview of your credit cards, loans, bills,
                  or repayments. Data dynamically visiualized with Highcharts
                  interactive JavaScript charts.
                </p>
                <a
                  href="https://hungry-croconaw.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    className="scrnsht"
                    src={creditcroc}
                    alt="credit croc demo"
                  />
                </a>
                <div className="portfBtnDiv">
                  <a
                    href="https://hungry-croconaw.herokuapp.com/"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      Deployed app <i className="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/credit-croc"
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
                <h3>Ice Cold README Generator</h3>
                <p>
                  Command line application which asks you about your coding
                  project to generate a formatted README.md file
                </p>
                <a
                  href="https://github.com/coryjquirk/ice-cold-readme-generator"
                  target="_blank"
                >
                  <img
                    className="scrnsht"
                    src={READMEgen}
                    alt="ice-cold-readme-generator"
                  />
                </a>

                <div className="portfBtnDiv">
                  <a
                    href="https://github.com/coryjquirk/ice-cold-readme-generator"
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
                <h3>Cart Croc</h3>
                <p>
                  Straightforward storefront app designed with independent
                  businesses in mind. Shop inventory data is handled with
                  MongoDB (a NoSQL back-end solution), and user authentication
                  is provided with Passport.
                </p>
                <p>
                  Custom React.js components for UI/UX features with the support
                  of-party React.js open-source components.
                </p>
                <p>
                  Developed on a four person team with an Agile methodology and
                  daily scrum ceremonies to produce a minimum-viable-product
                  (MVP) for a deadline.
                </p>
                <p>
                  <strong>MERN stack</strong> (MongoDB, Express, React.js,
                  Node.js)
                </p>
                <a href="https://cart-croc.herokuapp.com/" target="_blank">
                  <img className="scrnsht" src={cartcroc} alt="cart croc" />
                </a>
                <div className="portfBtnDiv">
                  <a
                    href="https://github.com/coryjquirk/cart-croc"
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
                <h3>Daily Planner</h3>
                <p>
                  Lightweight daily scheduler that stores user data in
                  client-side local storage.
                </p>
                <a
                  href="https://coryjquirk.github.io/daily-planner/"
                  target="_blank"
                >
                  <img
                    className="scrnsht"
                    src="https://coryjquirk.github.io/daily-planner/images/screenshot.PNG"
                    alt="daily planner"
                  />
                </a>
                <div className="portfBtnDiv">
                  <a
                    href="https://coryjquirk.github.io/daily-planner/"
                    target="_blank"
                    className="portfBtn"
                  >
                    <button className="standardButton">
                      Deployed app <i className="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/daily-planner"
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
          )}
        </div>
        <div id="portfolioSiteDiv">
            <h3>Personal website</h3>
            <p>
              I built this site with the idea that such a site could be adapted
              to a client's portfolio.
            </p>
            <p>
              I'm actively imporoving this site in spring 2021 and if something
              isn't working right, please <a href="/contact">email me</a>.
            </p>
            <hr></hr>
            <p>
              I enjoy coding custom <strong>CSS</strong> features supplemented
              with tools like Bootstrap and Fontawesome that provide great
              features ready to use right away. <strong>React.js</strong> allows
              me to create custom UI/UX components like the portfolio's "drawer"
              button above. You can also easily bring code for third party React
              components, such as the scroll-up arrow on the bottom right.
            </p>
            <p>
              This site meets accessibility standards for screen readers, and is
              a PWA (Progressive Web Application) that you can install on your
              phone's home screen. It utilizes a service worker to cache
              important files and uses a webmanifest to carry important metadata
              for the site to work best on a variety of browsers.
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
        {/*
        <div id="appsList">
          {artOpened === false && (
            <button class="appsListCtrl standardButton" onClick={revealArt}>
              <i class="fa fa-plus"></i>
            </button>
          )}
          {artOpened === true && (
            <button class="appsListCtrl standardButton" onClick={hideArt}>
              <i class="fa fa-minus"></i>
            </button>
          )}
          <h3 id="appsHeader">assorted visuals</h3>
          {artOpened === true && (
            <div>
              <p>
                Made in Adobe Photoshop, GIMP graphics software, or VSDC video
                editor.
              </p>

              <div id="portfolioItem">
                <h3>Weather Dashboard</h3>
                <p>
                  Displays current weather conditions and a 5-day forecast with
                  the OpenWeatherMap API. Users' recent cities are saved with
                  client-side local storage.
                </p>
                <a
                  href="https://coryjquirk.github.io/weather-dashboard/"
                  target="_blank"
                >
                  <img class="scrnsht" src={weatherdashboard} alt="cart croc" />
                </a>
                <div class="portfBtnDiv">
                  <a
                    href="https://coryjquirk.github.io/weather-dashboard/"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button class="standardButton">
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/weather-dashboard"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button class="standardButton">
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h3>What's Cooking?</h3>
                <p>
                  Helps you find recipes based on the ingredients you have at
                  home. Searches a recipe database with a third-party API, and
                  shows nearby grocery stores with Google Maps.
                </p>
                <a
                  href="https://coryjquirk.github.io/whats-cookin/"
                  target="_blank"
                >
                  <img class="scrnsht" src={whatscooking} alt="whats cookin" />
                </a>

                <div class="portfBtnDiv">
                  <a
                    href="https://coryjquirk.github.io/whats-cookin/"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button class="standardButton">
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/whats-cookin"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button class="standardButton">
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
             </div>          )}   */}
      </div>
      <div className="ghostDiv"></div>
    </Container>
  );
}

export default Portfolio;
