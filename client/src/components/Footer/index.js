import React from "react";
import "./style.css";
import Favicon from "./favicon.png";

function Footer() {
  return (
    <div class="footer">
      <p>
        <a href="https://coryjquirk.herokuapp.com/">
          <img id="footerFavicon" src={Favicon} alt="favicon" />
        </a>
        ©2020<span id="cuteMorse">.- .-.. -- --- ... - - .... . .-. . </span>
        <a
          href="https://www.instagram.com/coryquirk/"
          class="fa fa-instagram"
        ></a>
        <a
          href="https://www.linkedin.com/in/cory-quirk/"
          class="fa fa-linkedin"
        ></a>
        <a
          href="https://www.flickr.com/photos/152958688@N03/"
          class="fa fa-flickr"
        ></a>
        <a href="https://www.github.com/coryjquirk" class="fa fa-github"></a>
      </p>
    </div>
  );
}

export default Footer;
