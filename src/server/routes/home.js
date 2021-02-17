import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { matchPath, StaticRouter as Router } from 'react-router-dom';

import { App } from 'Shared/App';
import { routes } from 'Shared/routes';
import { stripHtmlTags } from 'Shared/utils/misc';
import { withRouter } from 'Shared/utils/withRouter';

const homeRouter = express.Router();

homeRouter.get('/*', async (req, res) => {
	const path = req?.path;
	const currentRoute = routes?.find((route) => matchPath(path, route));
	const initialData =
		typeof currentRoute?.requestInitialData === 'function'
			? currentRoute?.requestInitialData(path)
			: {};

	const el = React.createElement(
		withRouter(Router, App, {
			location: path,
			context: { ...initialData }
		})
	);
	const dom = ReactDOMServer.renderToString(el);
	const helmet = Helmet.renderStatic();

	res.render('index', {
		title: stripHtmlTags(helmet?.title?.toString()),
		dom,
		window: {
			DATA: JSON.stringify({
				...initialData
			})
		}
	});
});

export { homeRouter };
