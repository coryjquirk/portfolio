import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";

// import Texture from "./cartographer.png"
// const navStyle = {
//     backgroundImage: `url(${Texture})`,
// };

function Nav() {
  const [store] = useStoreContext();

  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="about">cory j. quirk</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="portfolio">web dev <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="photography">photography <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="sound">sound <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about">about</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact">contact</a>
                </li>
                </ul>
            </div>
            {store.loading ? <a className="navbar-brand ml-auto">loading...</a> : <></>}
        </nav>
    );
}

export default Nav;