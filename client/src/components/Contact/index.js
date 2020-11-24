import React from "react";
import "./style.css";

function Contact(props){
    return(
      <div class = "contact">

        <h1 class="xxlarge">contact</h1>
        <hr/>
        
        <div id="contact-page">
          <ul>
            <li id="contact-links"><a href="https://www.linkedin.com/in/cory-quirk/">my LinkedIn</a></li>
            <br/>
            <li id="contact-links"><a href="https://github.com/coryjquirk">my GitHub</a></li>
            <br/>
            <li id="contact-links"><a href="assets/cory-quirk-oct2020resume.pdf">my resume (pdf)</a></li>
          </ul>
        </div>
        
          <div>
            <button><a href="mailto:coryjquirk@gmail.com">my email</a></button>
          </div>
          
        </div>
    )
}

export default Contact;