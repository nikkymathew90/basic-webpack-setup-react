import React from "react";
import classes from "./pizzaImage.css";
import PizzaImage from "../../assets/pizza.jpg";

const pizzaImage = props => (
  <div className={classes.pizzaImage}>
    <img src={PizzaImage} className={classes.pizzaImg} />
  </div>
);

export default pizzaImage;
