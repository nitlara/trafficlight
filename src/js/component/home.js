import React, { useState } from "react";

export function Trafficlight() {
	//useState con light
	const [light, setLight] = useState("");
	//

	if (light == "red") {
		var redLightSelection = "selected";
	} else if (light == "orange") {
		var orangeLightSelection = "selected";
	} else {
		var greenLightSelection = "selected";
	}

	return (
		<div className="container mt-5 d-flex flex-column align-items-center justify-content-around">
			<div
				className={
					"red circle rounded-circle border-dark " + redLightSelection
				}
				onClick={() => setLight("red")}
			/>
			<div
				className={
					"orange circle rounded-circle border-dark " +
					orangeLightSelection
				}
				onClick={() => setLight("orange")}
			/>
			<div
				className={
					"green circle rounded-circle border-dark " +
					greenLightSelection
				}
				onClick={() => setLight("green")}
			/>
		</div>
	);
}
