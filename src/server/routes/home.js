import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter as Router } from 'react-router-dom';

import { App } from 'Shared/App';
import { withRouter } from 'Shared/utils/withRouter';

const homeRouter = express.Router();

homeRouter.get('/*', async (req, res) => {
	const el = React.createElement(
		withRouter(App, Router, { location: req?.path, context: {} })
	);
	const dom = ReactDOMServer.renderToString(el);
	const helmet = Helmet.renderStatic();

	res.render('index', {
		title: helmet?.title?.toString(),
		dom
	});
});

export { homeRouter };
