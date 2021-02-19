import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { matchPath, StaticRouter as Router } from 'react-router-dom';

import { App } from 'Shared/App';
import { routes } from 'Shared/routes';
import { withRouter } from 'Shared/utils/withRouter';

const homeRouter = express.Router();

const html = ({ htmlAttributes, meta, initialData, dom }) => {
	return `
<!DOCTYPE html>
<html ${htmlAttributes}>

<head>
	${meta}
	<script>
		window.__DATA__ = ${initialData};
	</script>
</head>

<body>
	<div id="root">${dom}</div>
</body>

</html>	
`?.trim();
};

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

	res.send(
		html({
			htmlAttributes: helmet?.htmlAttributes?.toString(),
			meta: Object?.values({
				title: helmet?.title?.toString(),
				meta: helmet?.meta?.toString(),
				link: helmet?.link?.toString(),
				script: helmet?.script?.toString()
			})?.join(''),
			initialData: JSON.stringify({
				...initialData
			}),
			dom
		})
	);
});

export { homeRouter };
