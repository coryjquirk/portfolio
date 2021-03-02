import React from "react";
import "./style.css";
import Resume from "./coryquirk-resume-mar2021.docx";
import CoverLetter from "./coryquirk-coverletter-mar2021.docx";

function Contact() {
  return (
    <div id="contact">
      <button
        class="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>contact me</h1>
      </button>
      <h1 class="desktopHeader">contact me</h1>
      <hr class="headHr" />
      <div class="meat">
        <a href="https://www.linkedin.com/in/cory-quirk/" target="_blank">
          <button class="contactBtns">
            <span>
              <p>
                LinkedIn <i id="linkedIn" class="fa fa-linkedin"></i>
              </p>
            </span>
          </button>
        </a>
        <a href="https://github.com/coryjquirk" target="_blank">
          <button class="contactBtns">
            <span>
              <p>
                GitHub <i class="fa fa-github"></i>
              </p>
            </span>
          </button>
        </a>
        <a href={Resume} target="_blank">
          <button class="contactBtns">
            <span>
              <p id="resume">
                Resumé <i class="fa fa-file"></i>
              </p>
              <p id="docx">(downloads docx)</p>
            </span>
          </button>
        </a>
        <a href={CoverLetter} target="_blank">
          <button class="contactBtns">
            <span>
              <p id="resume">
                Cover Letter <i class="fa fa-file"></i>
              </p>
              <p id="docx">(downloads docx)</p>
            </span>
          </button>
        </a>
        <a href="mailto:coryjquirk@gmail.com" target="_blank">
          <button class="contactBtns">
            <span>
              <p>
                Email <i class="fa fa-envelope"></i>
              </p>
            </span>
          </button>
        </a>
        <a href="mailto:coryjquirk@gmail.com" target="_blank">
          <button class="contactBtns">
            <span>
              <p id="phoneNum">six one two, 716,</p>
              <p id="phoneNum"> two four 85
              </p>
            </span>
          </button>
        </a>
      </div>
      <div id="contactsGhost"></div>
    </div>
  );
}

export default Contact;
