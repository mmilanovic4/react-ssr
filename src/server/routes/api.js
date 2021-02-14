import express from 'express';

const apiRouter = express.Router();

const posts = [
	{ id: '001', title: 'First post', slug: 'first-post' },
	{ id: '002', title: 'Second post', slug: 'second-post' },
	{ id: '003', title: 'Third post', slug: 'third-post' }
];

apiRouter.get('/posts', async (_, res) => {
	res.json({
		posts
	});
});

export { apiRouter };
