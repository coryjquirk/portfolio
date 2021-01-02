import React, { useState, useEffect } from "react";
import "./style.css";
import READMEgen from "./Images/readme-generator.gif";
import weatherdashboard from "./Images/weatherdashboard.gif";
import creditcroc from "./Images/creditcroc.gif";
import cartcroc from "./Images/cartcroc.gif";
import whatscooking from "./Images/whatscooking.gif";

function Portfolio() {
  const [opened, openApps] = React.useState(true);
  function revealApps() {
    openApps(true);
  }
  function hideApps() {
    openApps(false);
  }
  /* This CSS style is applied when the drawer is opened */
  const openedStyle = {
    height: "100%",
    transition: "height 0.5s",
  };

  /* This CSS style is applied when the drawer is closed */
  const closedStyle = {
    transition: "height 0.5s",
  };

  return (
    <div>
      <h1>web dev portfolio</h1>
      <hr />
      <p id="pf">
        Visit me on{" "}
        <a href="https://github.com/coryjquirk" target="_blank">
          GitHub
        </a>{" "}
        to see projects I'm coding, both solo and collaboratively.
      </p>
      <div>
        <div id="devToolkit">
          <h3>my developer toolkit &#128736;</h3>
          <p id="toolkit" class="fa-ul">
            <li>
              <i class="fa fa-cog"></i> MERN stack:
              <li>MongoDB, Express.js, React.js, Node.js</li>
            </li>
            <li>
              <i class="fa fa-cog"></i> Front end: <li>JavaScript, HTML, CSS</li>
            </li>
            <li>
              <i class="fa fa-cog"></i> Back end: <li>MySQL and no-SQL</li>
            </li>
            <li>
              <i class="fa fa-cog"></i> Collaboration, version
              control:
              <li>GitHub and GitLab</li>
            </li>
            <li>
              <i class="fa fa-cog"></i> Heroku deployment
            </li>
            <li>
              <i class="fa fa-cog"></i> Dev methodologies:
              <li>Mobile-first and Agile
              </li>
            </li>
            <p>
              <a href="contact">I'm looking for work!</a>
            </p>
          </p>
        </div>
        <div id="appsList" style={opened ? openedStyle : closedStyle}>
          {opened === false && (
            <button class="appsListCtrl" onClick={revealApps}>
              <i class="fa fa-plus"></i>
            </button>
          )}
          {opened === true && (
            <button class="appsListCtrl" onClick={hideApps}>
              <i class="fa fa-minus"></i>
            </button>
          )}
          <h3 id="appsHeader">apps</h3>
          {opened === true && (
            <div>
              <div id="portfolioItem">
                <h3>Cart Croc</h3>
                <p>
                  Straightforward storefront app designed with independent
                  businesses in mind. Inventory data handled with MongoDB, and
                  user authentication provided with Passport.
                </p>
                <a href="https://cart-croc.herokuapp.com/" target="_blank">
                  <img class="scrnsht" src={cartcroc} alt="cart croc" />
                </a>
                <div class="portfBtnDiv">
                  <a
                    href="https://cart-croc.herokuapp.com/"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button>
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/cart-croc"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button>
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h3>What's Cooking?</h3>
                <p>
                  Helps you find recipes based on the ingredients you have at
                  home. Searches with a recipe finder API, and shows nearby
                  grocery stores with Google Maps.
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
                    <button>
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/whats-cookin"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button>
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h3>Weather Dashboard</h3>
                <p>
                  Uses the OpenWeatherMap API to display current weather
                  conditions and a 5-day forecast.
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
                    <button>
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/weather-dashboard"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button>
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h3>Password Generator</h3>
                <p>
                  Generates a random and secure password consisting of symbols,
                  numbers, and letters.
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
                    <button>
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/password-generator"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button>
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h3>bud GEt</h3>
                <p>
                  Budget tracker that uses a remotely hosted database (MongoDB
                  Atlas) and cache storage (IndexedDB).
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
                    <button>
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/bud-get"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button>
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h3>Credit Croc</h3>
                <p>
                  Gives a visual overview of your credit cards, loans, bills, or
                  repayments. From the team that brought you Cart Croc.
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
                    <button>
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/credit-croc"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button>
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h3>Ice Cold README Generator</h3>
                <p>
                  Generates a custom README from the command line by asking
                  about yourself and your coding project.
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
                    <button>
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div id="portfolioItem">
                <h3>Daily Planner</h3>
                <p>
                  Calendar app for scheduling your work day. Utilizes local
                  storage.
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
                    <button>
                      Deployed app <i class="fa fa-link"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/coryjquirk/daily-planner"
                    target="_blank"
                    class="portfBtn"
                  >
                    <button>
                      GitHub repo <i class="fa fa-link"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div id="portfolioItem">
          <h3>Personal website</h3>
          <p>
            I built this site with React.js and I'm always improving it. If you
            notice any hilarious typos or broken links before I do,{" "}
            <a href="contact">send me an email</a>.
          </p>
          <div class="portfBtnDiv">
            <a
              href="https://github.com/coryjquirk/portfolio"
              target="_blank"
              class="portfBtn"
            >
              <button>
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
