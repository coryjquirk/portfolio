import React from "react";
import "./style.css";
import READMEgen from "./Images/readme-generator.png";

function Portfolio(props){
    return(
        <div>
            <h1>web dev portfolio</h1>
            <hr/>
            <div>
            <div id="portfolioItem">
                    <h3>Weather Dashboard</h3>
                <p> Uses the OpenWeatherMap API to display current weather conditions and a 5-day forecast.</p>
                <a href="https://coryjquirk.github.io/weather-dashboard/"><img class="scrnsht" src="https://camo.githubusercontent.com/e6da6d4a31f4be214047552358b79c9704fb113dd38d37f424e7fb9e76812d62/68747470733a2f2f636f72796a717569726b2e6769746875622e696f2f776561746865722d64617368626f6172642f73637265656e73686f742e504e47" alt="weather dashboard"/></a>
                <p>Deployed app: <a class="appLink" href="https://coryjquirk.github.io/weather-dashboard/">~here~</a></p>
                <p>GitHub repo: <a class="appLink" href="https://github.com/coryjquirk/weather-dashboard">~here~</a></p>
            </div>
            <div id="portfolioItem">
                <h3>Password Generator</h3>
                <p>Generates a random and secure password consisting of symbols, numbers, and letters.</p>
                <a href="https://coryjquirk.github.io/password-generator/"><img class="scrnsht" src="https://coryjquirk.github.io/password-generator/images/demo.gif" alt="password generator"/></a>
                <p>Deployed app: <a class="appLink" href="https://coryjquirk.github.io/password-generator/">~here~</a></p>
                <p>GitHub repo: <a class="appLink" href="https://github.com/coryjquirk/password-generator">~here~</a></p>
            </div>
            <div id="portfolioItem">
                <h3>Ice Cold README Generator</h3>
                <p>Generates a README from the command line by asking you info about yourself and your coding project.</p>
                <a href="images/readme-generator.png"><img class="scrnsht" src={READMEgen} alt="ice-cold-readme-generator"/></a>
                <p>Deployed app: <a class="appLink" href="https://coryjquirk.github.io/ice-cold-readme-generator/">~here~</a></p>
                <p>GitHub repo: <a class="appLink" href="https://github.com/coryjquirk/ice-cold-readme-generator">~here~</a></p>
            </div>
            <div id="portfolioItem">
                <h3>bud GEt</h3>
                <p>Budget tracker with remote database (MongoDB Atlas) and cache API (IndexedDB).</p>
                <a href="https://calm-anchorage-17785.herokuapp.com/"><img class="scrnsht" src="https://raw.githubusercontent.com/coryjquirk/bud-get/main/bud-get.gif" alt="budget tracker"/></a>
                <p>Deployed app: <a class="appLink" href="https://calm-anchorage-17785.herokuapp.com/">~here~</a></p>
                <p>GitHub repo: <a class="appLink" href="https://github.com/coryjquirk/bud-get">~here~</a></p>
            </div>
            <div id="portfolioItem">
                <h3>Credit Croc</h3>
                <p>Gives a visual overview of your credit cards, loans, bills, or repayments.</p>
                <a href="https://hungry-croconaw.herokuapp.com/"><img class="scrnsht" src="https://coryjquirk.github.io/credit-croc/public/assets/img/creditcrocdemo.gif" alt="credit croc demo"/></a>
                <p>Deployed app: <a class="appLink" href="https://hungry-croconaw.herokuapp.com/">~here~</a></p>
                <p>GitHub repo: <a class="appLink" href="https://github.com/coryjquirk/croconaw-squad">~here~</a></p>
            </div>
            <div id="portfolioItem">
                <h3>What's Cooking?</h3>
                <p>Helps you find recipes based on the ingredients you have at home, and shows nearby grocery stores.</p>
                <a href="https://coryjquirk.github.io/whats-cookin/"><img class="scrnsht" src="https://coryjquirk.github.io/whats-cookin/screenshot.PNG" alt="whats cookin"/></a>
                <p>Deployed app: <a class="appLink" href="https://coryjquirk.github.io/whats-cookin/">~here~</a></p>
                <p>GitHub repo: <a class="appLink" href="https://github.com/coryjquirk/whats-cookin">~here~</a></p>
            </div>
            <div id="portfolioItem">      
                <h3>eat Borgus</h3>
                <p>Silly silly app that I made to practice ORM file structures and using remotely hosted MySQL database. Uses Handlebars.js to render HTML.</p>
                <a href="https://cryptic-woodland-16959.herokuapp.com/"><img class="scrnsht" src="https://coryjquirk.github.io/burger/public/assets/img/screenshot.PNG" alt="burger"/></a>
                <p>Deployed app: <a class="appLink" href="https://cryptic-woodland-16959.herokuapp.com/">~here~</a></p>
                <p>GitHub repo: <a class="appLink" href="https://github.com/coryjquirk/burger">~here~</a></p>
            </div>
            <div id="portfolioItem">
                <h3>Daily Planner</h3>
                <p>Calendar app for scheduling your work day.</p> 
                <a href="https://coryjquirk.github.io/daily-planner/"><img class="scrnsht" src="https://coryjquirk.github.io/daily-planner/images/screenshot.PNG" alt="daily planner"/></a>
                <p>Deployed app: <a class="appLink" href="https://coryjquirk.github.io/daily-planner/">~here~</a></p>
                <p>GitHub repo: <a class="appLink" href="https://github.com/coryjquirk/daily-planner">~here~</a></p>
            </div>
            <div id="portfolioItem">
                <h3>This personal website</h3>
                <p>The one you're looking at now was built and styled by me using React.js. &#9996;</p>
                <p>GitHub repo: <a class="appLink" href="https://github.com/coryjquirk/portfolio">~here~</a></p>
            </div>
            <div id="portfolioItem">
                <h3>My tool kit &#128736;</h3>
                <p>• MERN stack (MongoDB, Express.js, React.js, Node.js)</p>
                <p>• Back end: MySQL, IndexedDB, and no-SQL databases</p>
                <p>• Front end: Bootstrap, HTML, CSS, JavaScript</p>
                <p>• GitHub and Heroku for deployment, group collaboration, and version control</p>
                <p>• Agile and mobile-first web dev methodology</p>
            </div>
            </div>
        </div>
    )
}

export default Portfolio;