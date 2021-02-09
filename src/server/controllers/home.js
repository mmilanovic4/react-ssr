import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';

import { App } from 'Shared/components/App';
import { withRouter } from 'Shared/utils/withRouter';

const router = express.Router();

router.get('/*', async (req, res) => {
	const el = React.createElement(
		withRouter(App, Router, { location: req?.path, context: {} })
	);
	const dom = ReactDOMServer.renderToString(el);

	res.render('index', {
		title: 'React Hello',
		dom
	});
});

export default router;
