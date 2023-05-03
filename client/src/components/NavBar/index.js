import React, { useRef } from "react";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-light">
      <a href="/">cory j. quirk</a>
      <a href="portfolio">portfolio</a>
      <a href="blog">blog</a>
    </nav>
  );
}

export default NavBar;