import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import hero from "./hero.png";

const heroStyle = {
    width: '100%'
}

function Hero() {
  const [store] = useStoreContext();

  return (
        <img src={hero} alt="hero" id="hero" style={heroStyle}></img>
    );
}

export default Hero;