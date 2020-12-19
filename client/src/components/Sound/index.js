import React, { useState, useEffect } from "react";
import "./style.css";
import fieldrecording from "./fieldrecording.jpg";
import wsBanner from "./watershed-banner.png";
import BandcampCard from "../BandcampCard";
import SoundEthCard from "../SoundEthCard";

function Sound() {
  const [fictionMode, setFictionMode] = React.useState();
  const [nonfictionMode, setNonfictionMode] = React.useState(true);
  function setFiction() {
    setFictionMode(true);
    setNonfictionMode(false);
    console.log("fictionMode is true");
  }
  function setNonfiction() {
    setNonfictionMode(true);
    setFictionMode(false);
    console.log("nonfictionMode is true");
  }

  return (
    <div>
      <h1>sound </h1>
      <hr />
      <div id="soundOrganizer">
        {fictionMode === true && (
          <button class="soundNav" onClick={setNonfiction}>
            <span>real world </span>
          </button>
        )}
        {nonfictionMode === true && (
          <button class="soundNav" onClick={setFiction}>
            <span>fantasy world </span>
          </button>
        )}
      </div>
      {fictionMode === true && <BandcampCard />}
      {nonfictionMode === true && <SoundEthCard />}
      {fictionMode === true && (
        <img
          src={wsBanner}
          class="soundBanner"
          alt="wsBanner"
          id="wsBanner"
        ></img>
      )}
      {fictionMode === true && (
        <p id="bannerCredit">
          Photos: <a href="http://www.simkinsphotography.com/">Eric Simkins</a>
        </p>
      )}
      {nonfictionMode === true && (
        <img
          src={fieldrecording}
          id="fieldRecBanner"
          class="soundBanner"
          alt="field recording"
        ></img>
      )}
    </div>
  );
}

export default Sound;
