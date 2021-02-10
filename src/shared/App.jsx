import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const App = () => {
	const [posts, setPosts] = React.useState(false);

	React.useEffect(() => {
		fetch('/api/posts')
			.then((res) => res.json())
			.then((data) => {
				setPosts(data?.posts || []);
			})
			.catch((err) => {
				console.log(err);
				setPosts([]);
			});
	}, []);

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
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/blog/:slug">
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
