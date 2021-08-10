import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import currants from "./currants.jpg";
import ssd from "./ssd.jpg";
import koans from "./koans.png";
import malan from "./malan.jpg";
import "./style.css";
import ModalImage from "react-modal-image";

function Post6() {
  const [opened, openArticle] = useState(false);

  function revealArticle() {
    openArticle(true);
  }
  function hideArticle() {
    openArticle(false);
  }
  const codeString1 =
    "string myMessage = 'hello world!'; \nprintf('My : %s', myMessage);";
  const codeString2 =
    "var myMessage = 'hello world!'; \nalert('My message: ' + myMessage);";

  return (
    <div className="blogPost" id="post6">
      {opened === true && (
        <a href="#post6">
          <button onClick={hideArticle} className="closePost">
            <i id="closeSymbol" class="fa fa-window-close"></i>
          </button>
        </a>
      )}
      <h3>
        Recent learnings with Linux, Ruby, Harvard CS50, Azure, and Nextcloud
      </h3>
      <p id="previewText">
        "You have not yet reached enlightenment. I sense frustration. Do not be
        afraid to ask for help." -Ruby Koans
      </p>
      <p id="blogDate">20 July, 2021 </p>
      {opened === false && (
        <img
          className="blogPreviewImg"
          src={currants}
          alt="orange currant berries"
        ></img>
      )}
      {opened === true && (
        <div>
          <img
            className="wideHeader"
            src={currants}
            alt="orange currant berries"
          ></img>
          <p className="mutedBlog">Orange currant berries (St. Paul, MN)</p>
          <p>
            In this post, I'll cover some new computer science and software
            development topics I've been working through in the past month.
            They're slightly scattered subjects, but what they all have in
            common is they're all commonly requested areas of knowledge for
            entry level developer candidates.
          </p>
          <p>
            Admittedly, one of the greatest challenges as a job seeker is
            finding incentive to produce "deliverable" projects. (who am I
            delivering to? for what payment? with what deadline?)
          </p>
          <p>
            As a singular person without a team to support me or a leader to
            guide me, any project I complete in my free time is the result of my
            own efforts and the combination of particular skills I have at the
            time. Until I acquire some of my first on-the-job developer
            experience, I'm primarily after whatever practical skills training
            that will get me there.
          </p>
          <p>
            My mantra remains ~ what I lack in experience and qualifications as
            a job candidate, I make up for in a drive to learn.
          </p>
          <p>
            All that being said, in my next post, I'll 
            present a MERN stack app that I completed this spring to address a
            problem faced in real life by a friend and I.
          </p>
          <h3 id="svgLogo">SVG spiral animation</h3>
          <p>
            Here's a new{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/SVG"
              target="_blank"
            >
              SVG
            </a>{" "}
            logo I created for my portfolio site. I'm sticking with the same
            gradient color scheme as I've used for my site's buttons and
            favicon. SVG (scalable vector graphics) images allow us to include
            animations in a web browser that are lighter weight than a GIF or a
            video.
          </p>

          <p>
            <ui>
              <li>
                <a
                  href="https://codepen.io/coryjquirk/pen/JjNNWMJ"
                  target="_blank"
                >
                  CodePen
                </a>{" "}
                if you want to play with the code
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/questions/49091970/how-to-make-a-spiral-in-svg"
                  target="_blank"
                >
                  Stack Overflow thread
                </a>{" "}
                where I got my starter code
              </li>
            </ui>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="250px"
            viewBox="0 0 744 1052"
          >
            <defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="25%" stopColor="#23d5ab" stopOpacity="1.0" />
                <stop offset="75%" stopColor="#aea2db" stopOpacity="1.0" />
              </linearGradient>
            </defs>
            <path
              id="spiral"
              fill="none"
              stroke="url(#linear)"
              d="m351 487c0 8-11 4-14-1-6-11 4-24 15-27 19-5 37 11 40 30 4 27-18 50-44 53-35 4-64-25-66-59-3-42 32-77 73-79 50-3 90 39 92 88 2 57-46 104-102 105-65 2-117-53-119-117-1-72 60-131 131-132 80-1 144 67 145 146 1 87-74 158-160 158-95 0-171-81-171-175 0-102 88-185 190-184 110 1 198 95 197 204C557 615 456 709 340 708 215 706 115 598 117 475 119 342 233 236 364 238 504 240 616 361 614 500 611 648 484 766 337 763 182 760 58 626 61 472 65 309 206 179 367 183c170 4 306 151 302 320-4 178-158 319-335 315"
            />
          </svg>
          <h3 id="linuxMacbook">Linux MacBook</h3>
          <p>
            Last month I successfully installed the Ubuntu operating system on
            my MacBook. This is the Mid-2012 MacBook Pro I bought with my high
            school graduation money in 2014 and it's seen a lot. After a few
            hard drive wipes and fresh OS installations, it was still unusably
            slow and it was stuck on OS X Catalina, no longer supporting the
            newest versions of macOS.
          </p>
          <ModalImage
            className="blogImg"
            small={ssd}
            large={ssd}
            alt="Replacing a MacBook's HDD with an SSD"
            hideDownload={true}
          />
          <p>
            First I made a couple of hardware upgrades.
            <li>
              took out the HDD and replaced it with a{" "}
              <a
                href="https://www.crucial.com/ssd/mx500/ct1000mx500ssd1"
                target="_blank"
              >
                1TB solid state drive.
              </a>
            </li>
            <li>
              replaced sticks of ram:{" "}
              <a href="https://www.crucial.com/memory/ddr3/ct4g3s1339m">
                2x4GB RAM
              </a>{" "}
              to replace the old 2x2GB.
            </li>
          </p>
          <p>
            I'm happy to have gotten some more life out of this laptop with a
            couple relatively inexpensive hardware upgrades.
          </p>
          <p>
            Mac OS X itself was running fast with the new hardware before I installed Ubuntu. The
            installation process for the new operating system simply involved making a bootable USB stick
            with my Windows PC and starting my MacBook in recovery mode.
          </p>
          <h3>Ruby Koans</h3>
          <p>
            I've begun progressing through the{" "}
            <a href="http://rubykoans.com/" target="_blank">
              Ruby Koans
            </a>
            , a repository of files designed to guide you into the Ruby
            programming language via unit testing and edge cases. It gets its
            name from the Zen Buddhist{" "}
            <a href="https://www.britannica.com/topic/koan" target="_blank">
              koan
            </a>
            , "a succinct paradoxical statement or question used as a meditation
            discipline for novices."
          </p>
          <ModalImage
            small={koans}
            large={koans}
            id="koansImg"
            alt="Ruby Koans"
            hideDownload={true}
          />
          <p className="mutedBlog">
            Ruby Koans repository in Visual Studio Code on my new Ubuntu system
          </p>
          <p>
            The way to progress is making small changes to the .rb files
            provided, and console output points you towards the next line of
            code that needs fixing (above,{" "}
            <i>Please meditate on the following code:</i>).
          </p>
          <p>
            Ruby Koans teaches by way of{" "}
            <a
              href="https://smartbear.com/learn/automated-testing/what-is-unit-testing/"
              target="_blank"
            >
              unit testing
            </a>
            , or testing code in a granular manner so that we understand how the
            logic of a small piece of code is functioning.
          </p>
          <p>
            Programmers validate the behavior of code by designing{" "}
            <a href="https://en.wikipedia.org/wiki/Edge_case" target="_blank">
              edge cases
            </a>
            . This way, the code is backed into a logical extreme so that if it
            works in that case, it will work in every other case. The edge case
            might be unlikely in a program's normal operation, but if the case
            is tested ahead of time, then we can be sure of the boundaries
            within which our code operates.
          </p>
          <p>
            The code challenges don't demand a terrible amount of logical
            figuring, however you will need to read Ruby documentation, and
            often you'll need to dig through lines of code and console output to
            find problematic syntax and bugs. I've found this repository to be a
            gentle yet engaging introduction into this programming language.
          </p>
          <p>
            <a href="https://rubyonrails.org" target="_blank">
              Ruby on Rails
            </a>{" "}
            is a web application framework that I plan on approaching after I'm
            finished. Many popular sites were built with Rails, such as GitHub,
            Airbnb, SoundCloud, Hulu, Zendesk, and Square.
          </p>

          <h3>Cloud stuff</h3>
          <a
            href="https://ownyourbits.com/2017/02/13/nextcloud-ready-raspberry-pi-image/"
            target="_blank"
          >
            <img
              src="https://ownyourbits.com/wp-content/uploads/2017/11/ncp-square.png"
              className="blogImg"
              alt="NextCloudPi logo"
            />
          </a>
          <p>
            I successfully deployed a private self-hosted{" "}
            <a href="https://nextcloud.com/athome/" target="_blank">
              NextCloud
            </a>{" "}
            server... for about 30 minutes.
          </p>
          <p>
            I ran a cloud from my Raspberry Pi machine with a static IP address,
            and began uploading content with another PC. However, I mistakenly
            used the Raspberry Pi's 16GB SD card as the storage medium for my
            cloud server, and this quickly filled my card to the brim and I had
            to uninstall NextCloud.{" "}
          </p>
          <p>
            Luckily, I purposely don't save any important information on my Pi
            since I use it as a sandbox learning tool, so I've wiped the entire
            computer to start over.
          </p>
          <p>
            I'm now working through the same process with{" "}
            <a
              href="https://ownyourbits.com/2017/02/13/nextcloud-ready-raspberry-pi-image/"
              target="_blank"
            >
              this image
            </a>{" "}
            from OwnYourBits called <strong>NextCloudPi</strong>, this time
            using a 1TB external HDD as the storage medium for my cloud (instead
            of the same little 16GB SD card carrying my Raspberry Pi's OS and
            data... 🤦).
          </p>
          <p>
            To configure NextCloudPi, I've been following this guide from
            SpaceRex on YouTube:
          </p>
          <p>
            <iframe
              width="350px"
              height="200px"
              src="https://www.youtube.com/embed/5aGKWkGTmAw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
          <p id="break">-. --- .--</p>
          <p>
            Last month, I took a 1-day course that introduced me to core data
            concepts in <strong>Azure</strong> and gave me experience creating
            SQL queries and starting a database with the Azure portal.
          </p>
          <p>
            We got an intro to the different data analysis tools Azure offers,
            as well as different types of roles Azure users can take. It seems
            like an extraordinarily powerful tool for businesses to manage and
            analyze data.
          </p>

          <p>
            This week, I'm completing the 5-day course{" "}
            <a
              href="https://docs.microsoft.com/en-us/learn/certifications/courses/az-204t00"
              target="_blank"
            >
              AZ-204T00-A: Developing solutions for Microsoft Azure
            </a>
            . Students are provided a pre-built lab environment virtual machine
            to complete hands-on exercises, simplifying the setup for working
            with the <strong>.NET Core</strong> stack and{" "}
            <strong>C&#x0023;</strong>. The main focus is usage of Azure
            services and not necessarily programming, although I'm enjoying
            working with C&#x0023; methods and classes.
          </p>
          <p>
            <ui>
              {" "}
              A few topics we've covered thus far:
              <li>Creating and deploying Azure Web Apps</li>
              <li>
                Azure Functions (runtime for small executable chunks of code)
              </li>
              <li>Creating storage containers</li>
              <li>Uploading and accessing objects in blob containers</li>
              <li>Cosmos DB no-SQL storage</li>
            </ui>
          </p>
          <h3>Harvard CS50</h3>
          <div className="blogImg">
            <ModalImage
              small={malan}
              large={malan}
              alt="David J. Malan teaching a Zoom class for Harvard CS50"
              hideDownload={true}
            />
            <p className="mutedBlog">
              David Malan teaching a Zoom class of CS50 students. src:{" "}
              <a href="https://cs.harvard.edu/malan/photos/" target="_blank">
                harvard.edu
              </a>
            </p>
          </div>
          <p>
            I've begun working through the 10 weeks of Harvard CS50 2021 at the
            recommendation of a tech recruiter I spoke with. I'm keeping my code
            in this{" "}
            <a
              href="https://github.com/coryjquirk/harvard-cs50"
              target="_blank"
            >
              GitHub repository
            </a>{" "}
            as I go and I'm considering acquiring an official certification of
            completion.
          </p>

          <p>
            The lectures use the <strong>C</strong> programming language to
            illustrate a connection between the higher level code most humans
            write, lower level machine code, then what's physically happening on
            a computer's hardware, e.g. why an <span id="code">int</span> or{" "}
            <span id="code">string</span> take up more storage bytes than a{" "}
            <span id="code">bool</span> or <span id="code">char</span>, and why
            this code matters when scaling up a program.
          </p>
          <p>
            An exercise in{" "}
            <a
              href="https://cs50.harvard.edu/x/2021/psets/1/credit/"
              target="_blank"
            >
              Week 1's problem set
            </a>{" "}
            was to create a program that validates credit card numbers according
            to the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Luhn_algorithm"
              target="_blank"
            >
              Luhn algorithm
            </a>
            :
          </p>
          <p>
            <ol>
              <li>
                Multiply every other digit by 2, starting with the number’s
                second-to-last digit, and then add those products’ digits
                together.
              </li>
              <li>
                Add the sum to the sum of the digits that weren’t multiplied by
                2.
              </li>
              <li>
                If the total’s last digit is 0 (or, put more formally, if the
                total modulo 10 is congruent to 0), the number is valid!
              </li>
            </ol>
          </p>
          <p>
            {" "}
            My solution for validating the card number entered by the user
            didn't turn out looking the most elegant, but the code has passed
            all the test card numbers I've given it.{" "}
          </p>
          <p>
            So far, I've followed along and completed exercises in the{" "}
            <a href="https://ide.cs50.io/" target="_blank">
              CS50 IDE
            </a>
            , which is really nice for getting a student writing in C right
            away. This browser IDE makes it simpler to teach core concepts like
            compiling programs and importing libraries, plus more broadly
            applicable skills like working in a terminal.
          </p>
          <p>
            For me, an interesting part about coding in C is the static/strong
            typing in comparison with a dynamic/weakly typed language like{" "}
            <strong>JavaScript</strong>. In C, the type of variable (str, int,
            bool, etc.) must be declared upon initializing the variable:
          </p>
          <p>
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeString1}
            </SyntaxHighlighter>
          </p>
          <p>
            Note the <span id="code">%s</span> identifier telling the{" "}
            <span id="code">printf</span> function what type of variable to
            receive (a string in this case). A similar "hello world" program in
            JavaScript looks like this:
          </p>
          <p>
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeString2}
            </SyntaxHighlighter>
          </p>
          <p>
            In JS it's unnecessary to declare the kind of variable in its
            initialization, and line 2 would look the same if{" "}
            <span id="code">myMessage</span> were a number instead of a string.
            Numbers are all treated the same by JavaScript: integers, decimals,
            even{" "}
            <a
              href="https://www.w3schools.com/js/js_numbers.asp"
              target="_blank"
            >
              scientific notation
            </a>
            , contrasting with C's rigid distinction between floats, integers,
            doubles, and longs.
          </p>
          <p>
            JavaScript experienced a significant syntactical update with the
            introduction of <span id="code">const</span> and{" "}
            <span id="code">let</span> with the release of ES6 in 2015. (this
            update also brought{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
              arrow functions
            </a>
            .) These new keywords offer{" "}
            <a
              href="https://www.codecademy.com/courses/introduction-to-javascript/lessons/scope/exercises/block-scope"
              target="_blank"
            >
              block scope
            </a>
            . Once these were introduced in my full stack web development
            course, we were essentially taught to abandon{" "}
            <span id="code">var</span>.
          </p>
          <p>
            I'm surprised at how much this fundamentally shapes the structure of
            the code. (also, I'm still getting used to how much C loves
            semicolons.) <strong>Java</strong> also uses static typing, where{" "}
            <strong>Python</strong> and <strong>Ruby</strong> are examples of
            languages using dynamic typing.
          </p>
          <p className="mutedBlog">
            The goal of this post was to take topics that are new to me and
            present you with the most important points I've gathered from each
            one. Time I spend creating each of these posts is also great front
            end practice. Next time: showcasing a new MERN stack app.{" "}
            <a
              href="https://github.com/react-syntax-highlighter/react-syntax-highlighter"
              target="_blank"
            >
              Syntax Highlighter
            </a>{" "}
            was one new React component I implemented for the C vs. JavaScript
            comparison above.
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

export default Post6;
