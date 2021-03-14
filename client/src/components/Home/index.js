import React from "react";
import "./style.css";
import { Container } from "../Grid";
import Orange from "./orange.jpg"

function Home() {
  return (
    <Container fluid>
      <div>
        <button
          className="headerNavCollapse"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <h1>welcome</h1>
        </button>
        <h1 class="desktopHeader">welcome</h1>
        <hr className="headHr" />
        <div id="homeMain">
        <div>
          <a href="/portfolio">
            <button className="homeBtns">
              <span>
                <p>web dev portfolio</p>
              </span>
            </button>
          </a><a href="/photography">
            <button className="homeBtns">
              <span>
                <p>photography</p>
              </span>
            </button>
          </a>
          
          <a href="/blog">
            <button className="homeBtns">
              <span>
                <p className="muted">blog</p>
              </span>
            </button>
          </a>
          <a href="/contact">
            <button className="homeBtns">
              <span>
                <p className="muted">contact me</p>
              </span>
            </button>
          </a>
          
        </div>
        </div>
        
      <img
            src={Orange}
            className="footBanner"
            alt="Montana"
          ></img>
      </div>
      <p className="mutedBlog" id="theseMine">all photos are mine unless otherwise stated or readily apparent.</p>

    </Container>
  );
}

export default Home;
