import React from "react";
import "./style.css";
import Resume from "./coryquirk-resume.pdf";
import CoverLetter from "./coryquirk-coverletter-apr2021.docx";
import Seagull from "./seagull.jpg"
import { Container } from "../Grid";

function Contact() {
  return (
    <div>
    <Container fluid>
    <div id="contact">
      <button
        className="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>connect</h1>
      </button>
      <h1 className="desktopHeader">connect</h1>
      <hr className="headHr" />
      <div className="meat">
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
        <a href={CoverLetter} target="_blank">
          <button className="contactBtns">
            <span>
              <p id="resume">
                Cover Letter <i className="fa fa-file"></i>
              </p>
              <p id="docx">(downloads docx)</p>
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
          <button className="contactBtns">
            <span>
              <p id="phoneNum">six one two, 716,</p>
              <p id="phoneNum"> twentyfour eighty five
              </p>
            </span>
          </button>
      </div>
      
    </div>
    </Container>
    <img
            src={Seagull}
            className="footBanner"
            alt="Seagull Lake BWCA"
          ></img>
                <p className="mutedBlog" id="theseMine">all photos are mine unless otherwise stated or readily apparent.</p>

    </div>
  );
}

export default Contact;
