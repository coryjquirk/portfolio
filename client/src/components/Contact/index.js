import React from "react";
import "./style.css";

function Contact(props){
    return(
        <div class="row" class="col-sm">

      <div class = "contact">

        <h1 class="xxlarge">Contact me</h1>
        <hr/>
        
        <div id="contact-page">
          <ul>
            <li id="contact-links"><a href="https://www.linkedin.com/in/cory-quirk/">LinkedIn</a></li>
            <br/>
            <li id="contact-links"><a href="https://github.com/coryjquirk">GitHub</a></li>
            <br/>
            <li id="contact-links"><a href="assets/cory-quirk-oct2020resume.pdf">my resume</a></li>
          </ul>
        </div>
        
          <div id="submit">
            <button class="button"><a href="mailto:coryjquirk@gmail.com">Email me</a></button>
          </div>
          
        </div>
      
  </div>

    )
}

export default Contact;