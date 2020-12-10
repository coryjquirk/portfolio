import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import './fonts/Quicksand/static/Quicksand-Regular.ttf'

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
