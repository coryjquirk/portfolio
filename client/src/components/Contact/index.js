import React from "react";
import "./style.css";
import Resume from "./coryquirk-resume.pdf";
import Seagull from "./seagull.jpg";

function Contact() {
  return (
    <div>
      <button
        className="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>connect</h1>
      </button>
      <h1 className="desktopHeader">connect</h1>
      <hr className="headHr" />
      <div className="mainBody">
        <a href="https://www.linkedin.com/in/cory-quirk/" target="_blank">
          <button className="contactBtns">
            <span>
              <p>
                LinkedIn <i id="linkedIn" className="fa fa-linkedin"></i>
              </p>
            </span>
          </button>
        </a>
        <a href="https://github.com/coryjquirk" target="_blank">
          <button className="contactBtns">
            <span>
              <p>
                GitHub <i className="fa fa-github"></i>
              </p>
            </span>
          </button>
        </a>
        <a href={Resume} target="_blank">
          <button className="contactBtns">
            <span>
              <p id="resume">
                Resumé <i className="fa fa-file"></i>
              </p>
              <p id="docx">(downloads pdf)</p>
            </span>
          </button>
        </a>
        <a href="mailto:coryjquirk@gmail.com" target="_blank">
          <button className="contactBtns">
            <span>
              <p>
                Email <i className="fa fa-envelope"></i>
              </p>
            </span>
          </button>
        </a>

        <img src={Seagull} className="footBanner" alt="Seagull Lake BWCA"></img>
        <p className="mutedBlog" id="theseMine">
          all photos are mine unless otherwise stated or readily apparent.
        </p>
      </div>
      <div className="ghostDiv"></div>
    </div>
  );
}

export default Contact;
