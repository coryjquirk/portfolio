import React, { useState } from "react";
import chips from "./chips.jpg";
import fade from "./fade.gif";
import arduino from "./arduino.PNG";
import porchpi from "./porchpi.jpg";
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
    <div className="blogPost" id="post3">
      {opened === true && (
        <a href="#post3">
          <button onClick={hideArticle} className="closePost">
            <i id="closeSymbol" class="fa fa-window-close"></i>
          </button>{" "}
        </a>
      )}
      <h3>Adventures in hardware</h3>
      <p id="previewText">
        My first impressions of the Raspberry Pi 4 and Arduino Uno as learning
        tools, plus other cute hardware.
      </p>
      <p id="blogDate">17 March, 2021 </p>
      {opened === false && <img id="chipsPreview" src={chips}></img>}
      {opened === true && (
        <div>
          <div id="chipsBread">
            {" "}
            <ModalImage
              small={chips}
              large={chips}
              alt="Sparkfun GPS and Bluetooth modules, plus a Raspberry Pi Pico on a breadboard."
              hideDownload={true}
            />
          </div>
          <p>
            There was a time when I wondered why people so often write guides or
            reviews on a product after using it for only a few days, but I later
            realized the value of putting fresh eyes on the product to learn
            more about the user experience. To use educational tools like the
            ones pictured here, we must consider what the untrained user will
            see and do upon their first interaction with these devices.
          </p>
          <p>
            I picked up two boards from Micro Center, a{" "}
            <strong>Raspberry Pi 4</strong> and an <strong>Arduino Uno</strong>,
            with a couple of basic accessories like a case and touch screen for
            the Pi and a student build kit for the Arduino. I will include links
            to the less common technologies I discuss, as to not take up too
            much space with definitions.
          </p>
          <p>
            The day I spent on Sunday with the Raspberry Pi left me more
            confident executing unfamiliar commands in the terminal, and I got
            exposure to package installers like <strong>sudo</strong> and{" "}
            <strong>pip</strong>. <strong>npm</strong> made an appearance as
            well. I learned how to use{" "}
            <a href="https://cmake.org/" target="_blank">
              CMake
            </a>{" "}
            and a C++ library called{" "}
            <a href="https://www.wxwidgets.org/" target="_blank">
              wxWidgets
            </a>{" "}
            to build applications in the Raspbian OS, since software
            installation is not as simple as running an .exe file like you would
            on an OS like Windows.
          </p>
          <ModalImage
            small={porchpi}
            large={porchpi}
            className="blogImg"
            alt="Porch Pi!"
            hideDownload={true}
          />{" "}
          <p>
            The fact that you have a self-contained computer that doesn't
            contain any of your personal information removes many of the
            inhibitions you may feel performing similar work with your personal
            computer. I feel less pressure about bricking my machine or breaking
            physical components since they're so cheap, although nothing like
            that has happened yet. I built a gaming PC last year (the perfect
            quarantine gift to myself) and the setup of the Pi was very simple
            in comparison. It would give the unexperienced builder a hands-on
            understanding of the fundamental parts of a computer before moving
            to a bigger and more expensive project.
          </p>
          <p>
            Another takeaway is that Pi is a great way for someone to start
            really working with Python right away. I have self-taught education
            about the syntax of Python, but haven't implemented it in a project
            yet. Setting up a development environment to work with a new
            language such as Python can be an involved process for someone new
            to computing concepts. There is additionally great documentation and
            support communities online for the Pi's software and hardware.
          </p>
          <p>
            I picked up a 4-microphone array part for the Pi, which I can use
            for voice recognition AI as an alternative to Amazon or Google voice
            prompt products. This device also opens up possibilities for spatial
            recognition of sound. I'm interested in pairing this with a
            quadraphonic sound system and creatively processing the feedback
            with the Pi, which could be integrated into a generative musical
            gallery piece or sound installation. Pictured below is software
            called{" "}
            <a href="https://github.com/introlab/odas_web" target="_blank">
              ODAS
            </a>{" "}
            that allows you to visualize the microphone inputs.
          </p>
          <ModalImage
            small={
              "https://raw.githubusercontent.com/introlab/odas_web/master/screenshots/live_data.png"
            }
            large={
              "https://raw.githubusercontent.com/introlab/odas_web/master/screenshots/live_data.png"
            }
            id="odas"
            alt="ODAS"
            hideDownload={true}
          />
          <div id="break">-. --- .--</div>
          <p>
            I am totally new to the Arduino platform and would love project
            suggestions. I got a kick out of this{" "}
            <a
              href="https://interestingengineering.com/get-ready-summer-diy-cooler-follows"
              target="_blank"
            >
              robot cooler
            </a>{" "}
            that detects your location with Bluetooth and follows you around
            with cold drinks.
          </p>
          <p>
            Here is a basic sketch called "Fade" for the Arduino written in{" "}
            <strong>C++</strong>. It came as an out-of-the-box example in the
            Arduino IDE and it includes a link to helpful documentation to guide
            you through. If you're unfamiliar to coding, you might try giving
            this code a quick scan to see how the code is controlling the
            voltage to the LED light. Helpful comments are provided on lines
            that begin with <code>//</code>.
          </p>
          <p className="mutedBlog">
            hjertelig takk to{" "}
            <a
              href="https://github.com/konrad91/OneDarkArduino"
              target="_blank"
            >
              {" "}
              Konrad Johan Jenssen (konrad91)
            </a>{" "}
            from Norway for the Dark Mode theme{" "}
          </p>
          <ModalImage
            small={arduino}
            large={arduino}
            id="ardIDE"
            alt="Arduino IDE"
            hideDownload={true}
          />
          <div id="break">-. --- .--</div>
          <p className="mutedBlog">click images to expand</p>
          <ModalImage
            small={fade}
            large={fade}
            className="blogImg"
            alt="fade"
            hideDownload={true}
          />
          <p>
            Executing this code is as easy as plugging in the Arduino to your
            PC, selecting the appropriate port for your board, and clicking the
            "upload" button.
          </p>
          <p>
            My first project with the Arudino is to create a battery powered
            device that can connect to Bluetooth on my phone and track my
            location with GPS to learn more about the hardware, radio
            frequencies, and Bluetooth protocols. Such a device when interfaced
            with a native iOS/Android app could see usage in archaeology,
            agriculture, and supply chain logistics. To build this I've first
            spent some time with a{" "}
            <a
              href="https://learn.sparkfun.com/tutorials/sparkfun-pro-nrf52840-mini-hookup-guide?_ga=2.84936081.922453400.1615777478-1636573948.1614811084"
              target="_blank"
            >
              Sparkfun board
            </a>{" "}
            board for the{" "}
            <a
              href="https://www.nordicsemi.com/Products/Low-power-short-range-wireless/nRF52840"
              target="_blank"
            >
              Nordic Semiconductor nRF52840
            </a>
            . I purchased a{" "}
            <a
              href="https://www.raspberrypi.org/documentation/rp2040/getting-started/"
              target="_blank"
            >
              Raspberry Pi Pico
            </a>{" "}
            as well which could serve as a controller for the Arduino modules.
            The GPS module I'm going to use is a SparkFun <a>XA1110</a>. As a
            side note I love the miniature QR code [pictured at the head of this
            post]. It scans to reveal a two letter and twelve digit code that
            might be the serial number if I had to guess.
          </p>
          <p>
            The portability of these devices is their biggest asset. I recall
            hearing kids at my high school talk about working with Arduino for
            projects in robotics or science olympiad. I can imagine how easy it
            is on teachers for their students to be able to carry one of these
            units in their backpack with a container of circuitry building
            tools. Similarily, the Raspberry Pi can be connected to a large HDMI
            display, house with a small touch screen, or you could have none of
            this and just use it to make colorful LED displays. I want to
            continue seeing artists find more uses for these, if nothing else
            but for my own enjoyment.
          </p>
          <p>
            I got a positive first impression of these devices and I'm excited
            to share my thoughts with you today. I hope to use my experience
            with these devices to help kids and adults feel more comfortable
            approaching technology.
          </p>
          <p className="mutedBlog">
            Thanks for reading. Please contact me with any
            corrections or curiosities. I encourage you to channel the DIY
            spirit and think about uses these devices could serve in your home
            or daily life, and any project you dream of would be a great
            introduction to coding and building simple hardware. If you're a
            junior developer, I especially think you will find this exploration
            beneficial as a way to quickly broaden your horizons.
          </p>
        </div>
      )}
      {opened === false && (
        <button className="openPost" onClick={revealArticle}>
          <i id="arrowSymbol" className="fa fa-arrow-right"></i>
        </button>
      )}
    </div>
  );
}

export default Post3;
