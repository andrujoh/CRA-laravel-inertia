import React from "react";
import ReactDOM from "react-dom";
import { InertiaApp } from "@inertiajs/inertia-react";
import "./index.css";

// TODO: Possibly copy files from static/js/
// When app is built, files must be copied to public/js
// Check if laravel-mix can be used or obsolete
// hot reloading
// samesite cookie attribute
// websocket error since its cross domain
// favicon
// move files to root or js
// root package.json, check if node_modules can be in root

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
		ReactDOM.render(
			<InertiaApp
				initialPage={JSON.parse(app.dataset.page)}
				resolveComponent={name => {
					return import(`./Pages/${name}`).then(module => module.default);
				}}
			/>,
			app
		);
	}
});
