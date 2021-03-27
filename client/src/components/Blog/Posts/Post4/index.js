import React, { useState } from "react";
import mainPico from "./main.jpg";
import before from "./before.jpg";
import button from "./button.gif";
import after from "./after.jpg";
import "./style.css";

import ModalImage from "react-modal-image";

function Post3() {
  const [opened, openArticle] = useState(false);

  function revealArticle() {
    openArticle(true);
  }
  function hideArticle() {
    openArticle(false);
  }
  return (
    <div id="blogPost">
      {opened === true && (
        <div onClick={hideArticle} id="closePost">
          <i id="closeSymbol" class="fa fa-window-close"></i>
        </div>
      )}
      <h3>Soldering with the Raspberry Pi Pico microcontroller</h3>
      <p id="previewText">Expecting, making, and fixing mistakes</p>
      <p id="blogDate">26 March, 2021 </p>
      {opened === false && <img id="chipsPreview" src={mainPico}></img>}
      {opened === true && (
        <div>
            <img class="blogHeadImg" id="sedona" src={mainPico}></img>

          <p>
            The{" "}
            <a
              href="https://www.raspberrypi.org/products/raspberry-pi-pico/"
              target="_blank"
            >
              Raspberry Pi RP2040
            </a>{" "}
            (Pico) costs just $4 per board as a new 2021 addition to their line
            of products. From this microcontroller, you can build circuits to
            sense outside stimuli or control other parts in the device you're
            building. Microcontrollers play an important hidden role in modern
            technology for their ability to store small amounts of code for
            dedicated functions in consumer electronics. They consume little
            power and give their device a low-cost "brain," but they process
            slowly and do not use memory as contrasted with a full-fledged PC
            that contains a microprocessor (your AMD or Intel CPU).
          </p>
          <p>
            This sounded like a great opportunity for my first computer
            soldering project. In order to get electricity flowing in and out of
            the microcontroller from the breadboard it's sitting on, I needed to
            securely connect GPIO (general purpose input/output) pins so
            electricity can flow in and out. The first few pins were not
            promising and I applied way too much solder. The board also came out
            with a few burn marks to give it some character.
          </p>
          <p>
            I live with a chronic autoimmune neuromuscular condition called
            {" "}<a
              href="https://www.mayoclinic.org/diseases-conditions/transverse-myelitis/symptoms-causes/syc-20354726#:~:text=Transverse%20myelitis%20is%20an%20inflammation,nerves%20send%20throughout%20the%20body."
              target="_blank"
            >
              transverse myelitis
            </a>{" "}
            that makes it difficult to keep steady hands when using fine motor
            skills. I had to be extra careful to stabilize both of my hands and
            I got a couple of small soldering iron burns before I found the
            right position. I'm also not the target demographic for this product
            and someone with smaller hands would have an easier time. When I
            told my dad about this project, he mentioned that his mother spent
            some years performing soldering work at an electronics company in
            Hibbing, Minnesota.
          </p>
          <ModalImage
            small={before}
            large={before}
            className="blogImg"
            alt="Pico board before the carnage"
            hideDownload={true}
          />{" "}
          <p>
            As I went I learned to clean up my mistakes by re-heating leftover
            chunks of unwanted solder with the iron and scraping them off of the
            GPIO pin. My breadboard suffered some damage and in the future I'll
            set up a shield to protect it, plus with more practice I'll teach
            myself to go easier with the quantity of solder.
          </p>
          <p>
            Here's a demo of a simple "LED button press" circuit, with
            MicroPython code written with the Thonny Python IDE on Raspberry Pi.
            You can choose to program the Pico with a low-level language like C, or else{" "}
            <a href="https://micropython.org/" target="_blank">
              MicroPython
            </a>
            , a Python interpreter written in C specifically for application in
            microcontrollers.{" "}
          </p>
          <ModalImage
            small={button}
            large={button}
            className="blogImg"
            alt="Pico LED blink circuit"
            hideDownload={true}
          />
          <p>
            Part of me was expecting some kind of fiery explosion or lightning
            strike when I gave electricity to my first soldering job, but so far
            so good. For $4 a board there's not a ton at risk. In an industrial context where a microcontroller is needed for each device in production, I'm
            sure there are much cheaper boards than the Pico that have just the bare minimum amount
            of features.
          </p>
          <p>
            The Pico seems like an ideal product for learners already familiar
            with the Raspberry Pi platform to get started with microcontrollers.
            I'm working with{" "}
            <a href="https://circuitpython.org/" target="_blank">
              CircuitPython
            </a>
            , a derivative forked from MicroPython, for a Nordic Semiconductor
            nRF52840 board from Sparkfun. I'll write about that more soon, but
            so far I'm happy to have programmed simple tasks on the SparkFun
            board like basic LED controls and initiating a basic bluetooth
            connection with my smartphone.
          </p>
          <ModalImage
            small={after}
            large={after}
            className="blogImg"
            alt="Pico after soldering"
            hideDownload={true}
          />
          <p>
            When taking pictures of this process, I was asking myself whether
            this soldering job was really worthwhile to show online. By the end
            of the project, I changed my question: would a student be open to
            the possibility of making mistakes in front of me if I were trying
            to teach them? Looking forward to getting more practice with
            soldering as I build more complex circuits.
          </p>
          <p className="mutedBlog">
            25 is my favorite number. Thank you for all the birthday wishes
            yesterday. It's been a long winter — get out and enjoy the weather!
          </p>
        </div>
      )}
      {opened === false && (
        <div id="openPost" onClick={revealArticle}>
          <i id="arrowSymbol" className="fa fa-arrow-right"></i>
        </div>
      )}
    </div>
  );
}

export default Post3;
