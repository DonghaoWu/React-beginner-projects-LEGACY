import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Hello, Welcome, Pokemon } from "./components";

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path="/hello" component={Hello} />;
        <Route path="/welcome" component={Welcome} />;
        <Route path="/home" component={Pokemon} />;
        <Route component={Pokemon} />;
      </Switch>
    );
  }
}

export default Routes;
