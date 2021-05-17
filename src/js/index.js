//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let color = "red";
const changeLights = () => {
	if (color == "red") color = "yellow";
	else if (color == "yellow") color = "green";
	else if (color == "green") color = "red";
	ReactDOM.render(<Home active={color} />, document.querySelector("#app"));
};

setInterval(changeLights, 2000);
