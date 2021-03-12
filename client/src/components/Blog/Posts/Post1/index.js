import React, { useState } from 'react'
import juniper from "./juniper.jpg";

function Post1() {
    const [opened, openArticle] = useState(false);

  function revealArticle() {
    openArticle(true);
  }
  function hideArticle() {
    openArticle(false);
  }
    return (
        <div id="blogPost">
        {opened === true && (
          <div onClick={hideArticle} id="closePost">
            <i id="closeSymbol" class="fa fa-window-close"></i>
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
            <img class="blogHeadImg" id="sedona" src={juniper}></img>
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
              <strong>Food.</strong> Although I miss cooking for work potlucks and going out
              for lunches together, I'm grateful when everyone on the team
              I'm working with can nourish themselves at home without
              worrying about any dietary restrictions or food allergies. For
              those who don't feel comfortable in the kitchen, this might be
              more of a con. </p><p><strong>No commute!</strong> It’s better for the earth, and it’s
              better for us. Many folks used to spend an hour in the car
              every day on American interstates during rush hour, a part of
              a daily routine nothing else if not stress-inducing. The
              average American works 260 days a year. Sure, maybe there have
              been times in quarantine where you struggled finding ways to
              spend your time at home, but did you ever sit wishing you were
              bumper to bumper on a freeway ramp? </p><p><strong>Pets.</strong> I don't have any, so
              I love seeing yours.
            </p>
            <p>Cons:</p>
            <p>
              <strong>Video latency.</strong> We don't face this problem with the usual
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
              <strong>Cabin fever.</strong> I’m seeing so many memes lately about how
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
              I hope to start conversations and hear your thoughts about
              your experience as a student, employee, or job seeker during
              COVID. I'm a junior full stack developer looking for full time
              WFH or work in the Minneapolis area. I'm also open to hearing
              freelance/commission proposals.
            </p>
            <p class="mutedBlog">
              Thank you to Owen Höglund for workshopping this writing with
              me, and for giving me the idea to break a much longer piece
              into continuing posts. In
              future posts I’ll write more about projects I’m working on, my
              coding bootcamp experience, as well as coding myths that I
              would like to dispel.
            </p>
          </div>
        )}
        {opened === false && (
          <div id="openPost" onClick={revealArticle}>
            <i id="arrowSymbol" class="fa fa-arrow-right"></i>
          </div>
        )}
      </div>
    )
}

export default Post1;