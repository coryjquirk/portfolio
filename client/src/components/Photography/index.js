import React from "react";
import ModalImage from "react-modal-image";
import "./style.css";

function Photography(props){
    return(
        <div>
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