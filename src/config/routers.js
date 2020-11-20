import React from "react";
import Home from "../container/Home";
import About from "../container/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
      </Router>
    );
  }
}

export default AppRouter;
