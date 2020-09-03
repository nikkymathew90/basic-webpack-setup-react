import React, { Component } from "react";
import PizzaImg from "./../components/pizzaImage/pizzaImage";

class Pizza extends Component {
  render() {
    return (
      <div>
        <h1>The Pizza</h1>
        <PizzaImg />
      </div>
    );
  }
}

export default Pizza;
