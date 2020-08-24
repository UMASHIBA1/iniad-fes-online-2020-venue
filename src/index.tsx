import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/pages/Home";
import "./styles/tailwind.compiled.css";
import "./styles/global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./components/pages/VideoPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/videopage">
          <VideoPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
