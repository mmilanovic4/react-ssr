import express from 'express';

import { fetchPostBySlug, fetchPosts } from 'Server/db/posts';

const apiRouter = express.Router();

apiRouter.get('/posts', async (_, res) => {
	const posts = fetchPosts();

	res.json({
		posts
	});
});

apiRouter.get('/post/:slug', async (req, res) => {
	const post = fetchPostBySlug(req?.params?.slug);

	res.json({
		post
	});
});

export { apiRouter };
