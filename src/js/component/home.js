import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [active, setActive] = useState(null);
	return (
		<div className="container d-flex flex-column justify-content-center align-items-center">
			<div
				onClick={() => setActive("red")}
				className={` ${
					active !== "red" ? "light" : "light red"
				}`}></div>
			<div
				onClick={() => setActive("yellow")}
				className={
					active !== "yellow" ? "light" : "light yellow"
				}></div>
			<div
				onClick={() => setActive("green")}
				className={active !== "green" ? "light" : "light green"}></div>
		</div>
	);
}
