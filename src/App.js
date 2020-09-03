import React, { Component } from "react";
import Pizza from "./container/pizza";
import Users from "./container/users";
import asyncComponent from "./hoc/asyncComponent";

import { Link, Route } from "react-router-dom";

const AsyncPizza = asyncComponent(() => {
  return import("./container/pizza");
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/pizza">
            <AsyncPizza />
          </Route>
        </div>
      </div>
    );
  }
}

export default App;
