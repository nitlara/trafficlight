import React, { useState } from "react";

export function Trafficlight() {
	//useState about light
	const [light, setLight] = useState("");
	//condictional: what color is selected

	if (light == "red") {
		var redLightSelection = "selected";
	} else if (light == "orange") {
		var orangeLightSelection = "selected";
	} else {
		var greenLightSelection = "selected";
	}

	return (
		<div className="container mt-5  d-flex flex-column align-items-center justify-content-around rounded bg-dark">
			<div
				className={
					"mt-2 bg-danger circle rounded-circle border-dark " +
					redLightSelection
				}
				onClick={() => setLight("red")}
			/>
			<div
				className={
					"bg-warning circle rounded-circle border-dark " +
					orangeLightSelection
				}
				onClick={() => setLight("orange")}
			/>
			<div
				className={
					"bg-success circle rounded-circle border-dark mb-2 " +
					greenLightSelection
				}
				onClick={() => setLight("green")}
			/>
		</div>
	);
}
