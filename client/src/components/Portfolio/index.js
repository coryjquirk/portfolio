import React from "react";
import "./style.css";
import READMEgen from "./Images/readme-generator.png";
import weatherdashboard from "./Images/weatherdashboard.gif";
import creditcroc from "./Images/creditcroc.gif";
import cartcroc from "./Images/cartcroc.gif";
import whatscooking from "./Images/whatscooking.gif";

function Portfolio(props){
    return(
        <div>
            <h1>web dev portfolio</h1>
            <hr/>
            <p>Visit me on <a href="https://github.com/coryjquirk">GitHub</a> to see some of the projects I've coded, both solo and collaboratively.</p>
            <div>
            <div id="portfolioItem">
                <h3>Cart Croc</h3>
                <p>Straightforward storefront app designed with independent businesses in mind. Inventory data handled with MongoDB, and user authentication provided with Passport.</p>
                <a href="https://cart-croc.herokuapp.com/"><img class="scrnsht" src={cartcroc} alt="cart croc"/></a>
                <div class="portfBtnDiv">
                    <a href="https://cart-croc.herokuapp.com/" class="portfBtn"><button>Deployed app <i class="fa fa-link"></i></button></a>
                    <a href="https://github.com/coryjquirk/cart-croc" class="portfBtn"><button>GitHub repo <i class="fa fa-link"></i></button></a>
                </div>
            </div>
            <div id="portfolioItem">
                <h3>Credit Croc</h3>
                <p>Gives a visual overview of your credit cards, loans, bills, or repayments. From the team that brought you Cart Croc.</p>
                <a href="https://hungry-croconaw.herokuapp.com/"><img class="scrnsht" src={creditcroc} alt="credit croc demo"/></a>
                
                <div class="portfBtnDiv">
                    <a href="https://hungry-croconaw.herokuapp.com/" class="portfBtn"><button>Deployed app <i class="fa fa-link"></i></button></a>
                    <a href="https://github.com/coryjquirk/credit-croc" class="portfBtn"><button>GitHub repo <i class="fa fa-link"></i></button></a>
                </div>

            </div>
            <div id="portfolioItem">
                <h3>Weather Dashboard</h3>
                <p>Uses the OpenWeatherMap API to display current weather conditions and a 5-day forecast.</p>
                <a href="https://coryjquirk.github.io/weather-dashboard/"><img class="scrnsht" src={weatherdashboard} alt="cart croc"/></a>
                <div class="portfBtnDiv">
                    <a href="https://coryjquirk.github.io/weather-dashboard/" class="portfBtn"><button>Deployed app <i class="fa fa-link"></i></button></a>
                    <a href="https://github.com/coryjquirk/weather-dashboard" class="portfBtn"><button>GitHub repo <i class="fa fa-link"></i></button></a>
                </div>

            </div>
            <div id="portfolioItem">
                <h3>Password Generator</h3>
                <p>Generates a random and secure password consisting of symbols, numbers, and letters.</p>
                <a href="https://coryjquirk.github.io/password-generator/"><img class="scrnsht" src="https://coryjquirk.github.io/password-generator/images/demo.gif" alt="password generator"/></a>
                <div class="portfBtnDiv">
                    <a href="https://coryjquirk.github.io/password-generator/" class="portfBtn"><button>Deployed app <i class="fa fa-link"></i></button></a>
                    <a href="https://github.com/coryjquirk/password-generator" class="portfBtn"><button>GitHub repo <i class="fa fa-link"></i></button></a>
                </div>

            </div>
            
            <div id="portfolioItem">
                <h3>What's Cooking?</h3>
                <p>Helps you find recipes based on the ingredients you have at home, and shows nearby grocery stores.</p>
                <a href="https://coryjquirk.github.io/whats-cookin/"><img class="scrnsht" src={whatscooking} alt="whats cookin"/></a>

                <div class="portfBtnDiv">
                    <a href="https://coryjquirk.github.io/whats-cookin/" class="portfBtn"><button>Deployed app <i class="fa fa-link"></i></button></a>
                    <a href="https://github.com/coryjquirk/whats-cookin" class="portfBtn"><button>GitHub repo <i class="fa fa-link"></i></button></a>
                </div>
            </div>
            <div id="portfolioItem">
                <h3>bud GEt</h3>
                <p>Budget tracker with remote database (MongoDB Atlas) and cache API (IndexedDB).</p>
                <a href="https://calm-anchorage-17785.herokuapp.com/"><img class="scrnsht" src="https://raw.githubusercontent.com/coryjquirk/bud-get/main/bud-get.gif" alt="budget tracker"/></a>
    
                <div class="portfBtnDiv">
                    <a href="https://calm-anchorage-17785.herokuapp.com/" class="portfBtn"><button>Deployed app <i class="fa fa-link"></i></button></a>
                    <a href="https://github.com/coryjquirk/bud-get" class="portfBtn"><button>GitHub repo <i class="fa fa-link"></i></button></a>
                </div>

            </div>
            <div id="portfolioItem">
                <h3>Ice Cold README Generator</h3>
                <p>Generates a README from the command line by asking you info about yourself and your coding project.</p>
                <a href="https://github.com/coryjquirk/ice-cold-readme-generator"><img class="scrnsht" src={READMEgen} alt="ice-cold-readme-generator"/></a>
               
                <div class="portfBtnDiv">
                    <a href="https://github.com/coryjquirk/ice-cold-readme-generator" class="portfBtn"><button>GitHub repo <i class="fa fa-link"></i></button></a>
                </div>
            </div>
            <div id="portfolioItem">      
                <h3>eat Borgus</h3>
                <p>Silly silly app that I made to practice ORM file structures and using remotely hosted MySQL database. Uses Handlebars.js to render HTML.</p>
                <a href="https://cryptic-woodland-16959.herokuapp.com/"><img class="scrnsht" src="https://coryjquirk.github.io/burger/public/assets/img/screenshot.PNG" alt="burger"/></a>
                <div class="portfBtnDiv">
                    <a href="https://cryptic-woodland-16959.herokuapp.com/" class="portfBtn"><button>Deployed app <i class="fa fa-link"></i></button></a>
                    <a href="https://github.com/coryjquirk/burger" class="portfBtn"><button>GitHub repo <i class="fa fa-link"></i></button></a>
                </div>
            </div>
            <div id="portfolioItem">
                <h3>Daily Planner</h3>
                <p>Calendar app for scheduling your work day.</p> 
                <a href="https://coryjquirk.github.io/daily-planner/"><img class="scrnsht" src="https://coryjquirk.github.io/daily-planner/images/screenshot.PNG" alt="daily planner"/></a>
                <div class="portfBtnDiv">
                    <a href="https://coryjquirk.github.io/daily-planner/" class="portfBtn"><button>Deployed app <i class="fa fa-link"></i></button></a>
                    <a href="https://github.com/coryjquirk/daily-planner" class="portfBtn"><button>GitHub repo <i class="fa fa-link"></i></button></a>
                </div>
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
                <p> I'm looking for work. Get at me through the <a>Contact page!</a></p>
            </div>
            </div>
        </div>
    )
}

export default Portfolio;