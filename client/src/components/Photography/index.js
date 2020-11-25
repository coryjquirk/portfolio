import React from "react";
import ModalImage from "react-modal-image";
import "./style.css";

function Photography(props){
    return(
        <div>
            <h1>photography</h1>
            <hr/>
            <p>Click an image to open a larger version. Visit me on <a href="https://www.flickr.com/photos/152958688@N03/">Flickr</a> and <a href="https://www.instagram.com/coryquirk/">Instagram</a>.</p>
            <div class="thumbnail">
                <ModalImage small={`https://coryjquirk.github.io/portfolio/images/kulen.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/kulenlarge.jpg`}
                alt="phnom kulen"/> 
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/palisade.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/palisadelarge.jpg`}
                alt="palisade head"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/monastery.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/monasterylarge.jpg`}
                alt="stone shop"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/mpls.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/mplslarge.jpg`}
                alt="minneapolis"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/dennplants.png`}
                large={`https://coryjquirk.github.io/portfolio/images/large/dennplants.png`}
                alt="denn plants"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/charlie.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/charlielarge.jpg`}
                alt="charlie frog"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/tort.png`}
                large={`https://coryjquirk.github.io/portfolio/images/large/tortlarge.png`}
                alt="tortoises"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/keanu.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/keanularge.jpg`}
                alt="pit stop"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/black-birds.png`}
                large={`https://coryjquirk.github.io/portfolio/images/large/black-birdslarge.png`}
                alt="black birds"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/caves.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/caveslarge.jpg`}
                alt="apostle islands"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/stoneshop.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/stoneshoplarge.jpg`}
                alt="stone shop"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/tuktuk.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/tuktuklarge.jpg`}
                alt="tuk tuk"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/carkeek.png`}
                large={`https://coryjquirk.github.io/portfolio/images/large/carkeeklarge.jpg`}
                alt="carkeek park"
                />
            </div>
            <div class="thumbnail">
                <ModalImage id="thumbnail" small={`https://coryjquirk.github.io/portfolio/images/charliebike.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/charliebikelarge.jpg`}
                alt="charlie bike"
                />
            </div>
        </div>
    )
}

export default Photography;