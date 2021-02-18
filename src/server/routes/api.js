import express from 'express';

import { fetchPostBySlug, fetchPosts } from 'Server/db/posts';

const apiRouter = express.Router();

apiRouter.get('/posts', async (_, res) => {
	const posts = await fetchPosts();

	res.json({
		posts
	});
});

apiRouter.get('/post/:slug', async (req, res) => {
	const post = await fetchPostBySlug(req?.params?.slug);

	res.json({
		post
	});
});

export { apiRouter };
