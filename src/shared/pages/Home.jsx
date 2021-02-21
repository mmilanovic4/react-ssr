import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Loader } from 'Shared/components/Loader';
import { parseTitle } from 'Shared/lib/misc';
import { useIsMounted } from 'Shared/utils/useIsMounted';

const Home = ({ posts: initialPosts }) => {
	const isMounted = useIsMounted();
	const [posts, setPosts] = React.useState(initialPosts || false);

	React.useEffect(async () => {
		if (!posts) {
			const response = await fetch('/api/posts');
			const data = await response?.json();
			if (isMounted?.current) setPosts(data?.posts || []);
		}
	}, []);

	return (
		<>
			<Helmet>
				<title>{parseTitle('Home')}</title>
			</Helmet>
			<p>Home</p>
			{!posts && <Loader />}
			{posts && (
				<ul>
					{!posts?.length && <li key="1">No posts.</li>}
					{posts?.length > 0 &&
						posts?.map((post) => {
							return (
								<li key={post?.id}>
									<Link to={`/blog/${post?.slug}`}>{post?.title}</Link>
								</li>
							);
						})}
				</ul>
			)}
		</>
	);
};

export { Home };
