import React from "react";
import "./style.css";

function AboutMe(props){
    return(
        <div>
          <h1>about me</h1>
          <hr/> 
          <div class="meat">
            <a href="/contact"><img id="self" src="https://coryjquirk.github.io/portfolio/images/me.jpg" alt="me" id="self"/></a>
            <br/>
            <p>I'm a full-stack web developer looking for full time remote work and small project work. I built this website to display my web development projects, film photography, and sound work. <a href="/contact">Over here</a> you can find my LinkedIn profile, resumé, and my GitHub page to see projects I'm coding.
              </p>
              <p id="break">-. --- .--</p>
              <h3>work and academics</h3>
              <p>I earned a full-stack web development certification in Fall 2020 from the University in Minnesota. With a background in anthropology and archaeology, I'm looking to bring experience in cross-cultural work to the tech world. I have professional experience using Spanish and I've also studied Norwegian since 2018.</p> 
              <p>With Hamline University, a highlight of my undergrad education was a 2017 <a href="https://www.hamline.edu/hunewsdetail.aspx?id=4295030203" target="_blank">short course </a> 
              in Siem Reap, Cambodia about the blooming
              tourist industry around the Angkor temple complex. Another formative experience in anthro was working with other archaeologists on burial recovery sites around Minnesota, where we restored disturbed Native American grave sites under the leadership of descendent communities. <a href="https://www.startribune.com/after-3-years-minnetonka-burial-mound-restoration-reaches-completion/456894483/" target="_blank">Here</a> is a Star Tribune article about one such site I worked on. In my independent research, I studied the phenomenon of noise pollution — the resulting sound works can be found <a href="sound">over here</a>.</p>
              <p>Right now I'm excited to get started in tech, and I'm especially excited about technology's power to expand creativity and democratize information.</p> 
              <p>Thank you for visiting! I am open to work and taking on new projects.</p>
          </div>
          <div class="ghostDiv"></div>
        </div>
    )
}

export default AboutMe;