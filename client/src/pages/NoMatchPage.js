import React from "react";
import { Container } from "../components/Grid";
const NoMatch = () => {
  return (
    <div className="mainBody">
      <h1>404 page not found</h1>
      <h1>
        <span role="img" aria-label="Thinking Face Emoji">
          🤔
        </span>
      </h1>
      <p>
        Expecting something different on this page? Please{" "}
        <a href="/contact">email me</a> to report an issue
      </p>
      <a id="returnHome" style={{ textAlign: "left" }} href="/home">
        <p>Return home</p>
      </a>
    </div>
  );
};

export default NoMatch;
