import React, { useState } from "react";
import okta from "./okta.PNG";
import plants from "./plants.jpg";
import seed from "./seed.png";
import zpd from "./zpd.png";
import ModalImage from "react-modal-image";
import "./style.css"

function Post2() {
  const [opened2, openArticle2] = useState(false);

  function revealArticle2() {
    openArticle2(true);
  }
  function hideArticle2() {
    openArticle2(false);
  }
  return (
    <div id="blogPost">
      {opened2 === true && (
        <div onClick={hideArticle2} id="closePost">
          <i id="closeSymbol" className="fa fa-window-close"></i>
        </div>
      )}
      <h3>Watering the seed</h3>
      <p id="previewText">
        Philosophies for life-long learning, web design for our creative lives,
        and my current challenges this week.
      </p>
      <p id="blogDate">12 March, 2021 </p>
      {opened2 === false && ( <img class="blogPreviewImg" src={plants}></img>)}
      {opened2 === true && (
        <div>
                    <img className="blogPreviewImg" src={plants} alt="spider plant"></img>
          <img className="blogHeadImg" src={seed} alt="spider plant"></img>
          <p>
            <strong>Monday</strong>: What is MySQL?
          </p>{" "}
          <p>
            <strong>Tuesday</strong>: Ok, now you're starting a full stack web
            app on your own with MySQL.
          </p>
          <p>
            <strong>Wednesday</strong>: It's midnight, you just pushed the code
            to GitHub for your first website with a functioning MySQL database.{" "}
          </p>
          <p>
            <strong>Thursday</strong>: Nope, no more SQL, it’s no-SQL now.
          </p>
          <p>
            <strong>Friday</strong>: Now you're making an app with MongoDB, this time in a group of other students all experiencing different levels of success and difficulty with the last week's material. Remember Express and Node from last week?
            You need those in there too.
          </p>
          <p id="break">-. --- .--</p>
          <p>
            The speed and intensity of my fall 2020 coding bootcamp put my
            classmates and I through weeks that looked something like this. The
            curriculum's pace was literally described as "breakneck" in the
            pre-work assignments.
          </p>
          <p>
            Knowing when to slow things down will take you further in the long
            run. These days, I'm in the habit of coding at least a little bit
            every day to continue down the path I started in the fall,
            following the old ABC motto (always-be-coding), with a mindful
            work-life balance. I integrate the websites I create with my own
            hobbies such as music, photography, or visual art. It's easier for
            me to motivate myself to approach complex coding problems when I have a
            motivation for doing so, and my hobbies give me fodder to
            demonstrate what I can do with a website.
          </p>
          <p>
            I split my daily coding between familiar and unfamiliar concepts, so
            I'm watering seeds I've already planted while planting new ones.
            When I'm not in the mood to slog through documentation and
            tutorials, there's always old code to polish up whether it's improving accessibility standards, or just refactoring code to fit best practices and make it most easily readable by other developers. My coding bootcamp
            taught me to work steadily and patiently, and I hope you can see the
            metaphorical connection between the care of plants and the
            disciplinarian bootcamp, although they may seem disparate at
            first.
          </p>
          <p>
            Executing front end designs comes quite naturally to me, and for
            this reason I intend to continue pushing myself outside of my
            comfort zone with new visual technologies other than just CSS. As a
            process of tactile experimentation, developing new UI/UX features
            feels lively to me since I try to write code that mimics interfaces
            I interact with in my everyday life. Whether it’s web design, music,
            or video, I feel especially stimulated working on generative pieces that change
            as I build them, with myself as an actor in a feedback loop.
          </p>
          <ModalImage
            small={zpd}
            large={zpd}
            className="blogImg"
            alt="the zone of proximal development"
          />
          <p>
            Part of my motivation for beginning to code my own{" "}
            <a href="/photography">photo gallery</a> interface is so my work has
            a place to live after I abandon nauseatingly commercialized sites
            like Instagram, which I would argue are just temporary repositories
            for artwork that will not outlast the work itself. In the future,
            when we look at pieces whose creative process was influenced by the
            way the creator was using Instagram, we’ll still have the pieces and
            we won’t be missing the Instagram app itself. Think about how
            influential Vine was on the sub-ten second video format before
            people started creating the same exact style videos on other social
            media platforms. Or, if Bandcamp were to tragically vanish: altough the platform and community aspects would be missed, its visible mark on music in the 2010s would remain evident in the music itself.
          </p>
          <p>
            I would rather feel a sense of community with a smaller group of
            people with names and faces. This sort of network might be hundreds of other humans, but
            maybe not thousands, and definitely not millions. The reason I don't
            pepper all my Instagram captions with <i>#naturephotography
            #exploreminnesota #travel</i> is that, while they are often appropriate
            labels for my photos, they add unnecessary noise and clutter to the
            browsing experience. In addition, if an account follows me and
            they’re following ten times as many accounts as are following
            theirs, I'm skeptical that they're engaging with my work on an
            attentive level. At that point they seem to enjoy using the
            Instagram app more than they enjoy any of the content on it. I plan
            on being a photographer for many more decades, but I have no
            attachment to Instagram.
          </p>
          <p>
            If you're reading this and you need a space to display work that
            isn't polluted with advertisements — I can get you taken care of you
            in a few hours. Maximizing a business's exposure and online presence
            is a different game, but in our creative lives I see value in
            quieter digital spaces more akin to the experience of walking into
            an art gallery with your closest friends.
          </p>
          <p>
            Of course, the extensive user base is the main benefit to promoting
            your work on social media sites. The real achievement of these sites
            is their use of front technologies that can allow the front end to
            communicate with massive back ends of user info, rendering a
            personalized feed for users in seconds. In{" "}
            <a
              href="https://investor.fb.com/investor-news/press-release-details/2021/Facebook-Reports-Fourth-Quarter-and-Full-Year-2020-Results/default.aspx"
              target="_blank"
            >
              2020 investor reports
            </a>
            , Facebook reported 1.84 billion daily active users, and 2.80
            billion monthly active users. I coded this site using the JavaScript
            library <strong><a href="https://reactjs.org/" target="_blank">React.js</a></strong>, which comes open-source from Facebook developers
            (initial release 2013). If you would like a demonstration of a
            simple React feature I configured, click/tap the ZPD picture{" "}
            <i className="fa fa-arrow-up" aria-label="up"></i> or the Okta
            picture <i className="fa fa-arrow-down" aria-label="down"></i> to open image lightbox components.
            When independent developers can create front ends that match
            industry leaders like Facebook, what could this mean for the future
            of digital art and e-commerce? I can't claim to know more at this time about
            how social media behemoths scale up their full stack applications, but I'll be turning this subject over in my mind as I move
            forward in this field.
          </p>
          <p id="break">-. --- .--</p>
          <p>
            In the time between my certification and my first developer
            position, I'm thankful for the chance to deepen my understanding of
            the concepts introduced in bootcamp. I'm also afforded the
            opportunity to choose to take projects that are fulfilling to me.
          </p>
          <p>
            Since January and February, I've been individually coding a website
            for nonprofit employees to coordinate with volunteers on-site for
            their project. The site will respond to a narrow portrait screen
            size for a mobile-first design so it can be accessed anywhere on a
            smartphone. Its use case is a context where volunteers are
            frequently coming and going, so new volunteers will be onboarded
            with helpful information and founding members can stay updated about
            current daily operations.
          </p>
          <p>
            We need a <strong>user authentication</strong> process that is both
            simple for users to sign in to, and for developers to maintain
            behind the scenes, whether that developer is me or someone I pass
            the website to in the future. I'm trying a service called Okta,
            which allows you to grant permissions to users based on roles to
            create “gates” for certain parts of the site, and you can even use
            the same dashboard (<i>pictured below</i>) to manage the same
            users’ access to multiple different websites that you might manage.
            To achieve this, I'm configuring my app with Okta’s user
            authentication service using the npm packages{" "}
            <code>@okta/okta-auth-js</code>, <code>@okta/okta-react</code>, and{" "}
            <code>@okta/okta-signin-widget</code>. <strong><a href="https://www.npmjs.com/get-npm">npm</a></strong> (node
            package manager) is a developer tool I frequently use to integrate
            useful third-party technologies into applications that I’m working
            on. npm is installed with <strong><a href="https://nodejs.org/en/about/">Node.js</a></strong>, a popular
            JavaScript runtime environment. The quality of the documentation on
            npm’s website makes using and managing Node packages very easy for
            me. <span className="mutedBlog">despite the amount of time I've had to spend uninstalling and reinstalling my node packages on to debug my website ╭(◎益◎;)╮</span>
          </p>
            <ModalImage
              small={okta}
              large={okta}
              className="blogImg"
              alt="Okta's developer dashboard"
              hideDownload={true}
            />
          <p>
            The spectrum of permissions on this new website will be useful in a
            context where volunteers and long term employees can be shown
            different amounts of information. I want to avoid an information
            overload for a volunteer only staying for a day or two, but I want
            long term employees to have permissions such as editing documents
            and spreadsheets. Users will be required to sign up for an Okta
            account to use my site, but this can be done in a way where the user
            will never have to leave my website, and they may not ever know
            there was a third-party service involved. In the process, it’s
            beneficial to consider the site experience from a user’s perspective
            although we’re not necessarily just working on the front end of the
            site. Authentication proved to be a challenging topic back in coding
            bootcamp, but it’s one I absolutely must master to make quality full
            stack web applications.
          </p>
          <p id="break">-. --- .--</p>
          <p>
            This Saturday 13 March, I'm mentoring at CoderDojo Twin Cities'
            virtual event this Saturday. CoderDojo is a chapter-based
            organization that holds spaces for kids aged 8-17 to practice guided
            coding. Perhaps it's because we've now all had a year of practice in
            front of our web cams, but I've been pleasantly surprised with
            students' abilities to engage with Scratch and web development
            content in Zoom breakout rooms. Other groups you can mentor with
            include <strong>AppInventor/Thunkable</strong> (mobile app
            development) and <strong>Python</strong>. I believe{" "}
            <strong>Arduino</strong> and <strong>Raspberry Pi</strong> was
            happening pre-pandemic as well. I myself just received my first{" "}
            <a href="https://www.raspberrypi.org/" target="_blank">
              Raspberry Pi
            </a>{" "}
            boards in the mail and I'm excited to learn with them. If you're
            interested in joining me as a volunteer this weekend or at a future event and want to know more,
            please get in touch with me or simply visit their{" "}
            <a href="https://www.coderdojotc.org/about/" target="_blank">
              website
            </a>
          </p>
          <p>
            Thank you for reading, and I hope you're inspired today to take
            another shot at that thing that was causing you such a headache
            yesterday.
          </p>
          <p className="mutedBlog">
            Shoutouts: Thank you kindly to Jane Campbell and Owen Höglund for
            their writing workshop help. The way to get the best possible
            writing, as with coding, is to do it as a team.
          </p>
          
        </div>
      )}
      {opened2 === false && (
        <div id="openPost" onClick={revealArticle2}>
          <i id="arrowSymbol" className="fa fa-arrow-right"></i>
        </div>
      )}
    </div>
  );
}

export default Post2;
