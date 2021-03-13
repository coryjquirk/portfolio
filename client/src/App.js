import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//my components
import Home from "./components/Home";
import SoundPage from "./pages/SoundPage";
import PhotographyPage from "./pages/PhotographyPage";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import NoMatchPage from "./pages/NoMatchPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div id="main">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/sound" component={SoundPage} />
            <Route exact path="/photography" component={PhotographyPage} />
            <Route exact path="/contact" component={Contact} />
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