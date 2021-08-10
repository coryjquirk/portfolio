import React, { useState } from "react";
import farm from "./farm.gif";
import beds from "./beds.jpg";
import pep from "./pep.jpg";
import sky from "./sky.jpg";
import kg from "./kg.jpg";
import spiral from "./spiral.gif";
import ModalImage from "react-modal-image";
import "./style.css";

export default function Post7() {
  const [opened, openArticle] = useState(false);

  function revealArticle() {
    openArticle(true);
  }
  function hideArticle() {
    openArticle(false);
  }
  return (
    <div className="blogPost" id="post7">
      {opened === true && (
        <a href="#post7">
          <button onClick={hideArticle} className="closePost">
            <i id="closeSymbol" class="fa fa-window-close"></i>
          </button>
        </a>
      )}
      <h3>Farm Companion app</h3>
      <p id="previewText">
        Today's post features a MERN stack app I developed as a passion project
        this spring.
      </p>
      <p id="blogDate">8 August, 2021 </p>
      {opened === false && (
        <img
          className="blogPreviewImg"
          src={beds}
          alt="New accessible raised garden beds"
        ></img>
      )}
      {opened === true && (
        <div>
          <img
            className="wideHeader"
            src={beds}
            alt="New accessible raised garden beds"
          ></img>
          <p className="mutedBlog">
            Newly built accessible raised garden beds at Frogtown Farm
          </p>
          <p>
            <a href="#appDemo">
              <button className="standardButton">
                skip to app demo{" "}
                <i id="arrowSymbol" className="fa fa-arrow-right"></i>
              </button>
            </a>
          </p>
          <h3>Background</h3>
          <p>
            In fall 2020 I began volunteering with a nonprofit organization
            called Frogtown Farm, and I was hired as a part-time farm assistant
            spring 2021. The farm and its office are located in the heart of St.
            Paul, founded in 2013 just down the road from my alma mater, Hamline
            University.
          </p>
          <p id="farmBio">
            "The farm is one of the largest urban farms in the country with 5
            acres of cultivated fields within a 12.7-acre park. Frogtown Farm is
            a nexus for a healthy food system that fills gaps in production,
            storage, education, training and networking."
          </p>
          <p id="farmLink">
            <a href="https://www.frogtownfarm.org/" target="_blank">
              - frogtownfarm.org
            </a>
          </p>
          <p>
            I partnered with the facilities and events manager (and fellow{" "}
            <a href="https://ses.district196.org/" blank="_blank">
              School of Environmental Studies
            </a>{" "}
            alum) Keanue Driscoll-Cherland to develop a web app to hold info
            pertaining to:
          </p>
          <p>
            <ul>
              <li>seed inventory</li>
              <li>equipment inventory</li>
              <li>organizational onboarding "handbook"</li>
              <li>
                employee info
                <ul>
                  <li>contact info</li>
                  <li>shift notes</li>
                  <li>time tracking</li>
                </ul>
              </li>
            </ul>
          </p>
          <ModalImage
            className="blogImg"
            small={pep}
            large={pep}
            alt="hot pepper at Frogtown Farm"
            hideDownload={true}
          />
          <p>
            Our goal was to create a website to store information that supports
            farm operations year-to-year, allowing the farm crew to more easily
            weather shifts in our workforce. Any organization running on a
            seasonal schedule will faces challenges relating to its people
            coming and going, but this is especially relevant to an organic
            permaculture farm where the success of any given year is greatly
            dependent on the field work completed in the previous year.
          </p>
          <p>
            COVID-19 disrupted many aspects of farm operations, from the crop
            plan to the food distribution network. This app is not officially
            implemented with Frogtown Farm yet, but it has been wonderful to
            practice my web development skills by working on a real life
            problem. If the resources become available for the organization to
            implement our app, I would love to work with leadership to help
            maintain it for ongoing use.
          </p>
          <p id="break">-. --- .--</p>
          <h3 id="appDemo">App demo</h3>
          <ModalImage
            small={farm}
            large={farm}
            id="blogtags"
            alt="Farm app"
            hideDownload={true}
          />
          <p className="mutedBlog">
            <strong>to try the app for yourself:</strong>{" "}
            <p className="mutedBlog">
              log in with coryjquirk@gmail.com / password123
            </p>
          </p>

          <p>
            <button className="standardButton">
              deployed app{" "}
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </button>{" "}
          </p>
          <p>
            <u>Features</u>
            <ul>
              <li>
                <strong>Microsoft Excel</strong> inventory sheets
              </li>
              <ul>
                <li>embedded from OneDrive</li>
              </ul>
              <li>
                <strong>ArcGIS StoryMaps</strong>
              </li>
              <ul>
                <li>
                  customized interactive satellite map{" "}
                  <a
                    href="https://www.esri.com/en-us/arcgis/products/arcgis-storymaps/overview"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <li>
                <strong>Username/password authentication</strong>
                <ul>
                  <li>
                    future development: superuser and specialized permissions
                    (i.e. managers can add a new employee and edit account info,
                    employees see a more basic version of site when logged in)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Time card widget</strong> (experimental)
              </li>
            </ul>
          </p>
          <ModalImage
            small={kg}
            large={kg}
            alt="kitchen garden"
            hideDownload={true}
          />
          <p>
            Keanue and I tried to mirror a DevOps process between the two of us,
            with him directing the concept and myself developing the
            application. We brainstormed about the app during off-season
            administrative work this past winter. Then, I would go home, try to
            implement our ideas with code, and send Keanue a live link so he
            could try the app for himself and provide me feedback.
          </p>

          <p>
            I set up a CI/CD pipeline between two Heroku apps, the main one
            called "farm-companion" deployed from my main Git branch, and a
            backup deployment called "farmdev" that deploys from a side branch I write my
            code on first. Once I confirm the side branch "farmdev" deploys to
            the Heroku cloud without my new changes causing unforeseen issues,
            then I perform a Git merge to the main branch. I've implemented the
            same kind of pipeline for this portfolio website, as it's been
            critical to me during my job search to ensure my site always runs
            properly at the link I've been sharing to employees and colleagues.
          </p>
          <p>
            A mobile-friendly user interface is crucial so that any worker can
            have access on their mobile device. Keanue is a multimedia artist
            himself so I enjoyed collaborating with him on the site's visual
            impression and layout.
          </p>
          <ModalImage
            small={spiral}
            large={spiral}
            alt="herb spiral"
            hideDownload={true}
          />
          <p className="mutedBlog">
            <strong>above:</strong> the "outdoor kitchen" garden.
          </p>
          <p className="mutedBlog">
            <strong>below:</strong> Keanue's recently constructed and planted
            herb spiral project (click to expand)
          </p>
          <p id="break">-. --- .--</p>
          <p>
            <u>Technical details</u>
            <ul>
              <li>
                React.js front-end
                <ul>
                  <li>
                    Bootstrap and{" "}
                    <a href="https://fontawesome.com/" target="_blank">
                      Fontawesome
                    </a>{" "}
                    icon library
                  </li>
                  <li>custom CSS styling</li>
                  <li>
                    <a
                      href="https://www.toptal.com/designers/subtlepatterns/geometric-leaves-pattern/"
                      target="_blank"
                    >
                      Geometric leaves
                    </a>{" "}
                    pattern by Mungujakisa Edmond
                  </li>
                </ul>
              </li>

              <li>
                Back-end
                <ul>
                  <li>server powered by Node.js</li>
                  <li>cloud deployment on Heroku</li>
                </ul>
              </li>

              <li>
                User authentication{" "}
                <ul>
                  <li>
                    JSON Web Token authentication from{" "}
                    <a
                      href="http://www.passportjs.org/packages/passport-jwt/"
                      target="_blank"
                    >
                      passport.js
                    </a>
                  </li>
                  <li>
                    password hashing encryption:{" "}
                    <a
                      href="https://www.npmjs.com/package/bcryptjs"
                      target="_blank"
                    >
                      bcrypt
                    </a>{" "}
                    <ul>
                      <li>
                        this scrambles passwords users create with our app so
                        it's secured against everyone including myself, the
                        developer with access to the database
                      </li>
                    </ul>
                  </li>
                  <li>
                    user model schema defined with{" "}
                    <a
                      href="https://mongoosejs.com/docs/guide.html"
                      target="_blank"
                    >
                      mongoose
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.mongodb.com/cloud/atlas"
                      target="_blank"
                    >
                      MongoDB Atlas
                    </a>{" "}
                    DBaaS to store user info for cloud deployment
                  </li>
                </ul>
              </li>
            </ul>
          </p>
          <p>
            I chose React as my front-end JavaScript framework, pulling much of
            my starter code from the point-of-sale app called{" "}
            <a href="https://github.com/coryjquirk/cart-croc">Cart Croc</a> that
            I developed on a team of four for my final web dev bootcamp project.
            However, there is still unused code I need to trim off, hopefully
            making it simpler for another developer to contribute to the site in
            the future. The residual code isn't currently impeding on the app's
            performance, but it's best practice to remove extra files and
            folders from pieces of code from other developers experimenting in
            the past.
          </p>
          <p>
            The most technically challenging part of this app so far was
            creating a secure and self-contained username/password database. For
            helping guide me through, I want to shout out this{" "}
            <a
              href="https://www.youtube.com/watch?v=USaB1adUHM0"
              target="_blank"
            >
              tutorial
            </a>
            /
            <a
              href="https://github.com/bradtraversy/mern_shopping_list"
              target="_blank"
            >
              repo
            </a>{" "}
            from Traversy Media, plus{" "}
            <a
              href="https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669"
              target="_blank"
            >
              this
            </a>{" "}
            article from Bits and Pieces. This functionality still has a ways to
            go in my app. Currently, the only way to reset a password is for me
            to manually delete the associated account from our database and
            start over with a new user account, which will be unacceptable once users begin amassing data paired with their accounts.
          </p>
          <p><a href="https://www.okta.com/" target="_blank">Okta</a> is an alternative third-party authentication method I considered and wrote about down in my 12 March 2021 post. Another I toyed with was Google's <a href="https://firebase.google.com/" target="_blank">Firebase</a>, but I already had my application deployed on Heroku and would've been best off moving my deployment to Firebase if I were to implement this solution.</p>
          <ModalImage
            small={sky}
            large={sky}
            alt="St. Paul skyline in background"
            hideDownload={true}
          />
          <p className="mutedBlog">
            Frogtown Farm is one of the few naturally elevated places in the
            Twin Cities where you can see both Minneapolis and St. Paul
            skylines. Look carefully above and you can see a couple St. Paul
            church steeples and the Minnesota state capitol.
          </p>
          <iframe
            src="https://storymaps.arcgis.com/stories/52354515142b4631a1e09d402743d36e?cover=false"
            id="storyMap"
            title="ArcGISstorymap"
            frameBorder="0"
            allowFullScreen
            allow="geolocation"
          ></iframe>
          <p>
            Lastly, I leave you with the ArcGIS map I've been building with
            photos from the farm. I'll continue adding more as the seasons
            change, new crops begin popping up, and new farm projects are built.
            If you are unfamiliar with the area, zoom out on the map and take a
            moment to appreciate how much public greenspace the farm provides to
            the surrounding community!
          </p>
          <p className="mutedBlog">
            When was a time you identified a real-life problem and successfully
            addressed it with a custom technological solution? Thanks for
            reading, and as always please contact me if you have any thoughts,
            feedback, or ideas sparked by this project.
          </p>
        </div>
      )}
      {opened === false && (
        <button className="openPost" onClick={revealArticle}>
          <i id="arrowSymbol" className="fa fa-arrow-right"></i>
        </button>
      )}
    </div>
  );
}
