import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

import { Loader } from 'Shared/components/Loader';
import { parseTitle } from 'Shared/lib/misc';
import { useIsMounted } from 'Shared/utils/useIsMounted';

const BlogPost = ({ post: initialPost }) => {
	const { slug } = useParams();
	const isMounted = useIsMounted();
	const [post, setPost] = React.useState(initialPost);

	React.useEffect(async () => {
		if (!post) {
			const response = await fetch(`/api/post/${slug}`);
			const data = await response?.json();
			if (isMounted?.current) setPost(data?.post || {});
		}
	}, []);

	return (
		<>
			<Helmet>
				<title>{parseTitle(post?.title)}</title>
			</Helmet>
			{!post && <Loader />}
			{post && <p>{post?.title}</p>}
			{post?.notFound && <p>The requested post does not exists.</p>}
			<Link to="/">Back to home</Link>
		</>
	);
};

export { BlogPost };
