import React from "react";
import "./style.css";

function BandcampCard(props){
    return(
        <div class="meat" id="bandcampcard">
            <iframe id="bcEmbed" src="https://bandcamp.com/EmbeddedPlayer/album=3091619907/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://watershedgroup.bandcamp.com/album/watershed-trek-pacific-nw-january-2018">watershed trek (pacific nw january 2018) by watershed group</a></iframe>
            <p class="soundcaption">In group improvisation with <a href="https://watershedgroup.bandcamp.com/">Watershed Group</a>, we like to use samples and field recordings with live instrumentation and analog electronics. It is noisy.</p>
            <p>A highlight has been been playing at <a href="http://dronenotdrones.com/">Drone Not Drones</a>, an annual event benefitting Doctors Without Borders held at the Cedar Cultural Center in Minneapolis. Over sixty artists blend their sets to play a nonstop 28-hour drone concert.</p>
            <iframe id="bcEmbed" src="https://bandcamp.com/EmbeddedPlayer/album=1907407206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=889048691/transparent=true/" seamless><a href="https://drone-not-drones.bandcamp.com/album/drone-not-drones-the-7th-annual-28-hour-drone-minneapolis-2020">DRONE NOT DRONES: the 7th annual 28​-​hour drone, Minneapolis 2020 by Drone Not Drones</a></iframe>
            <p class="soundcaption"><a href="https://coryjquirk.bandcamp.com/">Sound ethnography and field recording work</a> is released under my own name</p>
            <iframe id="bcEmbed" src="https://bandcamp.com/EmbeddedPlayer/album=599617772/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://coryjquirk.bandcamp.com/album/hidden-falls-installation">Hidden Falls installation by Cory J. Quirk</a></iframe>
        </div>
    )
}

export default BandcampCard;