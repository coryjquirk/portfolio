import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//my components
import Splash from "./components/Splash"
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import NoMatchPage from "./pages/NoMatchPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";
import SeasonBanner from "./components/SeasonBanner";

// TODO: smoother page transitions with react transition group

function App() {
  useEffect(() => {
    let title = window.location.pathname.slice(1);
    document.title = title;
  });
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="container">
          <SeasonBanner/>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/blog" component={Blog} />
            <Route component={NoMatchPage} />
          </Switch>
          {/* <p className="mutedBlog" id="theseMine">
            all photos are mine unless otherwise stated or readily apparent.
          </p> */}
          <div className="ghostDiv"></div>
        </div>
        <ScrollArrow />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
