import React from "react";
import ModalImage from "react-modal-image";
import "./style.css";
import phnomKulen from "./Images/kulen.jpg";
import dennPlants from "./Images/dennplants.png";
let photos = [
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564534/portfolio-large/palisadelarge_ez67xu.jpg",
    alt: "Palisade Head (Lake County, MN)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564532/portfolio-large/lutstarslarge_dsugsh.png",
    alt: "Lutsen, MN - long exposure facing north (January 2021)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564536/portfolio-large/krouchlylarge_xdoqw3.png",
    alt: "Krouch Ly (Prek Toal Bird Sanctuary, Cambodia)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564531/portfolio-large/idaholarge_lmtfbc.png",
    alt: "Idaho-Montana border",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564534/portfolio-large/sedonasammylarge_tajcct.png",
    alt: "Keanu (Sedona, AZ)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564528/portfolio-large/hoodpineslarge_t4ditc.png",
    alt: "Northeast Minneapolis, MN",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564527/portfolio-large/kulenlarge_qz83w9.jpg",
    alt: "Phnom Kulen, Cambodia",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564531/portfolio-large/mplslarge_zybvew.jpg",
    alt: "Minneapolis, MN",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564525/portfolio-large/carkeeklarge_pcasnv.jpg",
    alt: "Carkeek Park (Seattle, WA)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564525/portfolio-large/dennplantslarge_txf4s9.jpg",
    alt: "house plants",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564536/portfolio-large/snowfire-large_opzfck.png",
    alt: "snow / fire",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564524/portfolio-large/charlielarge_lwid39.jpg",
    alt: "Charlie and frog (BWCA)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564537/portfolio-large/tortlarge_d5miol.png",
    alt: "tortoises",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564528/portfolio-large/keanularge_jro7yl.png",
    alt: "pit stop (Washington State)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564535/portfolio-large/owenzekelarge_fcc6en.png",
    alt: "Owen and Zeke (Cascade River, Cook County, MN)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564532/portfolio-large/monasterylarge_talsy3.jpg",
    alt: "monastery (Cambodia)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564527/portfolio-large/fishermenlarge_ezamdn.png",
    alt: "Cambodian fishermen",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564527/portfolio-large/black-birdslarge_bzsejz.png",
    alt: "black birds",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564524/portfolio-large/charliebikelarge_z0widm.jpg",
    alt: "Charlie's bike",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564523/portfolio-large/aidanlarge_cytwfr.jpg",
    alt: "Aidan (St. Paul, MN)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628566477/portfolio-large/seacaves.jpg",
    alt: "Stockton Island (Apostle Islands, Bayfield, WI)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628564536/portfolio-large/stoneshoplarge_umyqcy.jpg",
    alt: "stone shop (Siem Reap, Cambodia)",
  },
  {
    large:
      "https://res.cloudinary.com/dgwzirogr/image/upload/v1628566493/portfolio-large/tuktuk.jpg",
    alt: "tuk tuk (Siem Reap, Cambodia)",
  },
];
//still working on moving the thumbnails to cloudinary.
import tort from "./Images/tort.png";
import blackbirds from "./Images/black-birds.png";
import carkeek from "./Images/carkeek.png";
import stoneshop from "./Images/stoneshop.jpg";
import charliebike from "./Images/charliebike.jpg";
import owenzeke from "./Images/owenzeke.png";
import keanu from "./Images/keanu.png";
import caves from "./Images/caves.jpg";
import tuktuk from "./Images/tuktuk.jpg";
import charlie from "./Images/charlie.png";
import mpls from "./Images/mpls.jpg";
import monastery from "./Images/monastery.jpg";
import palisade from "./Images/palisade.png";
import fishermen from "./Images/fishermen.png";
import aidan from "./Images/aidan.png";
import snowfire from "./Images/snowfire.png";
import hoodPines from "./Images/hoodpines.png";
import idaho from "./Images/idaho.png";
import krouchLy from "./Images/krouchly.png";
import lutstars from "./Images/lutstars.png";
import sedonaSammy from "./Images/sedonasammy.png";

//idea for later: "sort by place" checkbox
//implement lazy loading so the page just loads as you scroll, and
//isn't slowed down having to render all the photos at once
//https://reactjs.org/docs/code-splitting.html
//try this out --->
//https://stackoverflow.com/questions/18483241/random-div-order-on-page-load

function Photography() {

  //pseudocode:
  // for (let i = 0; i < photos.length; i++) {
  //   <ModalImage
  //   id="thumbnail"
  //   small={photos[i].small}
  //   large={photos[i].large}
  //   alt={photos[i].alt}
  //   hideDownload={true}
  //   //add more attributes like
  //   date={photos[i].date}
  //   locationTaken={photos[i].location}
  //   //could make filter controls on the photo gallery to sort by date, location, etc.!!
  // />
  // }


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
      <p>Planning to improve UI features for this page in the future.</p>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${palisade}`}
          large={photos[0].large}
          alt="Palisade Head (Lake County, MN)"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          small={`${lutstars}`}
          large={photos[1].large}
          alt="Lutsen, MN - long exposure facing N"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          small={`${krouchLy}`}
          large={photos[2].large}
          alt="Krouch Ly (Prek Toal Bird Sanctuary, Cambodia)"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          small={`${idaho}`}
          large={photos[3].large}
          alt="Idaho-Montana border"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          small={`${sedonaSammy}`}
          large={photos[4].large}
          alt="Keanu (Sedona, AZ)"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          small={`${hoodPines}`}
          large={photos[5].large}
          alt="Minneapolis, MN"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          small={`${phnomKulen}`}
          large={photos[6].large}
          alt="Phnom Kulen"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${mpls}`}
          large={photos[7].large}
          alt="minneapolis"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${carkeek}`}
          large={photos[8].large}
          alt="carkeek park"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${dennPlants}`}
          large={photos[9].large}
          alt="plants"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${snowfire}`}
          large={photos[10].large}
          alt="snow / fire"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${charlie}`}
          large={photos[11].large}
          alt="Charlie frog"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${tort}`}
          large={photos[12].large}
          alt="tortoises"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${keanu}`}
          large={photos[13].large}
          alt="pit stop"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${owenzeke}`}
          large={photos[14].large}
          alt="Owen and Zeke"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${monastery}`}
          large={photos[15].large}
          alt="monastery"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${fishermen}`}
          large={photos[16].large}
          alt="Cambodian fishermen"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${blackbirds}`}
          large={photos[17].large}
          alt="black birds"
          hideDownload={true}
        />
      </div>
      <div id="lastPhoto" class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${charliebike}`}
          large={photos[18].large}
          alt="Charlie bike"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${aidan}`}
          large={photos[19].large}
          alt="Aidan (St. Paul, MN)"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${caves}`}
          large={photos[20].large}
          alt="Stockton Island (Apostle Islands National Lakeshore, Bayfield, WI)"
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${stoneshop}`}
          large={photos[21].large}
          alt="stone shop (Siem Reap, Cambodia)"
          hideDownload={true}
        />
      </div>
      <div class="thumbnail">
        <ModalImage
          id="thumbnail"
          small={`${tuktuk}`}
          large={photos[22].large}
          alt="tuk tuk (Siem Reap, Cambodia)"
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
