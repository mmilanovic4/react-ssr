import React from 'react';
import { Switch, Route, Link, useParams } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<p>Home</p>
			<ul>
				{['hello-world', 'blah-blah-blah', 'pewpewpew']?.map((id) => {
					return (
						<li key={id}>
							<Link to={`/blog/${id}`}>{id}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};
const Contact = () => <p>Contact</p>;
const About = () => <p>About</p>;
const BlogPost = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<p>{id}</p>
			<Link to="/">Back to home</Link>
		</>
	);
};

const App = () => {
	return (
		<>
			<h1>React SSR example</h1>
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
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/blog/:id">
					<BlogPost />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);
};

export { App };
