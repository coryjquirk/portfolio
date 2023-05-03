import React from "react";
import "./style.css";
import self from "./self.jpg";

function Splash() {
  return (
    <div id="splashHero">
      <h1 className="header">about me</h1>
      <hr className="headHr" />
      <div className="mainBody" id="about">
          <p>
            I'm a full stack developer/software engineer based in Minnesota. I
            built this site with React to host my blog and share coding
            projects.
          </p>
          <p>
            In my free time, I like making music, gardening, taking film photos,
            enjoying the outdoors, and practicing my Spanish and Norwegian.
          </p>
          <p>
            {" "}
            To get in touch, visit my{" "}
            <a href="https://www.linkedin.com/in/cory-quirk/">LinkedIn</a> page.
            Check out my <a href="https://www.github.com/coryjquirk">GitHub</a>{" "}
            profile to see the code I'm writing lately.
          </p>
          <div id="aboutmeIcons">
            <a
              href="https://www.instagram.com/coryquirk/"
              className="fa fa-instagram"
            ></a>
            <a
              href="https://www.linkedin.com/in/cory-quirk/"
              className="fa fa-linkedin"
            ></a>
            <a
              href="https://www.flickr.com/photos/152958688@N03/"
              className="fa fa-flickr"
            ></a>
            <a
              href="https://www.github.com/coryjquirk"
              className="fa fa-github"
            ></a>
          </div>
          <p>Thank you for visiting! </p>
          <img id="self" src={self}></img>
      </div>
    </div>
  );
}

export default Splash;
