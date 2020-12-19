import React, { useState, useEffect } from "react";
import "./style.css";

function BandcampCard(props) {
  const [fictionMode, setFictionMode] = React.useState(true);
  const [nonfictionMode, setNonfictionMode] = React.useState(false);
  function setFiction() {
    setFictionMode(true);
    setNonfictionMode(false);
  }
  function setNonfiction() {
    setNonfictionMode(true);
    setFictionMode(false);
  }
  return (
    <div class="meat">
      <div id="noiseMusic">
        <p class="soundcaption">
          In group improvisation with{" "}
          <a href="https://watershedgroup.bandcamp.com/">Watershed Group</a>, we
          like to use samples and field recordings with noisy live
          instrumentation and electronics. A highlight has been been playing at{" "}
          <a href="http://dronenotdrones.com/">Drone Not Drones</a>.
        </p>
        <div class="bcBtnDiv">
          <a href="https://watershedgroup.bandcamp.com/" class="bcBtn">
            <button>
              Bandcamp page <i class="fa fa-bandcamp"></i>
            </button>
          </a>
        </div>
        <div class="bcEmbedererer">
          <iframe
            id="bcEmbed"
            src="https://bandcamp.com/EmbeddedPlayer/album=1907407206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=889048691/transparent=true/"
            seamless
          >
            <a href="https://drone-not-drones.bandcamp.com/album/drone-not-drones-the-7th-annual-28-hour-drone-minneapolis-2020">
              DRONE NOT DRONES: the 7th annual 28​-​hour drone, Minneapolis 2020
              by Drone Not Drones
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default BandcampCard;
