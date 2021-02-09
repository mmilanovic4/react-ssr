import React from 'react';
import { Switch, Route, Link, useParams } from 'react-router-dom';

const Home = ({ posts }) => {
	return (
		<>
			<p>Home</p>
			<ul>
				{posts === false && <li>Loading...</li>}
				{posts?.length === 0 && <li key="1">No posts.</li>}
				{posts?.length > 0 &&
					posts?.map((post) => {
						return (
							<li key={post?.id}>
								<Link to={`/blog/${post?.slug}`}>{post?.title}</Link>
							</li>
						);
					})}
			</ul>
		</>
	);
};
const Contact = () => <p>Contact</p>;
const About = () => <p>About</p>;

const BlogPost = ({ posts }) => {
	const { slug } = useParams();
	const post = posts && posts?.find((post) => post?.slug === slug);

	return (
		<>
			{post === false && <p>Loading...</p>}
			{post === undefined && <p>Post not found.</p>}
			{post && <p>{post?.title}</p>}
			<Link to="/">Back to home</Link>
		</>
	);
};

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
