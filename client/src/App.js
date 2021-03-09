import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//my components
import Home from "./components/Home";
import PortfolioPage from "./pages/PortfolioPage";
import SoundPage from "./pages/SoundPage";
import PhotographyPage from "./pages/PhotographyPage";
import Blog from "./components/Blog";
import ContactPage from "./pages/ContactPage";
import NoMatchPage from "./pages/NoMatchPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div id="main">
          <Switch>
          <Route path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/sound" component={SoundPage} />
            <Route exact path="/photography" component={PhotographyPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/blog" component={Blog} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
        <ScrollArrow />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
