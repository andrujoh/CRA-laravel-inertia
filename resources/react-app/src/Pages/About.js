import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const About = props => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>About</h1>
				<p>{props.message}</p>
				<InertiaLink href="/home">To the home page</InertiaLink>
			</header>
		</div>
	);
};

export default About;
