import React from "react";
import "./style.css";

function Contact(props) {
  return (
    <div class="contact">
      <h1 class="xxlarge">contact me</h1>
      <hr />
      <button class="contactBtns"><span>Resume (PDF) <i class="fa fa-file"></i></span></button>
      <button class="contactBtns">
        <span>LinkedIn <i class="fa fa-linkedin"></i></span></button>
        <button class="contactBtns ">
        <span>Email <i class="fa fa-envelope"></i></span>
      </button>
      <button class="contactBtns"><span>GitHub <i class="fa fa-github"></i></span></button>
    </div>
  );
}

export default Contact;
