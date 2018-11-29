import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import POSAdmin from "./Admin";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/admin" exact component={POSAdmin} />
    </div>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
