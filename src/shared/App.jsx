import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';

import config from 'Shared/config.json';
import { routes } from 'Shared/routes';

const App = () => {
	return (
		<>
			<Helmet>
				<html lang="en" />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content={config?.seo?.author} />
				<link rel="stylesheet" href="/assets/style.css" />
				<link rel="icon" href="/static/img/favicon.png" />
				<script src="/assets/client.js" defer />
			</Helmet>
			<h1>{config?.seo?.title}</h1>
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
			<footer>
				<hr />
				<p>
					&copy; {config?.seo?.author || 'N/A'}, {new Date()?.getFullYear()}.
				</p>
			</footer>
		</>
	);
};

export { App };
