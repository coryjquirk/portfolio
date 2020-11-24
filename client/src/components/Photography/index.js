import React from "react";
import ModalImage from "react-modal-image";
import "./style.css";

function Photography(props){
    return(
        <div>
            <h1>photography</h1>
            <hr/>
            <p>Click an image to open a larger version. Visit me on <a href="https://www.flickr.com/photos/152958688@N03/">Flickr</a> and <a href="https://www.instagram.com/coryquirk/">Instagram</a>.</p>
            <ModalImage small={`https://coryjquirk.github.io/portfolio/images/kulen.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/kulenlarge.jpg`}
                alt="Phnom Kulen"/> 
            <ModalImage small={`https://coryjquirk.github.io/portfolio/images/stoneshop.jpg`}
                large={`https://coryjquirk.github.io/portfolio/images/large/stoneshoplarge.jpg`}
                alt="stone shop"
                />
        </div>
    )
}

export default Photography;