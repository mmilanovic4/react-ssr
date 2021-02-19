import posts from 'Server/db/posts.json';

const timeout = async (data) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	});
};

const fetchPosts = async () => timeout(posts);

const fetchPostBySlug = async (slug) => {
	return timeout(
		posts?.find((post) => post?.slug === slug) || {
			title: 'Post not found',
			notFound: true
		}
	);
};

export { fetchPosts, fetchPostBySlug };
