import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//my components
import Spiral from "./components/Spiral";
import Home from "./components/Home";
import Photography from "./components/Photography";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import NoMatchPage from "./pages/NoMatchPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";
import Contact from "./components/Contact";
import Spring2022banner from "./components/Spring2022banner";

function App() {
  useEffect(() => {
    let title = window.location.pathname.slice(1);
    document.title = title;
  });
  return (
    <Router>
      <div className="App">
        <Spiral />
        <Nav />
        <div id="container">
          <Spring2022banner/>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/photography" component={Photography} />
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
