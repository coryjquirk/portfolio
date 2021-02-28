import React from "react";
import "./style.css";
import { Container } from "../Grid";

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
        <hr class="headHr" />
        <div class="meat">
          <a href="/portfolio">
            <button class="homeBtns">
              <span>
                <p>web development portfolio</p>
              </span>
            </button>
          </a>
          <a href="/contact">
            <button class="homeBtns">
              <span>
                <p>contact me</p>
              </span>
            </button>
          </a>
          <a href="/photography">
            <button class="homeBtns">
              <span>
                <p class="muted">photography</p>
              </span>
            </button>
          </a>
          <a href="/sound">
            <button class="homeBtns">
              <span>
                <p class="muted">sound work</p>
              </span>
            </button>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Home;
