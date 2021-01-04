import React, { useState, useEffect } from "react";
import "./style.css";

function BandcampCard(props) {
  return (
    <div class="meat">
      <div>
        <p class="soundcaption">
          In group improvisation with{" "}
          <a href="https://watershedgroup.bandcamp.com/"  target="_blank">Watershed Group</a>, we
           use samples and field recordings with noisy live
          instrumentation and analog electronics. A highlight has been been playing at{" "}
          <a href="http://dronenotdrones.com/" target="_blank">Drone Not Drones</a>.
        </p>
        <div class="bcBtnDiv">
          <a href="https://watershedgroup.bandcamp.com/" target="_blank" class="bcBtn">
            <button class="standardButton">
              Bandcamp page&ensp;<i class="fa fa-bandcamp"></i>
            </button>
          </a>
        </div>
        <div class="bcEmbedererer">
          <iframe
            id="bcEmbed"
            src="https://bandcamp.com/EmbeddedPlayer/album=1907407206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=889048691/transparent=true/"
            seamless
          >
            <a href="https://drone-not-drones.bandcamp.com/album/drone-not-drones-the-7th-annual-28-hour-drone-minneapolis-2020"  target="_blank">
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
