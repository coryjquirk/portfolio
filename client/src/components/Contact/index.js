import React from "react";
import "./style.css";
import Resume from "./cory-quirk-dec2020resume.pdf";

function Contact(props) {
  return (
    <div id="contact">
      <h1 class="xxlarge">contact me</h1>
      <hr />
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
      <a href={Resume} target="_blank">
        <button class="contactBtns">
          <span>
            <p>
              Resumé <i class="fa fa-file"></i>
            </p>
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
      <a href="https://github.com/coryjquirk" target="_blank">
        <button class="contactBtns">
          <span>
          <p>
              GitHub <i class="fa fa-github"></i>
              </p>
          </span>
        </button>
      </a>
      <div id="contactsGhost"></div>
      </div>
    </div>
  );
}

export default Contact;
