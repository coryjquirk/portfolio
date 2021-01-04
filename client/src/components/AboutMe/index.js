import React from "react";
import "./style.css";
import self from "./me.jpg";

function AboutMe(props) {
  return (
    <div>
      <h1>about me</h1>
      <hr />
      <div class="meat">
        <div id="selfDiv"><figure>
        <a href="/contact"><img ig="self" src={self} alt="me" id="self" 
          /></a>

          <figcaption>Ice fishing in Finland, MN</figcaption>
        </figure>
        </div>
        
        <p>
          I'm a full-stack web developer looking for full time remote work and
          small project work. I built this site with React to share my projects.{" "}
          <a href="/contact">Over here</a> you can find my LinkedIn profile,
          resumé, and my GitHub page to see projects I'm coding.
        </p>
        <p id="break">-. --- .--</p>
        <h3 id="wna">work and academics</h3>
        <p>
          &emsp;I earned a full-stack web development certificate in Fall 2020
          from the University in Minnesota, and a B.A. in anthropology in 2018
          from Hamline University. I have professional experience using Spanish
          and I've studied Norwegian since 2018.
        </p>
        <p>
          &emsp;With Hamline University, a highlight of my undergrad was a 2017{" "}
          <a
            href="https://www.hamline.edu/hunewsdetail.aspx?id=4295030203"
            target="_blank"
          >
            short course{" "}
          </a>
          in Siem Reap, Cambodia about the blooming tourist industry around the
          Angkor temple complex. In my independent research, I studied the
          phenomenon of noise pollution — the resulting sound works can be found{" "}
          <a href="sound">over here</a>. Another formative experience was
          working with other archaeologists on burial recovery sites, where we
          restored disturbed pre-colonial Native American grave sites under the
          leadership of descendent communities.{" "}
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
      </div>
      <div class="ghostDiv"></div>
    </div>
  );
}

export default AboutMe;
