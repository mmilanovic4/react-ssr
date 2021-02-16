import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Home } from 'Shared/pages/Home';
import { BlogPost } from 'Shared/pages/BlogPost';
import { About } from 'Shared/pages/About';
import { Contact } from 'Shared/pages/Contact';

const App = ({ posts }) => {
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
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/contact" exact>
					<Contact />
				</Route>
				<Route path="/blog/:slug" exact>
					<BlogPost posts={posts} />
				</Route>
				<Route path="/">
					<Home posts={posts} />
				</Route>
			</Switch>
		</>
	);
};

export { App };
