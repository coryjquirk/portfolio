import React, { useState } from "react";
import "./style.css";
import farm from "../Blog/Posts/Post7/farm.gif";
import READMEgen from "./Images/readme-generator.gif";
import weatherdashboard from "./Images/weatherdashboard.gif";
import cartcroc from "./Images/cartcroc.gif";
import passwordgen from "./Images/passwordgen.gif";
//
import dnd from "./Images/art/dnd.gif";
import eug from "./Images/art/eug.gif";
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
    <div>
      {" "}
      <button
        className="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>developer portfolio</h1>
      </button>
      <h1 className="desktopHeader">developer portfolio</h1>
      <hr className="headHr" />
      <div className="meat">
        <p>skip to:</p>
        <p>
          <a href="#appsList" onClick={revealApps}>
            <button className="standardButton">
              app projects <i className="fa fa-arrow-down"></i>
            </button>
          </a>
        </p>
        <p>
          <a href="#portfolioSite" onClick={revealPf}>
            <button className="standardButton">
              portfolio site details <i className="fa fa-arrow-down"></i>
            </button>
          </a>
        </p>
        <p>
          <a href="#artList" onClick={revealArt}>
            <button className="standardButton">
              visual work <i className="fa fa-arrow-down"></i>
            </button>
          </a>
        </p>
        <p id="pf">
          Visit me on{" "}
          <a href="https://github.com/coryjquirk" target="_blank">
            GitHub
          </a>{" "}
          to see projects I'm coding, both solo and collaboratively.
        </p>
        <p id="pf">
          I'm a full-stack developer continuing to build my new skills. I have professional experience working with Docker, Kubernetes, and Jenkins CI/CD pipelines with Maven/Spring Boot and TypeScript/Angular/NodeJS microservices. 
          My favorite language to use is Python.
          In my web development projects I have most experience with the MERN stack. I aim to
          make elegant and intuitive web pages, taking a human user
          perspective in designing UI/UX.
        </p>
        <div id="break">-. --- .--</div>
        <div id="toolKit">
          <h2>skills</h2>
          <p>
            <i className="fa fa-asterisk"></i> Ordered by{" "}
            <strong>familiar</strong> <i className="fa fa-arrow-right"></i>{" "}
            <strong>learning</strong>
          </p>
          <h3>Languages:</h3>
          <button className="toolkitBtn">Java</button>
          <button className="toolkitBtn">Python</button>
          <button className="toolkitBtn">Go</button>
          <button className="toolkitBtn">TypeScript</button>
          <button className="toolkitBtn">Ruby</button>
          <button className="toolkitBtn">C/C++</button>
          <button className="toolkitBtn">C#/.NET</button>
          <h3>CI/CD:</h3>
          <button className="toolkitBtn">Jenkins</button>
          <button className="toolkitBtn">Docker</button>
          <button className="toolkitBtn">Kubernetes</button>
          <button className="toolkitBtn">Helm</button>
          <button className="toolkitBtn">ArgoCD</button>
          <h3>Back end:</h3>
          <button className="toolkitBtn">SQL</button>
          <button className="toolkitBtn">Node.js</button>
          <button className="toolkitBtn">Heroku</button>
          <button className="toolkitBtn">MongoDB</button>
          <button className="toolkitBtn">Express.js</button>
          <button className="toolkitBtn">Microsoft Azure</button>
          <button className="toolkitBtn">AWS (Amazon Web Services)</button>
          <h3>Front end:</h3>
          <button className="toolkitBtn">HTML</button>
          <button className="toolkitBtn">JavaScript</button>
          <button className="toolkitBtn">CSS</button>
          <button className="toolkitBtn">jQuery</button>
          <button className="toolkitBtn">Bootstrap</button>
          <button className="toolkitBtn">Fontawesome</button>
          <button className="toolkitBtn">CSS Flexbox + Grid</button>
          <h3>Frameworks:</h3>
          <button className="toolkitBtn">Spring Boot</button>
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
          <h3>Software:</h3>
          <button className="toolkitBtn">IntelliJ</button>
          <button className="toolkitBtn">Visual Studio Code</button>
          <button className="toolkitBtn">BASH shell</button>
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
        <div id="break">-. --- .--</div>
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
            Here are a few projects I've completed so far. Click the + to the
            right to expand or collapse.
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
                    src={passwordgen}
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
            I'm actively improving this site and if something
            isn't working right, please <a href="/contact">email me</a> with any
            revelant screenshots or error messages.
          </p>
          {pfOpened === false && <p>Click the + for more technical details.</p>}
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
                src={
                  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651938005/portfolio-visualwork/fab_egjqmq.png"
                }
                alt="phone wallpaper gradient from Cambodian tablecloth photo"
              ></img>
              <img
                className="portfolioArt"
                src={
                  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651938006/portfolio-visualwork/ham_hnyaax.png"
                }
                alt="hamm's brewery"
              ></img>
              <img
                className="portfolioArt"
                src={
                  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651938007/portfolio-visualwork/lfskp_ajxfyc.png"
                }
                alt="leaf under a microscope"
              ></img>
              <img
                className="portfolioArt"
                src={
                  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651938005/portfolio-visualwork/lint_cff26w.png"
                }
                alt="35mm film plus eslint collage"
              ></img>
              <img
                className="portfolioArt"
                src={
                  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651938006/portfolio-visualwork/mac_irocuj.png"
                }
                alt="macbook pro glitch"
              ></img>
              <img
                className="portfolioArt"
                src={
                  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651938748/portfolio-visualwork/flyer_vdmzay.png"
                }
                alt="show flyer"
              ></img>
              <img
                className="portfolioArt"
                src={
                  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651938006/portfolio-visualwork/kl_d3fckb.jpg"
                }
                alt="glitch art"
              ></img>
              <img
                className="portfolioArt"
                src={
                  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651938006/portfolio-visualwork/siem_dyei0w.jpg"
                }
                alt="temple, Siem Reap Cambodia"
              ></img>
              <img
                className="portfolioArt"
                src={
                  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651938005/portfolio-visualwork/tape_uwoure.jpg"
                }
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
              connect <i className="fa fa-envelope"></i>
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
    </div>
  );
}

export default Portfolio;
