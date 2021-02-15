import express from 'express';

import posts from 'Server/data/mock.json';

const apiRouter = express.Router();

apiRouter.get('/posts', async (_, res) => {
	res.json({
		posts
	});
});

export { apiRouter };
