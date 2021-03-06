import React, { useState, useEffect } from "react";
import "./style.css";
import READMEgen from "./Images/readme-generator.gif";
import weatherdashboard from "./Images/weatherdashboard.gif";
import creditcroc from "./Images/creditcroc.gif";
import cartcroc from "./Images/cartcroc.gif";
import whatscooking from "./Images/whatscooking.gif";

function Portfolio() {
  const [opened, openApps] = React.useState(false);
  function revealApps() {
    openApps(true);
  }
  function hideApps() {
    openApps(false);
  }
  // /* This CSS style is applied when the drawer is opened */
  // const openedStyle = {
  //   height: "0%",
  //   transition: "height 0.5s",
  // };

  // /* This CSS style is applied when the drawer is closed */
  // const closedStyle = {
  //   transition: "height 0.5s",
  // };

  return (
    <div>
      <button
        class="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>web dev portfolio</h1>
      </button>
      <h1 class="desktopHeader">web dev portfolio</h1>
      <hr class="headHr" />
      <p>
        Visit me on{" "}
        <a href="https://github.com/coryjquirk" target="_blank">
          GitHub
        </a>{" "}
        to see sites I'm coding, both solo and collaboratively.
      </p>
      <p>
        I'm a full-stack web developer looking for full time remote work and
        freelance work. I aim to make elegant sites with JavaScript, CSS, and React.js.
      </p>
      <p>
        <a href="/contact">Contact</a>
      </p>
      <div>
        <div id="devToolkit">
          <h3>my developer toolkit &#128736;</h3>
          <p id="toolkit" class="fa-ul">
            <li>
              <i class="fa fa-cog"></i> Front end:{" "}
              <li><span id="desktopToolbox">
                <strong>Design</strong> - HTML, CSS, Bootstrap
              </span></li>
              <li id="mobileToolbox">
                <strong>Design</strong> - HTML, CSS, Bootstrap
              </li>
              <li><span id="desktopToolbox">
                <strong>Function</strong> - vanilla JavaScript, jQuery
              </span></li>
              <li id="mobileToolbox">
                <strong>Function</strong> - vanilla JavaScript, jQuery
              </li>
            </li>
            <li>
              <i class="fa fa-cog"></i> Back end:{" "}
              <span id="desktopToolbox"> MySQL and no-SQL</span>
              <li id="mobileToolbox">MySQL and no-SQL</li>
            </li>
            <li>
              <i class="fa fa-cog"></i> Full stack development:
              <span id="desktopToolbox">
                {" "}
                <strong>MERN stack</strong>{" "}
              </span>
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
              <i class="fa fa-cog"></i> Git collaboration, version control
            </li>
            <li>
              <i class="fa fa-cog"></i> Heroku deployment
            </li>
            <li>
              <i class="fa fa-cog"></i> Dev methodologies:
              <span id="desktopToolbox"> Mobile-first and Agile</span>
              <li id="mobileToolbox">Mobile-first and Agile</li>
            </li>
            <li>
              <i class="fa fa-cog"></i> Frameworks on my horizon:
              <span id="desktopToolbox">Angular.js, Vue.js, Django.py</span>
              <li id="mobileToolbox">Angular.js, Vue.js, Django.py</li>
            </li>
            <p>
              <a href="contact">I'm looking for work!</a> (March 2021)
            </p>
          </p>
        </div>
        <div id="appsList">
          {opened === false && (
            <button class="appsListCtrl standardButton" onClick={revealApps}>
              <i class="fa fa-plus"></i>
            </button>
          )}
          {opened === true && (
            <button class="appsListCtrl standardButton" onClick={hideApps}>
              <i class="fa fa-minus"></i>
            </button>
          )}
          <h3 id="appsHeader">apps</h3>
          {opened === true && (
            <div>
              <p>A few of my website projects so far.</p>
              <div id="portfolioItem">
                <h3>Cart Croc</h3>
                <p>
                  Straightforward storefront app designed with independent
                  businesses in mind. Shop inventory data is handled with
                  MongoDB (a NoSQL back-end solution), and user authentication
                  is provided with Passport.</p>
                <p>Custom React.js components for
                  UI/UX features with the support of-party React.js open-source
                  components.
                </p>
                <p>
                  Developed on a four person team with an Agile methodology and daily scrum ceremonies to produce a minimum-viable-product (MVP) for a deadline.
                </p>
                <p>
                  <strong>MERN stack</strong> (MongoDB, Express, React.js,
                  Node.js)
                </p>
                <a href="https://cart-croc.herokuapp.com/" target="_blank">
                  <img class="scrnsht" src={cartcroc} alt="cart croc" />
                </a>
                <div class="portfBtnDiv">
                  <a
                    href="https://github.com/coryjquirk/cart-croc"
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
              <div id="portfolioItem">
                <h3>Password Generator</h3>
                <p>
                  Generates a secure/unique password consisting of symbols,
                  numbers, and letters, offering the user an option of length and character types.
                </p>
                <a
                  href="https://coryjquirk.github.io/password-generator/"
                  target="_blank"
                >
                  <img
                    class="scrnsht"
                    src="https://coryjquirk.github.io/password-generator/images/demo.gif"
                    alt="password generator"
                  />
                </a>
                <div class="portfBtnDiv">
                  <a
                    href="https://coryjquirk.github.io/password-generator/"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button class="standardButton">
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/password-generator"
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
                    class="scrnsht"
                    src="https://raw.githubusercontent.com/coryjquirk/bud-get/main/bud-get.gif"
                    alt="budget tracker"
                  />
                </a>
                <div class="portfBtnDiv">
                  <a
                    href="https://calm-anchorage-17785.herokuapp.com/"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button class="standardButton">
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/bud-get"
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
                <h3>Credit Croc</h3>
                <p>
                  Create a visual overview of your credit cards, loans, bills, or
                  repayments. Data dynamically visiualized with Highcharts interactive JavaScript charts.
                </p>
                <a
                  href="https://hungry-croconaw.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    class="scrnsht"
                    src={creditcroc}
                    alt="credit croc demo"
                  />
                </a>
                <div class="portfBtnDiv">
                  <a
                    href="https://hungry-croconaw.herokuapp.com/"
                    class="portfBtn"
                  >
                    <button class="standardButton">
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/credit-croc"
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
                    class="scrnsht"
                    src={READMEgen}
                    alt="ice-cold-readme-generator"
                  />
                </a>

                <div class="portfBtnDiv">
                  <a
                    href="https://github.com/coryjquirk/ice-cold-readme-generator"
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
                    class="scrnsht"
                    src="https://coryjquirk.github.io/daily-planner/images/screenshot.PNG"
                    alt="daily planner"
                  />
                </a>
                <div class="portfBtnDiv">
                  <a
                    href="https://coryjquirk.github.io/daily-planner/"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button class="standardButton">
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/daily-planner"
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
          )}
        </div>
        <div id="devToolkit">
          <h3>Personal website</h3>
          <p>
            I built this site with React.js with the idea that such a site could be adapted to a client to show off any sort of
            professional portfolio.
          </p>
          <p>
            I continue to improve my site as my skillset widens, and I
            particularily enjoy experimenting with CSS designs in my code.
          </p>
          <div class="portfBtnDiv">
            <a
              href="https://github.com/coryjquirk/portfolio"
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
      <div class="ghostDiv"></div>
    </div>
  );
}

export default Portfolio;
