import React, { useState, useEffect } from "react";
import "./style.css";
import fieldrecording from "./fieldrecording.jpg";
import BandcampCard from "../BandcampCard"
// import SoundPhotos from "../SoundPhotos";

function Sound(){
    const [fictionMode, setFictionMode] = React.useState(true);
    const [nonfictionMode, setNonfictionMode] = React.useState(false);
    function setFiction(){
        setFictionMode(true)
        setNonfictionMode(false)
    }
    function setNonfiction(){
        setNonfictionMode(true)
        setFictionMode(false)
    }

    return(
        <div>
            <h1>sound </h1>
            <hr/>
            {/* <div id="soundOrganizer">
                <button class="tabs" id="fiction" onclick={setFiction}><span>fiction</span></button> 
            
            <button class="tabs" id="nonfiction" onclick={setNonfiction}><span>nonfiction</span></button></div> */}
            <BandcampCard/>
            <img src={fieldrecording} id="fieldRecording" alt="field recording"></img>
        </div>
    )
}

export default Sound;