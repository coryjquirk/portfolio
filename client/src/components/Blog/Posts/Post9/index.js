import React, { useState } from "react";
import ModalImage from "react-modal-image";
import "./style.css";

const desters =
  "https://res.cloudinary.com/dgwzirogr/image/upload/v1650584671/frontendSBA/dester_tomatoes_bxyh90.jpg";
const hoophouse =
  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651950185/portfolio-blog/22-05-07/hoophouse_mnvhlj.jpg";
const erd =
  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651950902/portfolio-blog/22-05-07/capstone-erd.drawio_fybllp.png";
const workflow =
  "https://res.cloudinary.com/dgwzirogr/image/upload/v1651950902/portfolio-blog/22-05-07/capstone_workflow.drawio_mvazvs.png";

export default function Post9() {
  const [opened, openArticle] = useState(false);

  function revealArticle() {
    openArticle(true);
  }
  function hideArticle() {
    openArticle(false);
  }
  return (
    <div className="blogPost" id="post9">
      {opened === true && (
        <a href="#post9">
          <button onClick={hideArticle} className="closePost">
            <i id="closeSymbol" class="fa fa-window-close"></i>
          </button>
        </a>
      )}
      <h3>Java capstone project</h3>
      <p id="previewText">Tomato Farm Spring Boot application</p>
      <p id="blogDate">7 May, 2022</p>
      {opened === false && (
        <img
          className="blogPreviewImg"
          src={desters}
          alt="Dester heirloom tomatoes at Frogtown Farm"
        ></img>
      )}
      {opened === true && (
        <div>
          <img
            className="wideHeader"
            src={desters}
            alt="Dester heirloom tomatoes at Frogtown Farm"
          ></img>
          <p className="mutedBlog">
            Dester heirloom tomatoes at Frogtown Farm
          </p>
          <p>
            Hi all, I just wanted to post a brief update upon finishing my full
            stack Java development bootcamp last week.
          </p>
          <p>
            After submitting my capstone project based on{" "}
            <a href="https://spring.io/projects/spring-boot" target="_blank">
              Spring Boot
            </a>{" "}
            for my final grade, I presented my capstone project to senior
            developers at Optum, the company I will begin contract work with in
            a couple weeks from now.
          </p>
          <p>
            The concept I came up with is a tomato farm app whose use case is
            management of farm plots of varying cultivation styles and their
            tomato plants of various varieties (heirloom, cherry, slicer, etc).
          </p>
          <p>
            I developed the concept loosely off of the <a href="https://github.com/coryjquirk/farm-companion" target="_blank">Farm Companion</a> app I
            developed last year, however, I was given the creative freedom to
            design the app to be feasibly finished in the allotted time frame
            and so that it would meet all the technical requirements for the
            bootcamp capstone project.
          </p>
          <ModalImage
            small={erd}
            large={erd}
            alt="entity relationship diagram for capstone project"
            hideDownload="true"
          ></ModalImage>
          <div id="break">-. --- .--</div>
          <ModalImage
            small={workflow}
            large={workflow}
            alt="workflow diagram for capstone project"
            hideDownload="true"
          ></ModalImage>
          <p className="mutedBlog">
            <a
              href="https://en.wikipedia.org/wiki/Entity–relationship_model"
              target="_blank"
            >
              Entity relationship
            </a>{" "}
            and{" "}
            <a
              href="https://www.flowmapp.com/features/user-flow-ux-tool"
              target="_blank"
            >
              workflow
            </a>{" "}
            diagrams for my capstone project.
          </p>
          <h3>More technical specifications:</h3>
          <p>Front end:</p>
          <ul>
            <li>JSP pages</li>
            <li>Bootstrap</li>
          </ul>
          <p>Back end:</p>
          <ul>
            <li>SQL</li>
            <li>Spring Security</li>
          </ul>
          <p>
            I began developing the application back in February 2022 with a{" "}
            <a
              href="https://www.geeksforgeeks.org/software-requirement-specification-srs-format/"
              target="_blank"
            >
              system requirement specification (SRS)
            </a>{" "}
            document that outlined use cases and technical requirements to be
            followed. Throughout the bootcamp, I checked in periodically with my
            instructor to ensure satisfactory progress was being made and that
            my project was meeting all requirements and the scope was realistic
            for the pace we were moving at.
          </p>
          <p>
            Originally, my ERD had about twice as many tables encompassing more
            aspects of farm operation such as managing seeds, produce, and
            finances/sales, but I had to narrow the scope to make the app
            completable by the end of April. Part of the reason for this
            narrowing of scope was that I was working on this app totally solo
            rather than on a team of developers where we could delegate smaller
            tasks to different people based on our strengths. However, we had a
            very supportive and collaborative student community in our cohort
            and we simulated scrum standup meetings daily before lecture to
            update each other on the progress of our apps, following the standup
            format of 1. yesterday's progress, 2. current blockers, and 3.
            today's tasks.
          </p>
          <img
            src={hoophouse}
            class="blogImg"
            alt="hoophouse with tomatoes and peppers at Frogtown Farm last season"
          />
          <p className="mutedBlog">
            photo: hoop house with tomatoes and peppers at Frogtown Farm last
            season
          </p>
          <p>
            Some future goals for the app are to expand it to meet more business
            needs of a farm, as well as general improvements.
          </p>
          <p>
            General improvements relate to code quality and security, as well as
            providing 100% test coverage for all the custom methods I created in
            my code to increase the integrity of the app and ensure every small
            piece is working as intended. My new job will touch on the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Spock_(testing_framework)"
              target="_blank"
            >
              Spock
            </a>{" "}
            testing framework (based on{" "}
            <a
              href="https://en.wikipedia.org/wiki/Apache_Groovy"
              target="_blank"
            >
              Groovy
            </a>
            ) for Java which would be used in place of{" "}
            <a href="https://junit.org/junit5/" target="_blank">
              JUnit
            </a>
            .
          </p>
          <p>
            Features I have in mind are making the app more mobile-friendly to
            be used in the field, utilizing map technology with GPS/GIS, and
            possibly even integrating hardware components like sensors for
            gathering crop monitoring data or even controlling watering or
            lights. These are moreso areas of personal interest that will help motivate me 
            to continue working on this app and learning outside of work.
          </p>
          <p>
            I'm spending my downtime between now and starting at Optum
            studying Python as well as some technologies I'll use at my new job.
            Some of those potentially used technologies that I need more
            training on are Azure, Docker, and Kubernetes. Additionally, I want
            to deploy my Java capstone Tomato Farm application with Jenkins.
            Deploying that app requires extra steps beyond just normal static
            HTML/CSS/JS pages because you need a container to provide a Java
            runtime environment. I was granted access to a huge catalog of Udemy
            courses through work which is exciting as well.
          </p>
          <p>
            Lastly in this post, I'll note that I moved the deployment of this
            application from Heroku to{" "}
            <a href="https://www.netlify.com" target="_blank">
              Netlify
            </a>{" "}
            due to Heroku removing the capability for automated deployments from
            GitHub while they investigate a security breach. I highly recommend
            Netlify to deploy a React application, as setup was very minimally
            involved on my part. It was essentially a drag-and-drop operation,
            with one small extra step to configure my React Router URL paths to work
            properly with Netlify.
          </p>
          <p className="mutedBlog">
            Thanks for reading. I'm very much looking forward to getting my
            first work experience as a software developer with Optum and I'm
            very proud of myself and all my classmates for making it through the
            intensive program this spring.
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
