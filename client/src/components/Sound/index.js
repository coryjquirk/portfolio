import React from "react";
import "./style.css";
import fieldrecording from "./fieldrecording.jpg";
import BandcampCard from "../BandcampCard"
// import SoundPhotos from "../SoundPhotos";

function Sound(props){
    return(
        <div>
            <h1>sound</h1>
            <hr/> 
            <BandcampCard/>
            <img src={fieldrecording} id="fieldRecording" alt="field recording"></img>
        </div>
    )
}

export default Sound;