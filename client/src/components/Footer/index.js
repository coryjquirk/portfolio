import React from "react";
import "./style.css";
import Favicon from "./favicon.png";

function Footer() {
  return (
    <div className="footer">
      <a href="https://coryjquirk.herokuapp.com/">
        <img id="footerFavicon" src={Favicon} alt="favicon" />
      </a>
      2021<span id="cuteMorse">.- .-.. -- --- ... - - .... . .-. . </span>
      <a
        href="https://www.instagram.com/coryquirk/"
        className="fa fa-instagram"
      ></a>
      <a
        href="https://www.linkedin.com/in/cory-quirk/"
        className="fa fa-linkedin"
      ></a>
      <a
        href="https://www.flickr.com/photos/152958688@N03/"
        className="fa fa-flickr"
      ></a>
      <a href="https://www.github.com/coryjquirk" className="fa fa-github"></a>
    </div>
  );
}

export default Footer;
