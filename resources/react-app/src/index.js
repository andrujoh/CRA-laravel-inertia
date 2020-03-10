import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

document.addEventListener("DOMContentLoaded", event => {
	const app = document.getElementById("app");
	const fallback = document.getElementById("root");
	if (window.location.origin.includes("localhost:")) {
		ReactDOM.render(
			<h1 style={{ padding: "10px", margin: "30px" }}>
				Open your laravel app url instead. This localhost only hosts and
				refreshes the javascript files
			</h1>,
			fallback
		);
	} else {
		ReactDOM.render(<App />, app);
	}
});
