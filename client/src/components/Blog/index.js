import React, { useState } from "react";
import "./style.css";
import { Container } from "../Grid";
import self from "./self.jpg";
import Post1 from "./Posts/Post1"
import Post2 from "./Posts/Post2"
import Post3 from "./Posts/Post3"

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
        {/* save for when we need it <a href="#aboutme">about</a> */}
      </div>
      <hr className="headHr" />
      <div id="blog">

      <div>
        <div id="blogList">
          <Post3></Post3>
          <Post2></Post2>
          <Post1></Post1>
         </div>

        <div id="about">
          <h3>about me</h3>
          <p>
            I'm a full stack web developer looking for full time remote work and
            small project work. I built this site with React to share my
            projects.{" "}
          </p>
          <p>
            {" "}
            If you're an employer, <a href="/contact">over here</a> you can find
            my LinkedIn profile, resumé, and a catch-all cover letter. I stay
            actively coding and you can visit my GitHub to see what I'm working
            on.
          </p>
          <p id="break">-. --- .--</p>

          <p>
            &emsp;I earned a full stack web development certificate in Fall 2020
            from the University in Minnesota, and a B.A. in anthropology in 2018
            from Hamline University. I have professional experience using
            Spanish and I've studied Norwegian since 2018.
          </p>
          <p>
            &emsp;With Hamline University, a highlight of my undergrad was a
            2017{" "}
            <a
              href="https://www.hamline.edu/hunewsdetail.aspx?id=4295030203"
              target="_blank"
            >
              short course{" "}
            </a>
            in Siem Reap, Cambodia about the blooming tourist industry around
            the Angkor temple complex. In my independent research, I studied the
            phenomenon of noise pollution — the resulting sound works can be
            found <a href="sound">over here</a>. Another formative experience
            was working with other archaeologists on burial recovery sites,
            where we restored disturbed pre-colonial grave sites
            under the leadership of descendent communities.{" "}
            <a
              href="https://www.startribune.com/after-3-years-minnetonka-burial-mound-restoration-reaches-completion/456894483/"
              target="_blank"
            >
              Here's
            </a>{" "}
            a Star Tribune article about one such site I worked on.
          </p>
          <p>
            &emsp;Right now I'm excited to get started in tech. I'm open to work
            and taking on new projects. Thank you for visiting!{" "}
          </p>
          <p id="blogDate">-March 2021</p>
        </div>
        <div className="ghostDiv"></div>
      </div>
      <img id="self" src={self}></img>
      <p className="mutedBlog" id="theseMine">all photos are mine unless otherwise stated or readily apparent.</p>
      </div>
    </Container>
  );
}

export default Blog;
