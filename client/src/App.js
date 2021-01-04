import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//my components
import PortfolioPage from "./pages/PortfolioPage";
import SoundPage from "./pages/SoundPage";
import PhotographyPage from "./pages/PhotographyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NoMatchPage from "./pages/NoMatchPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
            <Nav />
            <div id="main">
              <Switch>
                <Route exact path="/" component={PortfolioPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/sound" component={SoundPage}/>
                <Route exact path="/photography" component={PhotographyPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route component={NoMatchPage} />
              </Switch>
            </div>
            <ScrollArrow/>
            <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
