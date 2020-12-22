import { render } from "react-dom";
import React from "react";
import Carousel from "react-image-carousel";
import "./style.css";
import Pic1 from "./img/1.jpeg";
import Pic2 from "./img/2.jpeg";
import Pic3 from "./img/3.jpeg";
import Pic4 from "./img/4.jpeg";
import Pic5 from "./img/5.jpeg";
let images =[
    Pic1, Pic2, Pic3, Pic4, Pic5
];

class FictionCarousel extends React.Component {
  render() {
    return <div className="my-carousel">
    <Carousel images={images} thumb={true} loop={true} />
  </div>;
  }
}

export default FictionCarousel;