import React, { useState, useEffect } from "react";
import { Container } from "../Grid";
import "./style.css";
import READMEgen from "./Images/readme-generator.gif";
import weatherdashboard from "./Images/weatherdashboard.gif";
import creditcroc from "./Images/creditcroc.gif";
import cartcroc from "./Images/cartcroc.gif";
import whatscooking from "./Images/whatscooking.gif";
//
import dnd from "./Images/art/dnd.gif";
import eug from "./Images/art/eug.gif";
import fab from "./Images/art/fab.png";
import ham from "./Images/art/ham.png";
import kL from "./Images/art/kl.png";
import lfskp from "./Images/art/lfskp.png";
import lint from "./Images/art/lint.png";
import mac from "./Images/art/mac.png";
import siem from "./Images/art/siem.jpg";
import tape from "./Images/art/tape.jpeg";
//this component is getting huge and I'd like to break it up
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
        <li className="t0c">
          <a href="#appsList" onClick={revealApps}>
            #site projects
          </a>
        </li>
        <li className="t0c">
          <a href="#portfolioSite">#more about this site</a>
        </li>
        <li className="t0c" onClick={revealArt}>
          <a href="#artList">#visual design</a>
        </li>
        <div id="connectLink">
          <button className="standardButton">
            <a href="/contact">
              connect <i className="fa fa-arrow-right"></i>
            </a>
          </button>
        </div>
        <div id="toolkitList">
          <div id="codeBtn">
            <i className="fa fa-code"></i>
          </div>{" "}
          <h2>developer toolkit</h2>
          <p id="toolkit" className="fa-ul">
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
              <i className="fa fa-cog"></i> <strong>Front end:</strong>{" "}
              <li>
                <span id="desktopToolbox">
                  {" "}
                  Design - HTML, CSS, Bootstrap, Fontawesome
                </span>
              </li>
              <li id="mobileToolbox">
                Design - HTML, CSS, Bootstrap, Fontawesome
              </li>
              <li id="desktopToolbox">
                <span>Function - vanilla JavaScript, jQuery</span>
              </li>
              <li id="mobileToolbox">Function - vanilla JavaScript, jQuery</li>
            </li>
            <li>
              <i className="fa fa-cog"></i> <strong>Back end:</strong>{" "}
              <span id="desktopToolbox"> MySQL and no-SQL</span>
              <li id="mobileToolbox">MySQL and no-SQL</li>
            </li>

            <li>
              <i className="fa fa-cog"></i> <strong>Git BASH</strong> command
              line tools for collaboration and version control
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
              <li>
                <span id="desktopToolbox">Agile</span>
              </li>
              <li id="mobileToolbox">Agile</li>
              <li>
                <span id="desktopToolbox">daily scrum ceremonies</span>
              </li>
              <li id="mobileToolbox">daily scrum ceremonies</li>
              <li>
                <span id="desktopToolbox">
                  MVP (minimum viable product) production for CI/CD
                </span>
              </li>
              <li id="mobileToolbox">
                MVP (minimum viable product) production for CI/CD
              </li>
              <li>
                <span id="desktopToolbox">
                  kanban project management boards
                </span>
              </li>
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
              <i className="fa fa-cog"></i> <strong>Visual tools:</strong>
              <span id="desktopToolbox"> Mobile-first</span>
              <li id="mobileToolbox">Mobile-first</li>
              <span id="desktopToolbox">
                {" "}
                Progressive web applications (PWAs)
              </span>
              <li id="mobileToolbox">Progressive web applications (PWAs</li>
            </li>

            <li>
              <i className="fa fa-cog"></i> <strong>Currently learning</strong>:{" "}
              <span id="desktopToolbox">Angular.js, Vue.js, Django.py</span>
              <li id="mobileToolbox">Angular.js, Vue.js, Django.py</li>
            </li>
            <li>
              <i className="fa fa-cog"></i> <strong>Hardware experience</strong>
              :{" "}
              <li>
                <span id="desktopToolbox">Assembled gaming PC with motherboard, CPU, GPU, heatsink, case, fans, and peripherals</span>
              </li>
              <li id="mobileToolbox">Assembled gaming PC with motherboard, CPU, GPU, heatsink, case, fans, and peripherals</li>
              <li>
                <span id="desktopToolbox">Raspberry Pi 4, RP2040 (Pico) microcontroller</span>
              </li>
              <li id="mobileToolbox">Raspberry Pi 4, RP2040 (Pico) microcontroller</li>
              <li>
                <span id="desktopToolbox">Arduino (Bluetooth, GPS)</span>
              </li>
              <li id="mobileToolbox">Arduino (Bluetooth, GPS)</li>
            </li>
            <li>
              <i className="fa fa-cog"></i> <strong>Python, Java, C++</strong>
              <li>
                <span id="desktopToolbox">beginner exposure</span>
              </li>
              <li id="mobileToolbox">beginner exposure</li>
            </li>
            <p>
              <a href="contact">I'm looking for work!</a> (May 2021)
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
          <h2>portfolio</h2>
          <p>A few completed projects so far.</p>
            <p>Click right to expand or collapse.</p>
          {appsOpened === true && (
            <div>
              <p class="subText">
                Deployed applications are
                hosted on free servers so they may need a minute to start up.
              </p>
              <p class="subText">
                Please visit me on{" "}
                <a href="https://github.com/coryjquirk" target="_blank">
                  GitHub
                </a>{" "}
                to view code repositories.
              </p>
              <div id="portfolioItem">
                <h2>Weather Dashboard</h2>
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
                <h2>What's Cooking?</h2>
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
                <h2>Password Generator</h2>
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
                <h2>bud GEt</h2>
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
                <h2>Credit Croc</h2>
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
                <h2>Daily Planner</h2>
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

              <div id="portfolioItem">
                <h2>Ice Cold README Generator</h2>
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
                <h2>Cart Croc</h2>
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
            </div>
          )}
        </div>
        <div id="portfolioSite">
          <h2>personal website</h2>
          <p>
            I built this site with the idea that such a site could be adapted to
            a client's portfolio.
          </p>
          <p>
            I'm actively imporoving this site in spring 2021 and if something
            isn't working right, please <a href="/contact">email me</a> with any
            revelant screenshots or error messages.
          </p>

          <hr></hr>
          <h3>technical details</h3>
          <p>
            I enjoy coding custom <strong>CSS</strong> features supplemented
            with tools like Bootstrap and Fontawesome that provide great
            features ready to use right away. <strong>React.js</strong> allows
            me to create custom UI/UX components like the portfolio's 'drawer'
            button above. You can also easily bring code for third party React
            components, such as the scroll-up arrow on the bottom right.
          </p>
          <p>
            My process with this site is to host my code in a{" "}
            <a
              href="https://github.com/coryjquirk/portfolio"
              target="_blank"
            ></a>
            GitHub repository, pull down the main branch to my secondary branch
            with the <strong>command line</strong> to code new features. Then I
            commit meaningful changes early and often but only upon completion
            of features, never adding 'half-working' code (if there were such a
            thing), since repositories of broken code only confuse other
            developers. Hosting my code there also allows me to pull it down and
            make changes anywhere from my laptop or another machine that I set
            up my SSH keys on.
          </p>
          <p>
            {" "}
            I have a simple CI/CD pipeline setup with a secondary server from a
            different <strong>Git</strong> branch{" "}
            <a href="https://portfolio-tester.herokuapp.com/" target="_blank">
              here
            </a>{" "}
            with Heroku so I can make sure my site won't break upon deployment.
            My apps on <strong>Heroku</strong> are linked directly to the main
            and secondary branches so the site is re-deployed each time new code
            is pushed up to the repository.
          </p>
          <p>
            I follow appropriate naming conventions like{" "}
            <code className="pCode">#camelCase</code> for CSS in my code. I use
            short and neat file names and I often spend time refactoring my code
            to eliminate redundancies. In comments, I like to add links to
            documentation and sources for open-source code that I'm utilizing if
            it's not already immediately apparent in the code.
          </p>
          <p>
            I run an <code className="pCode">npm start</code> localhost:3000
            server for a JavaScript runtime environment that will compile
            React.js code on my local machine. Developing for the front-end, I
            can't imagine not have a browser window open alongside{" "}
            <strong>Visual Studio Code</strong>. Additionally, it's much easier
            to design sites first for mobile and then expand the CSS media
            queries to adapt to larger screen sizes. To test screen width
            responsiveness at every stage of designing an app, I utilize{" "}
            <strong>Google Chrome developer tools</strong>. It's that side bar
            that pops up when you hit F12, 'Inspect', or ctrl-shift-I on desktop
            (if you've never tried it but you've read this far, I encourage you
            to use it to see the code for this page!).
          </p>
          <p>
            This site meets accessibility standards for screen readers, and is a{" "}
            <strong>PWA</strong> (Progressive Web Application) that you can
            install on your phone's home screen. It utilizes a service worker to
            cache important files for fastest performance, and it uses a
            webmanifest to carry important metadata that allows it to work on a
            variety of browsers other than just Chrome.
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
        <div id="artList">
          {artOpened === false && (
            <button className="appsListCtrl standardButton" onClick={revealArt}>
              <i className="fa fa-plus"></i>
            </button>
          )}
          {artOpened === true && (
            <button className="appsListCtrl standardButton" onClick={hideArt}>
              <i className="fa fa-minus"></i>
            </button>
          )}
          <h2>assorted visuals</h2>
          <p>Click right to expand or collapse</p>
          {artOpened === true && (
            <div>
              <div id="artTools">
                <p id="artP">
                <strong>software: </strong> Adobe Photoshop, GIMP, and VSDC video editor.
                  <p id="artSub" className="subText">
                  descriptors: collage art, sample culture, glitch art
                </p>
                <p id="artSub" className="subText">
                  big fan of gradients, negative space, iridescence
                </p>
                </p>

                <p id="artP">
                  <strong>35mm cameras</strong>: Olympus OM-10 SLR, Kodak S500AF point and shoot
                </p>
                <p id="artP">
                  <strong>film</strong>: Kodak Portra 400, Fujifilm Superia Xtra 400, Kodak Gold
                  200
                </p>
               
                <p id="artP">
                  In sound design, I use Audacity, Reaper, and analog equipment.
                  <p id="artSub" className="subText">
                    Roland SP-404SX, Elektron Oktratrack MKI. microphones: Zoom
                    H4N field recorder, Shure SM57 cardioid
                  </p>
                </p>
              </div>
              <img
                className="portfolioArt"
                src={eug}
                alt="speaker grill hue shift"
              ></img>
              <img
                className="portfolioArt"
                src={fab}
                alt="phone wallpaper gradient from Cambodian tablecloth photo"
              ></img>
              <img
                className="portfolioArt"
                src={ham}
                alt="hamm's brewery"
              ></img>
              <img
                className="portfolioArt"
                src={lfskp}
                alt="leaf under a microscope"
              ></img>
              <img
                className="portfolioArt"
                src={lint}
                alt="35mm film plus eslint collage"
              ></img>
              <img
                className="portfolioArt"
                src={mac}
                alt="macbook pro glitch"
              ></img>
              <img className="portfolioArt" src={kL} alt="glitch art"></img>
              <img
                className="portfolioArt"
                src={siem}
                alt="temple, Siem Reap Cambodia"
              ></img>
              <img
                className="portfolioArt"
                src={tape}
                alt="cassette artwork"
              ></img>
              <img
                className="portfolioArt"
                src={dnd}
                alt="drone not drones 2020"
              ></img>
              <hr></hr>
              <h3 id="videoWork">video work</h3>
              <iframe
                className="pfVideo"
                src="https://www.youtube.com/embed/3BEVQ1qXPD4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                className="pfVideo"
                src="https://www.youtube.com/embed/1SjmHeI0hM0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <div className="ghostDiv"></div>
    </Container>
  );
}

export default Portfolio;
