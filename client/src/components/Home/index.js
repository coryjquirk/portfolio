import React from "react";
import "./style.css";
import { Container } from "../Grid";
import Orange from "./orange.jpg"

function Home() {
  return (
    <Container fluid>
      <div id="contact">
        <button
          class="headerNavCollapse"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <h1>welcome</h1>
        </button>
        <h1 class="desktopHeader">welcome</h1>
        <hr className="headHr" />
        <div class="meat">
          <a href="/portfolio">
            <button class="homeBtns">
              <span>
                <p>web dev portfolio</p>
              </span>
            </button>
          </a><a href="/photography">
            <button class="homeBtns">
              <span>
                <p>photography</p>
              </span>
            </button>
          </a>
          
          <a href="/blog">
            <button class="homeBtns">
              <span>
                <p class="muted">blog</p>
              </span>
            </button>
          </a>
          <a href="/contact">
            <button class="homeBtns">
              <span>
                <p class="muted">contact me</p>
              </span>
            </button>
          </a>
          
        </div>
        <img
            src={Orange}
            id="juniperBanner"
            class="soundBanner"
            alt="Montana"
          ></img>
      </div>
    </Container>
  );
}

export default Home;
