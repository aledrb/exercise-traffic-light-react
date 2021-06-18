import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("green");
	return (
		<div id="app">
			<div className="text-center mt-5">
				<div className="top"></div>
				<div className="container abs-center justify-content-center">
					<div>
						<button
							className={`green ${
								color === "green" ? "light" : ""
							}`}
							onClick={() => setColor("green")}></button>
					</div>
					<div>
						<button
							className={`yellow ${
								color === "yellow" ? "light" : ""
							}`}
							onClick={() => setColor("yellow")}></button>
					</div>
					<div>
						<button
							className={`red ${color === "red" ? "light" : ""}`}
							onClick={() => setColor("red")}></button>
					</div>
				</div>
			</div>
		</div>
	);
}
