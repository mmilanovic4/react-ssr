import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { matchPath, StaticRouter as Router } from 'react-router-dom';
import serializeJavascript from 'serialize-javascript';

import { App } from 'Shared/App';
import { html } from 'Shared/lib/html';
import { routes } from 'Shared/routes';
import { withRouter } from 'Shared/utils/withRouter';

const homeRouter = express.Router();

homeRouter.get('/*', async (req, res) => {
	const path = req?.path;
	const currentRoute = routes?.find((route) => matchPath(path, route));
	const initialData =
		typeof currentRoute?.requestInitialData === 'function'
			? await currentRoute?.requestInitialData(path)
			: {};

	const el = React.createElement(
		withRouter(Router, App, {
			location: path,
			context: { ...initialData }
		})
	);
	const dom = ReactDOMServer.renderToString(el);
	const helmet = Helmet.renderStatic();

	const htmlAttributes = helmet?.htmlAttributes?.toString();
	const meta = Object?.values({
		title: helmet?.title?.toString(),
		meta: helmet?.meta?.toString(),
		link: helmet?.link?.toString(),
		script: helmet?.script?.toString()
	})?.join('');
	const initialDataSerialized = serializeJavascript(initialData);

	res.send(
		html({
			htmlAttributes,
			meta,
			initialData: initialDataSerialized,
			dom
		})
	);
});

export { homeRouter };
