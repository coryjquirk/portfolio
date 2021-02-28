import React from "react";
import ModalImage from "react-modal-image";
import "./style.css";
import phnomKulen from "./Images/kulen.jpg";
import phnomKulenL from "./Images/large/kulenlarge.jpg";
import dennPlants from "./Images/dennplants.png";
import dennPlantsL from "./Images/large/dennplantslarge.jpg";
import tort from "./Images/tort.png";
import tortL from "./Images/large/tortlarge.png";
import blackbirds from "./Images/black-birds.png";
import blackbirdsL from "./Images/large/black-birdslarge.png";
import carkeek from "./Images/carkeek.png";
import carkeekL from "./Images/large/carkeeklarge.jpg";
import stoneshop from "./Images/stoneshop.jpg";
import stoneshopL from "./Images/large/stoneshoplarge.jpg";
import charliebike from "./Images/charliebike.jpg";
import charliebikeL from "./Images/large/charliebikelarge.jpg";
import owenzeke from "./Images/owenzeke.png";
import owenzekeL from "./Images/large/owenzekelarge.png";
import keanu from "./Images/keanu.png";
import keanuL from "./Images/large/keanularge.jpg";
import caves from "./Images/caves.jpg";
import cavesL from "./Images/large/caveslarge.jpg";
import tuktuk from "./Images/tuktuk.jpg";
import tuktukL from "./Images/large/tuktuklarge.jpg";
import charlie from "./Images/charlie.png";
import charlieL from "./Images/large/charlielarge.jpg";
import mpls from "./Images/mpls.jpg";
import mplsL from "./Images/large/mplslarge.jpg";
import monastery from "./Images/monastery.jpg";
import monasteryL from "./Images/large/monasterylarge.jpg";
import palisade from "./Images/palisade.png";
import palisadeL from "./Images/large/palisadelarge.jpg";
import fishermen from "./Images/fishermen.png";
import fishermenL from "./Images/large/fishermenlarge.png";
import aidan from "./Images/aidan.png";
import aidanL from "./Images/large/aidanlarge.jpg";
import snowfire from "./Images/snowfire.png";
import snowfireL from "./Images/large/snowfire-large.png";
//idea for later: "sort by place" checkbox

//try this out --->
//https://stackoverflow.com/questions/18483241/random-div-order-on-page-load

function Photography(props) {
  return (
    <div id="gallery">
      <button
        class="headerNavCollapse"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <h1>photography</h1>
      </button>
      <h1 class="desktopHeader">photography</h1>
      <hr class="headHr" />
      <p>Click an image to open a larger version.</p>
      <div class="thumbnail">
        <ModalImage
          small={`${phnomKulen}`}
          large={`${phnomKulenL}`}
          alt="phnom kulen"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${palisade}`}
          large={`${palisadeL}`}
          alt="palisade head"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${monastery}`}
          large={`${monasteryL}`}
          alt="monastery"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${mpls}`}
          large={`${mplsL}`}
          alt="minneapolis"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${dennPlants}`}
          large={`${dennPlantsL}`}
          alt="denn plants"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${snowfire}`}
          large={`${snowfireL}`}
          alt="snow fire"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${charlie}`}
          large={`${charlieL}`}
          alt="charlie frog"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${tort}`}
          large={`${tortL}`}
          alt="tortoises"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${keanu}`}
          large={`${keanuL}`}
          alt="pit stop"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${fishermen}`}
          large={`${fishermenL}`}
          alt="fishermen"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${blackbirds}`}
          large={`${blackbirdsL}`}
          alt="black birds"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${aidan}`}
          large={`${aidanL}`}
          alt="aidan"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${caves}`}
          large={`${cavesL}`}
          alt="apostle islands"
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${stoneshop}`}
          large={`${stoneshopL}`}
          alt="stone shop"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${owenzeke}`}
          large={`${owenzekeL}`}
          alt="owen zeke"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${tuktuk}`}
          large={`${tuktukL}`}
          alt="tuk tuk"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${carkeek}`}
          large={`${carkeekL}`}
          alt="carkeek park"
          hideDownload={true}
        />
      </div>
      <div id="lastPhoto" class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${charliebike}`}
          large={`${charliebikeL}`}
          alt="charlie bike"
          hideDownload={true}
        />
      </div>
      <div id="photoSocials">
        <p>
          <a
            href="https://www.flickr.com/photos/152958688@N03/"
            target="_blank"
          >
            <button class="galleryBtn">
              <span>
                Flickr <i class="fa fa-flickr"></i>
              </span>
            </button>
          </a>{" "}
          <a href="https://www.instagram.com/coryquirk/" target="_blank">
            <button class="galleryBtn">
              <span>
                Instagram <i class="fa fa-instagram"></i>
              </span>
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Photography;
