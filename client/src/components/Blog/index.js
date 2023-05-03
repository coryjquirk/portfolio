import React, { useState } from "react";
import "./style.css";
import self from "./self.jpg";
import Post1 from "./Posts/Post1";
import Post2 from "./Posts/Post2";
import Post3 from "./Posts/Post3";
import Post4 from "./Posts/Post4";
import Post5 from "./Posts/Post5";
import Post6 from "./Posts/Post6";
import Post7 from "./Posts/Post7";
import Post8 from "./Posts/Post8";
import Post9 from "./Posts/Post9"

function Blog() {
  return (
    <div>
      <div id="headContainer">
        <h1 className="header">blog</h1>
      </div>
      <hr className="headHr" />
      <div id="blog">
        <div>
          <div>
            <Post9/>
            <Post8/>
            <Post7/>
            <Post6/>
            <Post5/>
            <Post4/>
            <Post3/>
            <Post2/>
            <Post1/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
