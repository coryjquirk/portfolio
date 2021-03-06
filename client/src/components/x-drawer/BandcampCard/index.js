import React, { useState, useEffect } from "react";
import "./style.css";

function BandcampCard(props) {
  return (
    <div className="meat">
      <div>
        <p className="soundcaption">
          In group improvisation with{" "}
          <a href="https://watershedgroup.bandcamp.com/"  target="_blank">Watershed Group</a>, we
           use samples and field recordings with noisy live
          instrumentation and analog electronics. A highlight has been been playing at{" "}
          <a href="https://youtu.be/aXBY8A8nBLY?t=18820" target="_blank">Drone Not Drones</a>.
        </p>
        <ul>        <li><a href="#theatre" id="theatreLink">#theatre</a></li>
</ul>
        <div className="bcBtnDiv">
          <a href="https://watershedgroup.bandcamp.com/" target="_blank" class="bcBtn">
            <button className="standardButton">
              Bandcamp page&ensp;<i className="fa fa-bandcamp"></i>
            </button>
          </a>
        </div>
        <div className="bcEmbedererer">
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
