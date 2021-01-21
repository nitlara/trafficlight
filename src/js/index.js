//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

// npm install --save-dev @iconify/react @iconify-icons/fa
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Trafficlight() {
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
		<div className="bigcontainer d-flex flex-column align-items-center">
			<div className="stick bg-dark d-flex flex-column " />
			<div className="trafficbox d-flex flex-column align-items-center justify-content-around rounded bg-dark">
				<div
					className={
						"mt-2 bg-danger circle rounded-circle border-dark " +
						redLightSelection
					}
					onClick={() => setLight("red")}>
					<FontAwesomeIcon
						className="bicycle mt-2 ml-2 fa-flip-horizontal"
						icon={faBicycle}
					/>
				</div>

				<div
					className={
						"bg-warning circle rounded-circle border-dark " +
						orangeLightSelection
					}
					onClick={() => setLight("orange")}>
					<FontAwesomeIcon
						className="bicycle mt-2 ml-2 fa-flip-horizontal"
						icon={faBicycle}
					/>
				</div>
				<div
					className={
						"bg-success circle rounded-circle border-dark mb-2 " +
						greenLightSelection
					}
					onClick={() => setLight("green")}>
					<FontAwesomeIcon
						className="bicycle mt-2 ml-2 fa-flip-horizontal"
						icon={faBicycle}
					/>
				</div>
			</div>
		</div>
	);
}

//render your react application
ReactDOM.render(<Trafficlight />, document.querySelector("#app"));
