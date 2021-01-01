import React, { useState, useEffect } from "react";
import "./style.css";

function SoundEthCard(){
    return(
        <div class="meat">
            <div>
                <p class="soundcaption">This work is in the tradition of sound ethnography — anthropological approaches to soundscapes exploring how human culture is expressed and communicated through sound.</p>
                <div class="bcBtnDiv">
                    <a href="https://coryjquirk.bandcamp.com/" target="_blank" class="bcBtn"><button>Bandcamp page <i class="fa fa-bandcamp"></i></button></a>
                </div>
                <div class="bcEmbedererer">
                <iframe id="bcEmbed" src="https://bandcamp.com/EmbeddedPlayer/album=599617772/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://coryjquirk.bandcamp.com/album/hidden-falls-installation" target="_blank">Hidden Falls installation by Cory J. Quirk</a></iframe>
                </div>
            </div>
        </div>
    )
}

export default SoundEthCard;