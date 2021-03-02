import React, { useState, useEffect } from "react";
import "./style.css";
import fieldrecording from "./fieldrecording.png";
import wsBanner from "./watershed-banner.png";
import BandcampCard from "../BandcampCard";
import SoundEthCard from "../SoundEthCard";

function Sound() {
  const [fictionMode, setFictionMode] = useState();
  const [nonfictionMode, setNonfictionMode] = useState(true);
  function setFiction() {
    setFictionMode(true);
    setNonfictionMode(false);
  }
  function setNonfiction() {
    setNonfictionMode(true);
    setFictionMode(false);
  }
  const openedStyle = {
    display: 'flex'
  };
  const closedStyle = {
    display: 'none'
  };
  return (
    <div>
      <h1>sound</h1>
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
        <p class="bannerCredit">
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
      {nonfictionMode === true && (
        <p class="bannerCredit"id="fieldRec">
          Photo: <a href="https://en.wikipedia.org/wiki/Hidden_Falls_(Saint_Paul,_Minnesota)" target="_blank">Hidden Falls Regional Park</a> (St. Paul, MN)
        </p>
      )}
      {fictionMode === true && (
        <div id="theatre" style={fictionMode ? openedStyle : closedStyle}>
        <iframe id="ytEmbed" src="https://www.youtube.com/embed/bMVVMJbBPrs?start=1242">
        </iframe>
        <p>lorem ipsum</p>
        </div>
      )}
  
    </div>
  );
}

export default Sound;
