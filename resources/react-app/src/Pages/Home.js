import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Home = props => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Home</h1>
				<InertiaLink href="/about">To the about page</InertiaLink>
			</header>
		</div>
	);
};

export default Home;
