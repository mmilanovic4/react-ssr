import compression from 'compression';
import express from 'express';
import path from 'path';

import { config } from 'Server/config';
import { apiController } from 'Server/controllers/api';
import { homeController } from 'Server/controllers/home';

const app = express();
const port = config?.port || 5555;

// App settings
app.disable('x-powered-by');
app.set('view engine', 'pug');
app.set('views', path.resolve('views'));

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('assets'));
app.use('/static', express.static('static'));

// Controllers
app.use('/api/', apiController);
app.use('/', homeController);

// Start the server
app.listen(port, () => {
	console.debug(`App listening on port ${port}...`);
	console.debug(JSON.stringify(config, null, 2));
});
