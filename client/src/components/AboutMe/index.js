import React from "react";
import "./style.css";

function AboutMe(props){
    return(
            <div>
        <div class = "bio">
          <h1 class="xxlarge">About Me</h1>
          <img src="images/me.jpg" alt="me" id="self"/>
          <br/>
          <p>I am a full-stack developer coding bootcamp student with the University of Minnesota 
            looking for full time work in information technology or web development. I reside in Minneapolis
            and my ultimate goal is to work in Norway. I've studyied Norwegian since 2018
             and I also have professional experience using Spanish.
          </p>
          <p>My academic background is in sociocultural anthropology, with a focus on the ethnography of sound. In my undergraduate education I took my audio engineering knowledge from music to make sensory ethnography work, or documentaries of human culture focused on the senses. My final project was to record the soundscape of Hidden Falls
            Regional Park in St. Paul, MN, juxtaposing urban noise with nature sound to learn about how people conceive of nature through sound.</p>

          <p>With Hamline University, I had the opportunity to take a 2017 <a href="https://www.hamline.edu/hunewsdetail.aspx?id=4295030203">short course</a> 
            in Siem Reap, Cambodia to learn about the <a href="https://pipersincambodia2017.blogspot.com/">blossoming
            tourist industry</a> around the Angkor temple complex. Another one of my favorite experiences in this field was working with other archaeologists on burial recovery sites around Minnesota, where we recovered disturbed Native American grave sites under the leadership of descendent communities. <a href="https://www.startribune.com/after-3-years-minnetonka-burial-mound-restoration-reaches-completion/456894483/">Here</a> is a news story about one such site I worked on.
          </p>
          <p>
            Thank you for visiting! My web development portfolio, my sound work, and photography can all be found on this site.
          </p>

        </div>
    </div>
    )
}

export default AboutMe;