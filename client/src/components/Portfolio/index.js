import React from "react";
import "./style.css";

function Portfolio(props){
    return(
        <div>
            <h1>web dev portfolio</h1>
            <hr/>
            <div id="portfolioItem">
                    <h3>Weather Dashboard</h3>
                <p>Uses the OpenWeatherMap API to display current weather conditions and a 5-day forecast.</p>
                <a href="https://coryjquirk.github.io/weather-dashboard/"><img class="scrnsht" src="https://camo.githubusercontent.com/e6da6d4a31f4be214047552358b79c9704fb113dd38d37f424e7fb9e76812d62/68747470733a2f2f636f72796a717569726b2e6769746875622e696f2f776561746865722d64617368626f6172642f73637265656e73686f742e504e47" alt="weather dashboard"/></a>
                <p>Deployed app: <a href="https://coryjquirk.github.io/weather-dashboard/">https://coryjquirk.github.io/weather-dashboard/</a></p>
                <p>GitHub repo: <a href="https://github.com/coryjquirk/weather-dashboard">https://github.com/coryjquirk/weather-dashboard</a></p>
            </div>
            <div id="portfolioItem">
                <h3>Ice Cold README Generator</h3>
                <p>Generates a README from the command line by asking you info about yourself and your coding project.</p>
                <a href="images/readme-generator.png"><img class="scrnsht" src="https://coryjquirk.github.io/portfolio/images/readme-generator.png" alt="ice-cold-readme-generator"/></a>
                <p>Deployed app: <a href="https://coryjquirk.github.io/ice-cold-readme-generator/">https://coryjquirk.github.io/ice-cold-readme-generator/</a></p>
                <p>GitHub repo: <a href="https://github.com/coryjquirk/ice-cold-readme-generator">https://github.com/coryjquirk/ice-cold-readme-generator</a></p>
            </div>
            <div id="portfolioItem">
                <h3>Credit Croc</h3>
                <p>Gives a visual overview of your credit cards, loans, bills, or repayments.</p>
                <a href="https://hungry-croconaw.herokuapp.com/"><img class="scrnsht" src="https://coryjquirk.github.io/credit-croc/public/assets/img/creditcrocdemo.gif" alt="credit croc demo"/></a>
                <p>Deployed app: <a href="https://hungry-croconaw.herokuapp.com/">https://hungry-croconaw.herokuapp.com/</a></p>
                <p>GitHub repo: <a href="https://github.com/coryjquirk/croconaw-squad">https://github.com/coryjquirk/croconaw-squad</a></p>
            </div>
            <div id="portfolioItem">
                <h3>What's Cooking?</h3>
                <p>Helps you find recipes based on the ingredients you have at home, and shows nearby grocery stores.</p>
                <a href="https://coryjquirk.github.io/whats-cookin/"><img class="scrnsht" src="https://coryjquirk.github.io/whats-cookin/screenshot.PNG" alt="whats cookin"/></a>
                <p>Deployed app: <a href="https://coryjquirk.github.io/whats-cookin/">https://coryjquirk.github.io/whats-cookin/</a></p>
                <p>GitHub repo: <a href="https://github.com/coryjquirk/whats-cookin">https://github.com/coryjquirk/whats-cookin</a></p>
            </div>
            <div id="portfolioItem">      
                <h3>eat Borgus</h3>
                <p>Silly silly app that I made to practice ORM file structures and using remotely hosted MySQL database. Uses Handlebars.js to render HTML.</p>
                <a href="https://cryptic-woodland-16959.herokuapp.com/"><img class="scrnsht" src="https://coryjquirk.github.io/burger/public/assets/img/screenshot.PNG" alt="burger"/></a>
                <p>Deployed app: <a href="https://cryptic-woodland-16959.herokuapp.com/">https://cryptic-woodland-16959.herokuapp.com/</a></p>
                <p>GitHub repo: <a href="https://github.com/coryjquirk/burger">https://github.com/coryjquirk/burger</a></p>
            </div>
            <div id="portfolioItem">
                <h3>Password Generator</h3>
                <p>Generates a random and secure password consisting of symbols, numbers, and letters.</p>
                <a href="https://coryjquirk.github.io/password-generator/"><img class="scrnsht" src="https://coryjquirk.github.io/portfolio/images/password-generator.png" alt="password generator"/></a>
                <p>Deployed app: <a href="https://coryjquirk.github.io/password-generator/">https://coryjquirk.github.io/password-generator/</a></p>
                <p>GitHub repo: <a href="https://github.com/coryjquirk/password-generator">https://github.com/coryjquirk/password-generator</a></p>
            </div>
            <div id="portfolioItem">
                <h3>Daily Planner</h3>
                <p>Calendar app for scheduling your work day.</p> 
                <a href="https://coryjquirk.github.io/daily-planner/"><img class="scrnsht" src="https://coryjquirk.github.io/portfolio/images/daily-planner.png" alt="daily planner"/></a>
                <p>Deployed app: <a href="https://coryjquirk.github.io/daily-planner/">https://coryjquirk.github.io/daily-planner/</a></p>
                <p>GitHub repo: <a href="https://github.com/coryjquirk/daily-planner">https://github.com/coryjquirk/daily-planner</a></p>
            </div>
            <div id="portfolioItem">
                <h3>This personal website</h3>
                <p>The one you're looking at now was built and styled by me using React.js. &#9996;</p>
                <p>GitHub repo: <a href="https://github.com/coryjquirk/portfolio">https://github.com/coryjquirk/portfolio</a></p>
            </div>
        </div>
    )
}

export default Portfolio;