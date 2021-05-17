import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	//const [active, setActive] = useState(null);

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center">
			<div
				//onClick={() => setActive("red")}
				className={` ${
					props.active == "red" ? "light red" : "light"
				}`}></div>
			<div
				//onClick={() => setActive("yellow")}
				className={
					props.active == "yellow" ? "light yellow" : "light"
				}></div>
			<div
				//onClick={() => setActive("green")}
				className={
					props.active == "green" ? "light green" : "light"
				}></div>
		</div>
	);
}

Home.propTypes = {
	active: PropTypes.string
};
