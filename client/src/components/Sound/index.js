import React, { useState, useEffect } from "react";
import "./style.css";
import fieldrecording from "./fieldrecording.png";
import wsBanner from "./watershed-banner.png";
import BandcampCard from "../BandcampCard";
import SoundEthCard from "../SoundEthCard";

function Sound() {
  const [fictionMode, setFictionMode] = React.useState();
  const [nonfictionMode, setNonfictionMode] = React.useState(true);
  function setFiction() {
    setFictionMode(true);
    setNonfictionMode(false);
  }
  function setNonfiction() {
    setNonfictionMode(true);
    setFictionMode(false);
  }

  return (
    <div>
      <h1>sound </h1>
      <hr />
      <div id="soundOrganizer">
        {fictionMode === true && (
          <button class="soundNav" onClick={setNonfiction}>
            <span>&#187;&emsp;real world  </span>
          </button>
        )}
        {nonfictionMode === true && (
          <button class="soundNav" onClick={setFiction}>
            <span>&#187;&emsp;fantasy world </span>
          </button>
        )}
        
      </div>
      {fictionMode === true && <BandcampCard />}
      {nonfictionMode === true && <SoundEthCard />}
      {fictionMode === true && (
        <a href="https://watershedgroup.bandcamp.com" target="_blank">
        <img
          src={wsBanner}
          class="soundBanner"
          alt="wsBanner"
          id="wsBanner"
        ></img> </a>
      )}
      {fictionMode === true && (
        <p id="bannerCredit">
          Photos: Seattle, WA by <a href="http://www.simkinsphotography.com/" target="_blank">Eric Simkins</a>
        </p>
      )}
      {nonfictionMode === true && (
        <a href="https://coryjquirk.bandcamp.com" target="_blank">
        <img
          src={fieldrecording}
          id="fieldRecBanner"
          class="soundBanner"
          alt="field recording"
        ></img></a>
      )}
    </div>
  );
}

export default Sound;
