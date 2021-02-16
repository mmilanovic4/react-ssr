import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter as Router } from 'react-router-dom';

import posts from 'Server/data/mock.json';
import { App } from 'Shared/App';
import { stripHtmlTags } from 'Shared/utils/misc';
import { withRouter } from 'Shared/utils/withRouter';

const homeRouter = express.Router();

homeRouter.get('/*', async (req, res) => {
	const el = React.createElement(
		withRouter(Router, App, { location: req?.path, context: {} }, { posts })
	);
	const dom = ReactDOMServer.renderToString(el);
	const helmet = Helmet.renderStatic();

	res.render('index', {
		title: stripHtmlTags(helmet?.title?.toString()),
		dom,
		window: {
			DATA: JSON.stringify({
				posts
			})
		}
	});
});

export { homeRouter };
