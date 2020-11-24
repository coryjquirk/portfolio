import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";

function Footer() {
  const [store] = useStoreContext();

  return (
    <div class="footer">
        <p>
            <a href="https://www.instagram.com/coryquirk/" class ="fa fa-instagram"></a>
            <a href="https://www.linkedin.com/in/cory-quirk/" class="fa fa-linkedin"></a>
            <a href="https://www.flickr.com/photos/152958688@N03/" class="fa fa-flickr"></a>
            <a href="https://www.github.com/coryjquirk" class="fa fa-github"></a>
            ... .. -. --. ©2020 Cory Quirk
        </p>
    </div>
    );
}

export default Footer;