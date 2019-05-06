import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//if you want to use bootstrap, you need to install it on your new project
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
