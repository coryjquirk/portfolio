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
            <p>I'm a full-stack web developer and a University of Minnesota coding bootcamp student looking for full time work. On this site you can find some of my web dev work, film photography, and sound art work.
              </p>
              <p id="break">-. --- .--</p>
              <p>I reside in Minneapolis, MN and my ultimate goal is to work in Norway. I've studied Norwegian since 2018
              and I also have professional experience using Spanish. During my undergrad education in anthropology, I took my audio engineering knowledge from music to make sensory ethnography work, or documentaries of human culture focused on the senses. My final project was to record the soundscape of Hidden Falls
              Regional Park in St. Paul, MN, juxtaposing urban noise with nature sound to learn about how people conceive of nature through sound.</p>

            <p>With Hamline University, I had the opportunity to take a 2017 <a href="https://www.hamline.edu/hunewsdetail.aspx?id=4295030203">short course </a> 
              in Siem Reap, Cambodia to learn about the blossoming
              tourist industry around the Angkor temple complex. Another one of my favorite experiences in this field was working with other archaeologists on burial recovery sites around Minnesota, where we recovered disturbed Native American grave sites under the leadership of descendent communities. <a href="https://www.startribune.com/after-3-years-minnetonka-burial-mound-restoration-reaches-completion/456894483/">Here</a> is a news story about one such site I worked on.
            </p>
            <p>
              Thank you for visiting and take care!
            </p>
          </div>
        </div>
    )
}

export default AboutMe;