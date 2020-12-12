import React from "react";
import "./style.css";

function AboutMe(props){
    return(
        <div>
          <h1>about me</h1>
          <hr/> 
          <div class="meat">
            <img id="self" src="https://coryjquirk.github.io/portfolio/images/me.jpg" alt="me" id="self"/>
            <br/>
            <p>I'm a full-stack web developer and a University of Minnesota coding bootcamp student looking for full time work. I built this website to display my web development projects, film photography, and sound art work. On the <a href="/contact">contact page</a> you can find my LinkedIn profile, resume, and my GitHub page to see projects I've coded.
              </p>
              <p id="break">-. --- .--</p>
              <h3>work and academics</h3>
              <p>I reside in Minneapolis, Minnesota and my ultimate goal is to work in Norway. I've studied Norwegian since 2018
              and I also have professional experience using Spanish. During my undergrad education in anthropology, I brought audio engineering knowledge from music to make sensory ethnography work, or documentaries of human culture focused on the senses.</p>

            <p>With Hamline University, I took a 2017 <a href="https://www.hamline.edu/hunewsdetail.aspx?id=4295030203">short course </a> 
              in Siem Reap, Cambodia about the blooming
              tourist industry around the Angkor temple complex. Another formative experience in anthro was working with other archaeologists on burial recovery sites around Minnesota, where we restored disturbed Native American grave sites under the leadership of descendent communities. <a href="https://www.startribune.com/after-3-years-minnetonka-burial-mound-restoration-reaches-completion/456894483/">Here</a> is a news story about one such site I worked on.</p>
              <p>Since archaeology I've gained eighteen months of experience in supply chain logistics. Right now I'm excited to get started in tech, and I'm especially excited about technology's power to expand creativity and democratize information.</p> 
              <p>Thank you for visiting! I am open to work and taking on new projects.</p>
          </div>
        </div>
    )
}

export default AboutMe;