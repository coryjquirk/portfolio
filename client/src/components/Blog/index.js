import React, { useState } from "react";
import "./style.css";
import self from "./self.jpg";
import Post1 from "./Posts/Post1";
import Post2 from "./Posts/Post2";
import Post3 from "./Posts/Post3";
import Post4 from "./Posts/Post4";
import Post5 from "./Posts/Post5";
import Post6 from "./Posts/Post6";
import Post7 from "./Posts/Post7";
import Post8 from "./Posts/Post8";
import Post9 from "./Posts/Post9"

function Blog() {
  return (
    <div>
      {" "}
      <button
        className="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>blog</h1>
      </button>
      <div id="headContainer">
        <h1 className="desktopHeader">blog</h1>
        <div id="bottomLink">
          <a href="#about">about</a>
        </div>
      </div>
      <hr className="headHr" />
      <div id="blog">
        <div>
          <div>
            <Post9/>
            <Post8/>
            <Post7/>
            <Post6/>
            <Post5/>
            <Post4/>
            <Post3/>
            <Post2/>
            <Post1/>
          </div>
          <div id="about">
            <h3>about me</h3>
            <p>
              My name is Cory Quirk and I'm a full stack developer located in
              Minneapolis, MN. I built this site with React to share my web
              development projects.
            </p>
            <p>
              In my free time, I enjoy making music, gardening, taking photos,
              and enjoying the outdoors. I can speak Spanish and Norwegian.
            </p>
            <p>
              {" "}
              <a href="/contact">Here</a> you can find my LinkedIn profile,
              resumé, and email. Visit my{" "}
              <a href="https://www.github.com/coryjquirk">GitHub profile</a> to
              see what I'm coding lately.
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
            <p>Thank you for visiting!{" "}
            </p>
          </div>
          <img id="self" src={self}></img>
          <p className="mutedBlog" id="theseMine">
            all photos are mine unless otherwise stated or readily apparent.
          </p>
        </div>
      </div>
      <div className="ghostDiv"></div>
    </div>
  );
}

export default Blog;
