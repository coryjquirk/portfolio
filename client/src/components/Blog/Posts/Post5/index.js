import React, { useState } from "react";
import bwca from "./bwca.jpg";
import mongoexample from "./mongoexample.png";
import blogtags from "./blogtags.png";
import atlas from "./mongodbatlas.png";
import nrf from "./nrfconnect.jpg";
import pygif from "./circuitpy.gif";
import "./style.css";

import ModalImage from "react-modal-image";

function Post5() {
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
      <h3>Scaling up my web app's back end</h3>
      <p id="previewText">
        Or maybe creating one where there never really was one.
      </p>
      <p id="blogDate">17 June, 2021 </p>
      {opened === false && <img id="chipsPreview" src={bwca}></img>}
      {opened === true && (
        <div>
          <img class="blogHeadImg" id="sedona" src={bwca}></img>
          <p>
            This post is web development focused and a bit meta, because today I
            want to share new ideas I have for rendering this page itself.
          </p>
          <p>
            My hope is to show my ability for written communication of technical
            concepts with the support of visuals and documentation.
          </p>
          <p>
            Although this blog project will seem elementary to the experienced
            full stack developer, I like to expose my thought process to other
            developers above and beyond my skill level to help me refine certain
            points of its creation.{" "}
          </p>
          <p>
            The Boundary Waters header photo is unrelated, just wanted something
            pretty for you to look at from my trip around Brule Lake last month.
          </p>
          <p>
            A blog is one of the most common types of beginner web app projects,
            so luckily there is no shortage of quality documentation out there. At the end of
            the day though, I find full stack web development so stimulating for
            the ability you have to get your hands in every aspect of a web app
            from its conception as an idea to its realization as a tangible,
            maintainable, and improvable final product.{" "}
          </p>
          <p>
            For the sake of readability and brevity, I'll frequently opt for hyperlinks instead of too many long winded explanations of
            technical terms. Maybe you can pretend you're reading Wikipedia and
            you can go down a couple of interesting rabbit holes.
          </p>
          <p id="break">-. --- .--</p>
          <p>
            My portfolio website currently has a pretty simple backend based on{" "}
            <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank">
              Node.js
            </a>
            , which provides a runtime environment for JavaScript to execute
            continuously without input like user interaction or timed intervals.
            It's shipped off with a{" "}
            <a
              href="https://docs.npmjs.com/cli/v7/configuring-npm/package-json"
              target="_blank"
            >
              package.json
            </a>{" "}
            file that tells the runtime environment which Node packages to
            install in order to make the site function.
          </p>
          <p>
            {" "}
            When you're a new web developer, there's a temptation to slap every
            cool sounding npm package onto your site to play with during
            development, and I've spent a little time going back and pruning
            unused npm packages on this site to increase its speed and reduce
            its size. Heroku, my hosting service, has all of this npm
            information on-hand to build my site and make it run smoothly. Other
            than that, there are no custom defined data queries going on. There
            are, for instance, no forms for users to submit that would
            necessitate a data structure, and requests being made from the
            user's web client from any larger server.
          </p>
          <p>
            All the images, text, HTML, JavaScript, and CSS code needed are all
            bundled with my website, which is fine for a small site. However, as
            I scale up and add more blog posts and photographs, this will
            definitely cause issues for speed and performance. This portfolio
            site can technically be{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs"
              target="_blank"
            >
              downloaded as an app on your device
            </a>{" "}
            (I'm not sure why you'd do this for my portfolio site, but it was a
            way for me to test out an implementation of that feature).
          </p>
          <p>
            A site like Instagram relies on an internet connection to feed
            images to your screen. The images are hosted on the servers that
            site uses and rendered to your feed in real-time without downloading
            onto your local device, hence the Instagram app itself doesn't
            increase in size and begin taking up more phone storage space with
            each new image you view.
          </p>
          <p>
            {" "}
            Now that I've covered the whys for strengthening my portfolio site's
            back end, here are the hows.
          </p>
          <p>
            I'll most likely implement a No-SQL solution called MongoDB to hold
            blog post information. This No-SQL data format was developed in the
            2000s as a common alternative to SQL (structured query language),
            which itself first saw usage in the 1970s and to this day provides
            strict and rigid schemas for strong database architecture. The{" "}
            <a
              href="https://www.mongodb.com/nosql-explained/nosql-vs-sql"
              target="_blank"
            >
              advantage to using No-SQL
            </a>{" "}
            is that it's considered more developer friendly, and in my limited
            experience it is indeed simpler to build code around No-SQL with
            which to manipulate data for the purposes of web applications.
            However, SQL is still an incredibly important developer tool for
            software of a wide range of scales for enterprise and digital
            infrastructure.
          </p>
          <ModalImage
            small={mongoexample}
            large={mongoexample}
            id="mongoexample"
            alt="MongoDB schema"
            hideDownload={true}
          />
          <p className="mutedBlog">
            Example MongoDB document scheme for a blog post. Note that this is
            arranged in{" "}
            <a href="https://en.wikipedia.org/wiki/JSON" target="_blank">
              JSON
            </a>{" "}
            format.{" "}
            <a
              href="https://docs.mongodb.com/manual/core/shell-types/#numberlong"
              target="_blank"
            >
              $numberlong
            </a>{" "}
            encodes the date.
          </p>
          <p>
            Where things will get slightly more complex is when I want to weave
            hyperlinks into my posts' text or place images between paragraphs.
            This is where I foresee React's front end abilities coming into
            play.{" "}
            <a
              href="https://www.w3schools.com/react/react_jsx.asp"
              target="_blank"
            >
              JSX
            </a>{" "}
            allows developers to write HTML using JavaScript code, easing our
            task of programming interactions between the front end and back end.
            In other words, the end-user for the interface of your site can
            create/read/update/delete data without their experience being
            interrupted.{" "}
            <a href="https://en.wikipedia.org/wiki/JQuery" target="_blank">
              jQuery
            </a>{" "}
            is another common but older method of JavaScript usage and{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"
              target="_blank"
            >
              DOM manipulation
            </a>
            . In the case of my site,{" "}
            <a href="https://reactjs.org/" target="_blank">
              React.js
            </a>{" "}
            handles all DOM manipulation.
          </p>
          <p>
            Here is a quick JSX example from W3 schools, showing how JavaScript
            can operate within HTML using curly braces.
          </p>
          <p>
            <code>
              const myelement = React is &#123;5 + 5&#125; times better with
              JSX;
            </code>
          </p>
          <p>
            As you might've guessed, React will render the above code as "React
            is 10 times better with JSX." Since the contents of the curly braces
            can be JavaScript variables and functions, I could use this to
            handle image and hyperlink information coming from a MongoDB object.
          </p>
          <p id="break">-. --- .--</p>
          <p>
            To bring things full circle and back to the front end, here is a
            wireframe of a new front end feature to complement this back end
            expansion. With the information for each blog post already collected
            together neatly, having tags for each post will allow me to expand
            controls for my visitors to arrange and filter blog posts
            themselves. React will smoothly render the new contents of the page
            when the user selects or de-selects a post tag without a full
            refresh necessary.
          </p>
          <ModalImage
            small={blogtags}
            large={blogtags}
            id="blogtags"
            alt="Sorting blog posts by topic with a React UI"
            hideDownload={true}
          />
          <p className="mutedBlog">
            Figma wireframe for the future of this page (Click to enlarge)
          </p>

          <p>
            I created the{" "}
            <a
              href="https://balsamiq.com/learn/articles/what-are-wireframes/"
              target="_blank"
            >
              wireframe
            </a>{" "}
            for this idea with{" "}
            <a href="https://www.figma.com/" target="_blank">
              Figma
            </a>
            . I enjoy this program since it lets you create images with a
            traditional graphics editor interface and later access the CSS for
            those graphics. It allows teams of developers to easily join in on
            brainstorming a visual design for the same project. It would be
            interesting to use Figma with a team of diverse skill sets (e.g. a
            full stack developer, a UI/UX researcher, and a front end designer).
          </p>
          <p>
            Currently, I support my small-scale personal projects with a shared
            MongoDB data cluster that was provided to me through my University
            of Minnesota coding bootcamp. I manage my data clusters with a DBaaS
            dashboard called MongoDB Atlas, and this particular cluster I'm
            using is "sectioned off" from a server farm from AWS called N.
            Virginia (us-east-1).
          </p>
          <ModalImage
            small={atlas}
            large={atlas}
            id="dbAtlas"
            alt="MongoDB Atlas DBaaS"
            hideDownload={true}
          />
          <p className="mutedBlog">MongoDB Atlas no-SQL DBaaS</p>
          <p>
            Cloud computing uses the internet to physically offload the need for
            a dedicated server for a business's computing needs, and I'm excited
            about furthering my understanding of it for the purpose of building
            stronger web applications.
          </p>
          <p>
            Depending on the source, it's reported that AWS (Amazon Web
            Services) currently owns between a third to half of all cloud
            computing on earth. My understanding of this worldwide server
            ecosystem has become somewhat less abstracted from reading in the
            news about blockchain, cryptocurrency, and NFTs (non-fungible tokens
            used to uniquely mint pieces of data such as artwork with a
            blockchain ledger). Much of the environmental controversy around
            these technologies stems from the amount of computing power — and
            therefore literal power consumption and carbon footprint — required
            for the most efficient and constant production of blockchains. The
            idea of this decentralized method of securing data still excites me,
            aside from the craze and greed surrounding cryptocurrency right now.
          </p>
          <p>I apologize for the tangent, back to projects!</p>
          <ModalImage
            small={nrf}
            large={nrf}
            className="nrfConnect"
            alt="Packets of Bluetooth data being sent to my phone at millisecond intervals"
            hideDownload={true}
          />
          <p id="break">-. --- .--</p>
          <p>
            Aside from AWS and Google Cloud, Microsoft Azure is another
            prominent cloud computing service provider. I'm recently learning
            how to use Azure and the support it offers for Internet of Things (
            <a
              href="https://en.wikipedia.org/wiki/Internet_of_things"
              target="_blank"
            >
              IoT
            </a>
            ), sparking ideas about how I could build a GPS "bicycle tracker"
            device. I'll use a SparkFun development board that uses the Nordic
            Semiconductor nRF52840 Bluetooth module, and I'm learning with a
            SparkFun GPS module as well. In addition to programming the
            hardware, I'll also develop a full stack web app for users to
            visualize the geospatial data the device collects.
          </p>
          <p>
            In the gif here, I show the `code.py` file being uploaded to the
            device through USB, then I disconnect it from USB and leave it to
            lithium battery power, at which point the microcontroller
            automatically runs the CircuitPython script on the screen behind it
            and turns on the blue LED when the specified button is pressed. The{" "}
            <a
              href="https://circuitpython.readthedocs.io/en/latest/shared-bindings/digitalio/index.html"
              target="_blank"
            >
              digitalio
            </a>{" "}
            CircuitPython module is utilized to provide basic digital
            input/output support.
          </p>
          <ModalImage
            small={pygif}
            large={pygif}
            className="blogImg"
            alt="SparkFun nRF52840 Bluetooth module running a CircuitPython script."
            hideDownload={true}
          />
          <p>
            I envision being able to carry around this battery powered GPS
            device with me in a backpack, connecting to the device with my phone
            using Bluetooth, and the sensor data will be sent to Azure to be
            processed into meaningful reports such as tables, maps, and graphs
            to display information about measures such as distance travelled or
            speed. A fun tool to use to trace and map bike rides or hikes.{" "}
          </p>
          <p>
            Of course, a GPS tracker is not a novel device idea. Everyone's
            phone does it with Google or Apple Maps. However, completing this
            would represent a lovely synthesis of many concepts from my formal
            development training, as well as several skills I've self-taught
            since my coursework's completion such as coding with Python, circuit
            building, IoT development, cloud service usage, and microcontroller
            programming.
          </p>
          <p className="mutedBlog">
            I hope this post provides a review on old concepts or perhaps a
            greater depth of understanding for those that are newer to you. I
            would love to hear any thoughts or feedback, so feel free to get in
            touch with me via LinkedIn or email.
          </p>
        </div>
      )}
      {opened === false && (
        <div id="openPost" onClick={revealArticle}>
          <i id="arrowSymbol" className="fa fa-arrow-right"></i>
        </div>
      )}
    </div>
  );
}

export default Post5;
