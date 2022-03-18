import React, { useState } from "react";
import pincushion from "./pincushion.jpg";
import charlieoberg from "./charlieoberg.jpg";
import theo from "./theo.jpg";
import ModalImage from "react-modal-image";
import "./style.css";

export default function Post8() {
  const [opened, openArticle] = useState(false);

  function revealArticle() {
    openArticle(true);
  }
  function hideArticle() {
    openArticle(false);
  }
  return (
    <div className="blogPost" id="post8">
      {opened === true && (
        <a href="#post8">
          <button onClick={hideArticle} className="closePost">
            <i id="closeSymbol" class="fa fa-window-close"></i>
          </button>
        </a>
      )}
      <h3>Spring 2022 update</h3>
      <p id="previewText">Java bootcamp, work, and skiing.</p>
      <p id="blogDate">17 March, 2022 </p>
      {opened === false && (
        <img
          className="blogPreviewImg"
          src={pincushion}
          alt="Pincushion Mountain ski trails (Grand Marais, MN)"
        ></img>
      )}
      {opened === true && (
        <div>
          <img
            className="wideHeader"
            src={pincushion}
            alt="Pincushion Mountain ski trails (Grand Marais, MN)"
          ></img>
          <p className="mutedBlog">
            Groomed cross-country ski trails at Pincushion Mountain (Grand
            Marais, MN).
          </p>
          <p>
            I have been immersing myself in a full stack Java developer bootcamp
            for the last six weeks. The course started with software development
            methodologies and SQL before moving into Java. Now we are just
            starting to use the{" "}
            <a href="https://hibernate.org/" target="_blank">
              Hibernate
            </a>{" "}
            ORM, with projects and dependencies being managed through{" "}
            <a href="https://maven.apache.org/" target="_blank">
              Maven
            </a>
            .
          </p>
          <p>
            Most students in the cohort have opted to learn with the{" "}
            <a href="https://www.jetbrains.com/idea/" target="_blank">
              IntelliJ
            </a>{" "}
            code editor, although{" "}
            <a
              href="https://www.eclipse.org/downloads/packages/release/kepler/sr1/eclipse-ide-java-developers"
              target="_blank"
            >
              Eclipse
            </a>{" "}
            is the popular second choice. I personally use IntelliJ because it
            feels slightly more modern and beginner friendly.
          </p>
          <p>
            Our cohort has a strong student community going and we frequently
            share knowledge with each other depending on our strengths and prior
            experience. For example, since I feel pretty comfortable with Git
            due to my practice via personal projects, I created{" "}
            <a href="https://github.com/coryjquirk/gitdemotest" target="_blank">
              this repository
            </a>{" "}
            as a guide and demonstration for my classmates, since we weren't
            able to spend too much time learning it in class.
          </p>
          <p>
            I was working a tech support help desk intake job during the fall
            and winter, but this spring I'm taking full time to pursue Java
            development in preparation for placement with Optum. I love that I'm
            getting a chance to learn alongside a whole group of other students
            rather than just alone, tackling the same problems at the same time.
          </p>
          <p>
            Being that JavaScript is the language I had the most experience with
            prior to this course, there were some habits to break when beginning
            to code in Java. The most obvious first example is always needing to
            declare the datatype for your variables and ensuring your methods
            match accordingly, being that Java is a statically typed language
            rather than dynamically typed like JavaScript or Python. Last year I
            got some good practice to prepare me for this aspect of Java by
            working with some C code through the Harvard CS50 fundamentals
            course.
          </p>
          <p>
            Java was a predecessor and influencer to JavaScript, although
            they're not directly related as programming languages. They do
            certainly play off of each other in many applications though, as
            they will for the capstone of my Java course.
          </p>
          <p>
            With Java's object-oriented nature, you design classes to
            instantiate as objects in other parts of your code from where the
            class's properties were first defined. With how I used the React.js
            framework to code this website, my JavaScript code is broken up into
            reusable parts that are called in another JavaScript file in the
            order that it's meant to render in the web browser in relation to
            other components. This reusability feature of Java also strikes me
            as similar to CSS. When you define the properties CSS selectors as{" "}
            <code>#myCSSid</code> or <code>.myCSSClass</code>, you can reuse
            those identifiers to target certain HTML elements to be styled by
            calling them inside the HTML tag with <code>id="myCSSid"</code> or{" "}
            <code>class="myCSSClass"</code>. I see this as similar in concept to
            the way you write Java classes and interfaces for variables and
            methods to be easily reused.
          </p>
          <p>
            Lastly on the topic of development, I've made one improvement to my
            portfolio site, and that is that I'm now utilizing{" "}
            <a href="https://cloudinary.com/home-3722" target="_blank">
              Cloudinary
            </a>{" "}
            to host some of my photos and reduce the overall size of my app.
          </p>
          <p id="break">-. --- .--</p>
          <h2>Cross-country skiing</h2>
          <p>
            Just a warning, I'm going to talk about skiing for the remainder of
            the blog post.
          </p>
          <p>
            I decided to try the sport for the first time this season for a few
            reasons. I had tried it once as a kid in school, taking skis around
            the soccer field in gym class, but hadn't returned to it since now.
            I already love spending time in the outdoors, but cross-country
            skiing is a great cardio workout compared to regular hiking. Another
            reason is that I tried downhill skiing for the first time this year
            with rental gear at Lutsen Mountains (Lutsen, MN) and I wanted to
            continue skiing in some form but on a tighter budget. I ended up
            choosing classic style as opposed to skating style, since it seemed
            more beginner friendly (although I really want to try skate skiing
            next season).
          </p>
          <img
            src="https://race.teamtelemark.ca/wp-content/uploads/2011/08/ski-camber-pocket1.jpg"
            class="blogImg"
            alt="ski diagram"
          />
          <p>
            Classic style is where your skis remain parallel and you can use
            groomed tracks, whereas skating is more often performed on groom
            corduroy and the pushing motion is similar to ice skating. In
            classic style skiing, the grip comes from some kind of surface on
            the bottom of your skis which, during a stride cycle, is only
            activated when your full body weight is pressed down on the ski
            (which has a strong "camber" or a bend in it). Sometimes the grip is
            achieved with kick wax (or "<strong>klister</strong>" as seen in the
            diagram). In my case, my skis have a "fish scale" grip surface which
            doesn't require regular waxing. Maybe I'll touch up this blog post
            later with a couple gifs to illustrate my understanding of the
            physics behind the diagonal stride classic skiing technique{" "}
          </p>
          <p>
            With cross-country versus downhill (or "alpine"), I just had to
            worry about purchasing skis, boots, bindings, and poles (plus the
            necessary clothing). Buying passes to access state- or
            county-maintained cross-country trails is much cheaper than buying
            season passes or daily lift tickets for local ski hills (and we
            don't have that much available in Minnesota anyways compared to the
            western states).{" "}
          </p>
          <p>
            It's been so much fun exploring{" "}
            <a
              href="https://www.skinnyski.com/trails/ski/listings.asp"
              target="_blank"
            >
              all the different ski trails
            </a>{" "}
            around the Twin Cities. I spent many days at Theodore Wirth Regional
            Park in Golden Valley, MN which has snowmaking trails that are lit
            up at night, making it ideal for going out after work or class. It's
            very common to see high school ski teams training together during
            those hours. Nothing to humble you quite like groups of teenagers
            zooming by you one after another.{" "}
          </p>
          <ModalImage
            small={theo}
            large={theo}
            alt="cross-country skiing at Thedore Wirth Regional Park (Golden Valley, MN)"
            hideDownload="true"
          ></ModalImage>
          <p className="mutedBlog">
            Evening skiing on the lit trails of Theodore Wirth Regional Park
            (Golden Valley, MN)
          </p>
          <p>
            We seem to have a strong cross-country ski racing culture here, with
            internationally known races nearby such as the{" "}
            <a
              href="https://en.wikipedia.org/wiki/American_Birkebeiner"
              target="_blank"
            >
              American Birkebeiner
            </a>{" "}
            (Hayward, WI). This is yet another way that Nordic cultural
            influence has manifested itself in the American midwest. It's been
            fun to also follow the sport on a professional level, with one of
            the most prominent American athletes,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Jessie_Diggins"
              target="_blank"
            >
              Jessie Diggins
            </a>
            , hailing from Afton, MN. After her 2022 silver medal she's now
            officially the most decorated American cross-country skier of all
            time. Historically the world stage has been dominated by the Nordic
            countries.
          </p>

          <p>
            Jared Manninen is one of my favorite YouTube creators so far
            covering cross-country skiing. To paraphrase, he says in a video
            that a reason he loves cross-country skiing is that it gives you a
            sense of freedom during a time of the year when many people are
            feeling trapped indoors. I found that to be totally true in my first
            season. Jared is located in South Lake Tahoe, NV and although he
            covers technical skills in skiing, his videos are mostly focused on
            skiing for leisure and recreational perspective rather than racing.
            This is perfect for where I was at this season, although I'm
            interested in potentially trying a race in the future.
          </p>
          <p>
            <iframe
              width="100%"
              height="350px"
              src="https://www.youtube.com/embed/_egFpCYX7Z8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
          <p>
            Erik Normark based in Sweden is another interesting creator. He
            makes narrative-style videos of backcountry camping trips.
          </p>
          <p>
            <iframe
              width="100%"
              height="350px"
              src="https://www.youtube.com/embed/900j-O6F3h0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
          <p>
            Avenza Maps is a useful mobile app I've found for navigating ski
            trails, since the trail systems usually aren't detailed on Google
            Maps. It superimposes your location over a smaller and more detailed
            map of some area compared to simply using Google Maps or a similar
            general purpose GPS. You can download apps to use offline without a
            cell signal which are provided online by companies or government
            agencies that are calibrated, or "georeferenced" to a GPS grid.
          </p>
          <p>
            <a
              href="https://www.sugarbushtrail.org/ski_maps.php#:~:text=CROSS%20COUNTRY%20SKI,your%20mobile%20phone."
              target="_blank"
            >
              Here
            </a>{" "}
            is an example of a georeferenced map. That one is for the Sugarbush
            trail system in Cook County, MN. The photo below was taken at about
            47.631239, -90.776881. This day was about 0-5 degrees fahrenheit and
            a large snowstorm began as I left to begin my 4-hour drive back
            southeast to Minneapolis. It's been fun to keep a journal of my ski
            days to compare the weather and keep track of things I saw.
          </p>

          <ModalImage
            small={charlieoberg}
            large={charlieoberg}
            id="oberg"
            alt="cross-country skiing at Oberg Lake (Tofte, MN)"
            hideDownload="true"
          ></ModalImage>
          <p className="mutedBlog">
            My friend Charlie at the Sugarbush Trails on Oberg Lake (Tofte, MN)
          </p>
          <p>
            Skinnyski.com has been a great resource for planning ski days as
            well. It's a great source of{" "}
            <a
              href="https://www.skinnyski.com/trails/reports.asp"
              target="_blank"
            >
              user-generated ski trail reports
            </a>{" "}
            accompanied by photos, which is very helpful for planning trips, especially as a beginner
            since I can arrive at a trail and know what conditions to expect
            ahead of time. Many folks use this as a tool to choose the correct
            ski wax based on temperature and snow type. Maybe I'll go deeper
            into the topic of waxing in another post as I learn more.
          </p>
          <p className="mutedBlog">
            Thanks for reading! The ski season has just about come to a close in
            the Minneapolis area since our snow has melted, and I'll be missing
            it dearly and likely will be looking for ways to continue engaging
            with the hobby in the off-season in small ways. I've been keeping a
            log of all my skiing trips this year and I will likely turn them
            into data and do something to aggregate and visualize statistics
            about my trips, so you may see that here in the future.
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
