import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

import { Loader } from 'Shared/components/Loader';
import { parseTitle } from 'Shared/utils/misc';

const BlogPost = ({ posts }) => {
	const { slug } = useParams();
	const post = posts && posts?.find((post) => post?.slug === slug);

	return (
		<>
			<Helmet>
				<title>{parseTitle(post?.title)}</title>
			</Helmet>
			{post === false && <Loader />}
			{post === undefined && <p>Post not found.</p>}
			{post && <p>{post?.title}</p>}
			<Link to="/">Back to home</Link>
		</>
	);
};

export { BlogPost };
