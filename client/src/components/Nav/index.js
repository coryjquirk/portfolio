import React, { useRef } from "react";
import "./style.css";

function Nav() {
  // svg spiral: https://stackoverflow.com/questions/49091970/how-to-make-a-spiral-in-svg
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="theNav">
      <a className="navbar-brand" href="/home">
        cory j. quirk
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="portfolio">
              portfolio <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="blog">
              blog
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="photography">
              photography <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">
              connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
