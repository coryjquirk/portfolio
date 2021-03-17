import React, { useState, useEffect } from "react";
import "./style.css";

function SoundEthCard() {
  return (
    <div class="meat">
      <div>
        <p class="soundcaption">
          <p>
            This work is in the tradition of sound ethnography — an
            anthropological approach to soundscapes to explore how human culture
            is expressed and communicated through sound.
          </p>
          <p>
            At Hamline University, I engineered live sound for two sound
            installation events where visitors were presented with recordings
            from Hidden Falls Regional Park in St. Paul, MN, a place I took
            interest in for its soundscape's mixture of <i>natural</i> sounds
            and aircraft noise. In the second of these I was joined for an improvisational take on the soundscape by percussionists Matt Sumera and Josh Gumiela.
          </p>
        </p>
        <div class="bcBtnDiv">
          <a
            href="https://coryjquirk.bandcamp.com/"
            target="_blank"
            class="bcBtn"
          >
            <button class="standardButton">
              Bandcamp page&ensp;<i class="fa fa-bandcamp"></i>
            </button>
          </a>
        </div>
        <div class="bcEmbedererer">
          <iframe
            id="bcEmbed"
            src="https://bandcamp.com/EmbeddedPlayer/album=599617772/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          >
            <a
              href="https://coryjquirk.bandcamp.com/album/hidden-falls-installation"
              target="_blank"
            >
              Hidden Falls installation by Cory J. Quirk
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default SoundEthCard;
