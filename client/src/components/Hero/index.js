import React from "react";
import hero from "./hero.png";

const heroStyle = {
    width: '100%'
}

function Hero() {

  return (
        <img src={hero} alt="hero" id="hero" style={heroStyle}></img>
    );
}

export default Hero;