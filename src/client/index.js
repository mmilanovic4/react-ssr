import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from 'Shared/App';
import { withRouter } from 'Shared/utils/withRouter';

const init = async () => {
	const response = await axios.get('/api/posts');

	const el = React.createElement(
		withRouter(Router, App, {}, { posts: response?.data?.posts || [] })
	);
	const target = document.getElementById('root');

	ReactDOM.hydrate(el, target);
};

init();
