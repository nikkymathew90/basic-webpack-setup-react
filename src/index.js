import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reactDOM.render(app, document.getElementById("root"));
