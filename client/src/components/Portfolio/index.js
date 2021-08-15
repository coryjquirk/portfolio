import React, { useState } from "react";
import "./style.css";
import farm from "../Blog/Posts/Post7/farm.gif";
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
  const [appsOpened, openApps] = useState(false);
  const [pfOpened, openPf] = useState(false);
  const [artOpened, openArt] = useState(false);
  function revealApps() {
    openApps(true);
  }
  function hideApps() {
    openApps(false);
  }
  function revealPf() {
    openPf(true);
  }
  function hidePf() {
    openPf(false);
  }
  function revealArt() {
    openArt(true);
  }
  function hideArt() {
    openArt(false);
  }

  return (
<div>      <button
        className="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>developer portfolio</h1>
      </button>
      <h1 className="desktopHeader">developer portfolio</h1>
      <hr className="headHr" />
      <div className="meat">
        <div id="toolKit">
          <h2>skills toolkit</h2>
          <p>
            <i className="fa fa-asterisk"></i> Sorted by{" "}
            <strong>familiar</strong> <i className="fa fa-arrow-right"></i>{" "}
            <strong>learning</strong>
          </p>
          <h3>Languages:</h3>
          <button className="toolkitBtn">HTML</button>
          <button className="toolkitBtn">JavaScript</button>
          <button className="toolkitBtn">CSS</button>
          <button className="toolkitBtn">Python</button>
          <button className="toolkitBtn">Ruby</button>
          <button className="toolkitBtn">Java</button>
          <button className="toolkitBtn">C#/.NET</button>
          <h3>Back end:</h3>
          <button className="toolkitBtn">Node.js</button>
          <button className="toolkitBtn">Heroku</button>
          <button className="toolkitBtn">MongoDB</button>
          <button className="toolkitBtn">Express.js</button>
          <button className="toolkitBtn">MySQL</button>
          <button className="toolkitBtn">Microsoft Azure</button>
          <button className="toolkitBtn">AWS (Amazon Web Services)</button>
          <h3>Front end:</h3>
          <button className="toolkitBtn">jQuery</button>
          <button className="toolkitBtn">Bootstrap</button>
          <button className="toolkitBtn">Fontawesome</button>
          <button className="toolkitBtn">CSS Flexbox + Grid</button>
          <h3>Frameworks:</h3>
          <button className="toolkitBtn">React.js</button>
          <button className="toolkitBtn">Django.py</button>
          <button className="toolkitBtn">Angular.js</button>
          <button className="toolkitBtn">Vue.js</button>
          <button className="toolkitBtn">React Native</button>
          <button className="toolkitBtn">Ruby on Rails</button>
          <h3>Methodologies:</h3>
          <button className="toolkitBtn">Agile</button>
          <button className="toolkitBtn">Scrum</button>
          <button className="toolkitBtn">Mobile-first</button>
          <button className="toolkitBtn">MVPs</button>
          <button className="toolkitBtn">PWAs</button>
          <button className="toolkitBtn">CI/CD</button>
          <h3>Software:</h3>
          <button className="toolkitBtn">Visual Studio Code</button>
          <button className="toolkitBtn">BASH shell</button>
          <button className="toolkitBtn">Google Suite</button>
          <button className="toolkitBtn">Office 365</button>
          <h3>Package managers:</h3>
          <button className="toolkitBtn">npm</button>
          <button className="toolkitBtn">apt</button>
          <button className="toolkitBtn">pip</button>
          <button className="toolkitBtn">yarn</button>
          <h3>Operating systems:</h3>
          <button className="toolkitBtn">Windows 10</button>
          <button className="toolkitBtn">Mac OS X</button>
          <button className="toolkitBtn">Linux (Ubuntu)</button>
          <h3>Hardware assembly &#x26; installation:</h3>
          <button className="toolkitBtn">RAM</button>
          <button className="toolkitBtn">SSD</button>
          <button className="toolkitBtn">HDD</button>
          <button className="toolkitBtn">CPU</button>
          <button className="toolkitBtn">GPU</button>
          <button className="toolkitBtn">motherboard</button>
          <button className="toolkitBtn">heatsink</button>
          <button className="toolkitBtn">case/fans</button>
          <h3>Circuitry learning tools:</h3>
          <button className="toolkitBtn">Raspberry Pi</button>
          <button className="toolkitBtn">RP2040 Pico</button>
          <button className="toolkitBtn">Arduino</button>
          <button className="toolkitBtn">SparkFun</button>
        </div>
        <p id="break">-. --- .--</p>
        <ul>
          <li className="t0c">
            <a href="#appsList" onClick={revealApps}>
              # app projects
            </a>
          </li>
          <li className="t0c">
            <a href="#portfolioSite" onClick={revealPf}>
              # details about this site
            </a>
          </li>
          <li className="t0c" onClick={revealArt}>
            <a href="#artList"># visual design</a>
          </li>
        </ul>
        <p id="pf">
          I'm currently looking for work (August 2021). Visit me on{" "}
          <a href="https://github.com/coryjquirk" target="_blank">
            GitHub
          </a>{" "}
          to see projects I'm coding, both solo and collaboratively.
        </p>
        <p id="pf">
          I'm a full-stack web developer looking for full time work. For the
          right job, I'm open to remote work, relocation, or contract work. I
          aim to make elegant and intuitive sites with JavaScript, CSS, and
          React, taking a user perspective in designing my UI/UX.
        </p>
        <div id="appsList">
          {appsOpened === false && (
            <button
              className="appsListReveal standardButton"
              onClick={revealApps}
            >
              <i className="fa fa-plus"></i>
            </button>
          )}
          {appsOpened === true && (
            <button className="appsListHide standardButton" onClick={hideApps}>
              <i className="fa fa-minus"></i>
            </button>
          )}
          <h2>app portfolio</h2>
          <p>
            A few completed projects so far. Click right to expand or collapse.
          </p>
          {appsOpened === true && (
            <div>
              <p class="subText">
                Deployed applications are hosted on free servers so they may
                need a minute to start up.
              </p>
              <p class="subText">
                Please visit me on{" "}
                <a href="https://github.com/coryjquirk" target="_blank">
                  GitHub
                </a>{" "}
                to view code repositories.
              </p>
              <div id="portfolioItem">
                <h2>Farm Companion</h2>
                <p>
                  Hosts useful information for the staff of a small farm
                  project.
                  <p>Features:</p>
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
                  of third-party and open-source React.js components.
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
          {pfOpened === false && (
            <button
              className="appsListReveal standardButton"
              onClick={revealPf}
            >
              <i className="fa fa-plus"></i>
            </button>
          )}
          {pfOpened === true && (
            <button className="appsListHide standardButton" onClick={hidePf}>
              <i className="fa fa-minus"></i>
            </button>
          )}
          <h2>personal website</h2>
          <p>
            I built this site with the idea that such a site could be adapted to
            a client's portfolio.
          </p>
          <p>
            I'm actively improving this site in summer 2021 and if something
            isn't working right, please <a href="/contact">email me</a> with any
            revelant screenshots or error messages.
          </p>
          {pfOpened === false && <p>Click right for more technical details.</p>}
          {pfOpened === true && (
            <div>
              <hr></hr>

              <h3>technical details</h3>
              <p>
                I enjoy coding custom <strong>CSS</strong> features supplemented
                with tools like Bootstrap and Fontawesome that provide great
                features ready to use right away. <strong>React.js</strong>{" "}
                allows me to create custom UI/UX components like the portfolio's
                'drawer' button above. You can also easily bring code for third
                party React components, such as the scroll-up arrow on the
                bottom right of the page (
                <a
                  href="https://medium.com/better-programming/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc"
                  target="_blank"
                >
                  source
                </a>
                ).
              </p>
              <p>
                My process with this site is to host my code in a{" "}
                <a
                  href="https://github.com/coryjquirk/portfolio"
                  target="_blank"
                ></a>
                GitHub repository, pull down the main branch to my secondary
                branch with the <strong>command line</strong> to code new
                features. Then I commit meaningful changes early and often but
                only upon completion of features, never adding 'half-working'
                code (if there were such a thing), since repositories of broken
                code only confuse other developers.{" "}
              </p>
              <p>
                Hosting my code there also allows me to pull it down and make
                changes anywhere from my laptop or another machine that I use
                with SSH keys.
              </p>
              <p>
                {" "}
                I have a simple CI/CD pipeline setup with a secondary server
                from a different <strong>Git</strong> branch{" "}
                <a
                  href="https://portfolio-tester.herokuapp.com/"
                  target="_blank"
                >
                  here
                </a>{" "}
                with Heroku so I can make sure my site won't break upon
                deployment. My apps on <strong>Heroku</strong> are linked
                directly to the main and secondary branches so the site is
                re-deployed each time new code is pushed up to the repository.
              </p>
              <p>
                I follow appropriate naming conventions like{" "}
                <code className="pCode">#camelCase</code> for CSS in my code. I
                use short and neat file names and I often spend time refactoring
                my code to eliminate redundancies. In comments, I like to add
                links to documentation and sources for open-source code that I'm
                utilizing if it's not already immediately apparent in the code.
              </p>
              <p>
                I run an <code className="pCode">npm start</code> localhost:3000
                server for a JavaScript runtime environment that will compile
                React.js code on my local machine. Developing for the front-end,
                I can't imagine not have a browser window open alongside{" "}
                <strong>Visual Studio Code</strong>. Additionally, it's much
                easier to design sites first for mobile and then expand the CSS
                media queries to adapt to larger screen sizes. To test screen
                width responsiveness at every stage of designing an app, I
                utilize <strong>Google Chrome developer tools</strong>. It's
                that side bar that pops up when you hit F12, 'Inspect', or
                ctrl-shift-I on desktop (if you've never tried it but you've
                read this far, I encourage you to use it to see the code for
                this page!).
              </p>
              <p>
                This site meets accessibility standards for screen readers, and
                is a <strong>PWA</strong> (Progressive Web Application) that you
                can install on your phone's home screen. It utilizes a service
                worker to cache important files for fastest performance, and it
                uses a webmanifest to carry important metadata that allows it to
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
          )}
        </div>
        <div id="artList">
          {artOpened === false && (
            <button
              className="appsListReveal standardButton"
              onClick={revealArt}
            >
              <i className="fa fa-plus"></i>
            </button>
          )}
          {artOpened === true && (
            <button className="appsListHide standardButton" onClick={hideArt}>
              <i className="fa fa-minus"></i>
            </button>
          )}
          <h2>assorted visuals</h2>
          <p>Click right to expand or collapse</p>
          {artOpened === true && (
            <div>
              <div id="artTools">
                <p id="artP">
                  <strong>software: </strong> Adobe Photoshop, GIMP, and VSDC
                  video editor.
                </p>
                <p id="artP">
                  <strong>35mm cameras</strong>: Olympus OM-10 SLR, Kodak S500AF
                  point and shoot
                </p>
                <p id="artP">
                  <strong>35mm film</strong>: Kodak Portra 400, Fujifilm Superia
                  Xtra 400, Kodak Gold 200
                </p>

                <p id="artP">
                  <strong>sound design:</strong> Audacity, Reaper, analog
                  equipment (synthesizers, samplers, microphones, mixing boards,
                  effects units).
                </p>
                <p>
                  <button className="standardButton">
                    <a href="/photography" style={{ color: "black" }}>
                      photography gallery <i className="fa fa-arrow-right"></i>
                    </a>
                  </button>
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

        <div id="connectLink">
          <a href="/contact">
            <button className="standardButton">
              connect <i class="fa fa-connectdevelop"></i>
            </button>
          </a>
          <a href="/contact">
            <button className="standardButton">
              blog <i className="fa fa-pencil"></i>
            </button>
          </a>
          <a href="/contact">
            <button className="standardButton">
              photos <i class="fa fa-camera-retro"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="ghostDiv"></div>
      </div>   );
}

export default Portfolio;
