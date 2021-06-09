import React, { useState } from "react";
import "./style.css";
import { Container } from "../Grid";
import self from "./self.jpg";
import Post1 from "./Posts/Post1";
import Post2 from "./Posts/Post2";
import Post3 from "./Posts/Post3";
import Post4 from "./Posts/Post4";

function Blog() {
  const [opened, openApps] = useState(false);

  function revealApps() {
    openApps(true);
  }
  function hideApps() {
    openApps(false);
  }
  return (
    <Container fluid>
      <button
        className="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>blog</h1>
      </button>
      <h1 className="desktopHeader">blog</h1>
      <div id="bottomLink">
        <a href="#about">about</a>
      </div>
      <hr className="headHr" />
      <div id="blog">
        <div>
          <div id="blogList">
            <Post4></Post4>
            <Post3></Post3>
            <Post2></Post2>
            <Post1></Post1>
          </div>

          <div id="about">
            <h3>about me</h3>
            <p>
              I'm a full stack web developer looking for local or remote full time work,
              or contract/project work. I built this site with React to share my
              projects.{" "}
            </p>
            <p>
              {" "}
              If you're an employer, <a href="/contact">over here</a> you can
              find my LinkedIn profile, resumé, and a catch-all cover letter. Visit my <a
                href="https://www.github.com/coryjquirk"
              >GitHub</a> to see what I'm
              coding lately.
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
            <p>
              &emsp;Right now I'm actively searching for a developer position
              and open to taking on new projects. Thank you for visiting!{" "}
            </p>
            <p id="blogDate">-June 2021</p>
          </div>
          <div className="ghostDiv"></div>
        </div>
        <img id="self" src={self}></img>
        <p className="mutedBlog" id="theseMine">
          all photos are mine unless otherwise stated or readily apparent.
        </p>
      </div>
    </Container>
  );
}

export default Blog;
