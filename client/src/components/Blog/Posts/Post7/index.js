import React from 'react';
import farm from "./farm.gif";

export default function index() {
    return (
        <div>
          <h3>Farm Companion app</h3>
          <p>some stuff about the farm app</p>
          <p>
            <ui>
              {" "}
              features:
              <li>yah</li>
              <li>yah</li>
              <li>ooh</li>
            </ui>
          </p>
          <ModalImage
            small={farm}
            large={farm}
            id="blogtags"
            alt="Farm app"
            hideDownload={true}
          />
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsumLorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsumLorem ipsum Lorem ipsum Lorem ipsum{" "}
            <a
              href="https://circuitpython.readthedocs.io/en/latest/shared-bindings/digitalio/index.html"
              target="_blank"
            >
              digitalio
            </a>{" "}
            CircuitPython module is utilized to provide basic digital
            input/output support.
          </p>
          <iframe
            src="https://storymaps.arcgis.com/stories/52354515142b4631a1e09d402743d36e?cover=false"
            id="storyMap"
            title="ArcGISstorymap"
            frameBorder="0"
            allowFullScreen
            allow="geolocation"
          ></iframe>
        </div>
    )
}
