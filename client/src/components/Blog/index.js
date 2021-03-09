import React, { useState, useEffect } from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";
import self from "./self.jpg";
import juniper from "./juniper.jpg";

function Blog() {
  const [opened, openApps] = useState(false);

  function revealApps() {
    openApps(true);
  }
  function hideApps() {
    openApps(false);
  }
  return (
    <Container id="blog" fluid>
      <button
        class="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>blog</h1>
      </button>
      <h1 class="desktopHeader">blog</h1>
      <div id="bottomLink">
        {/* save for when we need it <a href="#aboutme">about</a> */}
      </div>
      <hr class="headHr" />

      <div>
        <div id="blogList">
          <div id="blogPost">
            {opened === true && (
              <div onClick={hideApps} id="closePost">
                <i class="fa fa-window-close"></i>
              </div>
            )}
            <h3>Entering web development during COVID</h3>
            <p id="previewText">
              Having been a full time employee, full time student, and now a
              full time job seeker during the pandemic, I wanted to share my
              perspective on the past year.
            </p>
            <p id="blogDate">8 March, 2021 </p>
            {opened === true && (
              <div>
                  <img class="blogImg" src={juniper}></img>
                <p>
                  As we reach the one year mark of COVID-19 becoming a reality
                  for Americans, I want to share some Monday morning reflections
                  on the past year and my perspective going forward as a new
                  full-stack developer.
                </p>
                <p>
                  I adapted to 2020 by pivoting towards technology, and I'm
                  realizing that this change is not at odds with my background
                  in the humanities, but is actually tremendously enhancing it
                  with new skills. With strong written and verbal communication,
                  I'm prepared to do work that improves cross-cultural
                  communication in a time when computers mean everything for
                  education, art, culture, and the economy.
                </p>
                <p>
                  I'm in the section of the population that has worked remotely
                  as a full time employee, a full time student, and now, a full
                  time job seeker. In considering pros and cons, I'll say
                  "remote life" instead of "remote work" because these same
                  benefits and difficulties apply to our social lives, families,
                  and leisure time.
                </p>
                <p>Pros:</p>
                <p>
                  Food. Although I miss cooking for work potlucks and going out
                  for lunches together, I'm grateful when everyone on the team
                  I'm working with can nourish themselves at home without
                  worrying about any dietary restrictions or food allergies. For
                  those who don't feel comfortable in the kitchen, this might be
                  more of a con. No commute! It’s better for the earth, and it’s
                  better for us. Many folks used to spend an hour in the car
                  every day on American interstates during rush hour, a part of
                  a daily routine nothing else if not stress-inducing. The
                  average American works 260 days a year. Sure, maybe there have
                  been times in quarantine where you struggled finding ways to
                  spend your time at home, but did you ever sit wishing you were
                  bumper to bumper on a freeway ramp? Pets. I don't have any, so
                  I love seeing yours.
                </p>
                <p>Cons:</p>
                <p>
                  Cabin fever. I’m seeing so many memes lately about how
                  unusually wonderful the sun in spring 2021 feels for our
                  bodies. Extra vitamin D is especially important to those of us
                  farther north of the equator. As an aside, I hope our
                  collective experience with quarantine has implications that'll
                  reduce the role of solitary confinement in the United States
                  correctional system, and the criminal justice system will
                  continue to opt for proven forms of rehabilitation in favor of
                  incarceration.
                </p>
                <p>
                  Video latency. We don't face this problem with the usual
                  in-person communication. Latency is defined by Oxford as "the
                  delay before a transfer of data begins following an
                  instruction” - and this delay can cause participants to
                  interrupt each other. The fear of accidentally interrupting
                  classmates accidentally interrupting each other deters
                  participants from speaking up, and the effect is stronger when
                  the dynamic is student/teacher or employee/manager. Verbal
                  communication inevitably suffers hiccups when we aren't able
                  to instantly respond to language in truly real time, from
                  audible words to facial expressions to changes in tone. For
                  me, classroom discussions were the defining moments of my
                  undergraduate experience with anthropology. My bootcamp course
                  functioned well with a combination of lectures and independent
                  work. However, I can imagine the difficulties in contexts
                  where discussion of texts is where the best learning happens.
                  The closer we come to technologically reducing the "Zoom
                  delay," our society will be in a much better spot with remote
                  work. I am especially sympathetic towards people working
                  towards accessibility for people unable to see, speak, or
                  hear.
                </p>
                <p>
                  I hope to start conversations and hear your thoughts about
                  your experience as a student, employee, or job seeker during
                  COVID. I'm a junior full stack developer looking for full time
                  WFH or work in the Minneapolis area. I'm also open to hearing
                  freelance/commission proposals.
                </p>
                <p>
                  Thank you to Owen Hoglund for workshopping this writing with
                  me, and for giving me the idea to break a much longer piece
                  into continuing posts (
                  <a href="https://github.com/Othedough">his GitHub</a>). In
                  future posts I’ll write more about projects I’m working on, my
                  coding bootcamp experience, as well as coding myths that I
                  would like to dispel.
                </p>
              </div>
            )}
            {opened === false && (
              <div id="openPost" onClick={revealApps}>
                <i id="blogArrow" class="fa fa-arrow-right"></i>
              </div>
            )}
          </div>
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
            where we restored disturbed pre-colonial Native American grave sites
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
        <div class="ghostDiv"></div>
      </div>
      <img id="self" src={self}></img>
    </Container>
  );
}

export default Blog;
