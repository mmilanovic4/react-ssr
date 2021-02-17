import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { routes } from 'Shared/routes';

const App = () => {
	return (
		<>
			<h1>React SSR</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				{routes?.map((route, index) => {
					return <Route key={index} {...route} />;
				})}
			</Switch>
		</>
	);
};

export { App };
