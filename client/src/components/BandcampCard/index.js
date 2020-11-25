import React from "react";
import "./style.css";

function BandcampCard(props){
    return(
        <div class="meat" id="bandcampcard">
            <iframe id="bcEmbed" src="https://bandcamp.com/EmbeddedPlayer/album=3091619907/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://watershedgroup.bandcamp.com/album/watershed-trek-pacific-nw-january-2018">watershed trek (pacific nw january 2018) by watershed group</a></iframe>
            <p>Group improvisation is done as Watershed Group (rotating members)</p>
            <p>We like to use samples and field recordings along with live instrumentation and analog electronics. Musically we take from noise, drone, ambient, and free jazz</p>
            <iframe id="bcEmbed" src="https://bandcamp.com/EmbeddedPlayer/album=1907407206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=889048691/transparent=true/" seamless><a href="https://drone-not-drones.bandcamp.com/album/drone-not-drones-the-7th-annual-28-hour-drone-minneapolis-2020">DRONE NOT DRONES: the 7th annual 28​-​hour drone, Minneapolis 2020 by Drone Not Drones</a></iframe>
            <p>Sound ethnography and field recording work is released under my own name</p>
            <iframe id="bcEmbed" src="https://bandcamp.com/EmbeddedPlayer/album=599617772/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://coryjquirk.bandcamp.com/album/hidden-falls-installation">Hidden Falls installation by Cory J. Quirk</a></iframe>
        </div>
    )
}

export default BandcampCard;