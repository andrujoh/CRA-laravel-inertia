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
	if (app) {
		ReactDOM.render(
			<InertiaApp
				initialPage={JSON.parse(app.dataset.page)}
				resolveComponent={name =>
					import(`./Pages/${name}`).then(module => module.default)
				}
			/>,
			app
		);
	}
});
