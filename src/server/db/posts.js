import posts from 'Server/db/posts.json';

const fetchPosts = () => posts;

const fetchPostBySlug = (slug) => {
	return (
		posts?.find((post) => post?.slug === slug) || {
			title: 'Post not found',
			notFound: true
		}
	);
};

export { fetchPosts, fetchPostBySlug };
