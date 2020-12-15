import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Favicon from "./favicon.ico.png"

function Footer() {
  const [store] = useStoreContext();

  return (
    <div class="footer">
        <p>
            <a href="https://www.instagram.com/coryquirk/" class ="fa fa-instagram"></a>
            <a href="https://www.linkedin.com/in/cory-quirk/" class="fa fa-linkedin"></a>
            <a href="https://www.flickr.com/photos/152958688@N03/" class="fa fa-flickr"></a>
            <a href="https://www.github.com/coryjquirk" class="fa fa-github"></a>
            <span id="cuteMorse">.- .-.. -- --- ... -  - .... . .-. .</span>©2020
            <a href="https://coryjquirk.herokuapp.com/"><img id="footerFavicon" src={Favicon} alt="favicon"/></a>
        </p>
    </div>
    );
}

export default Footer;