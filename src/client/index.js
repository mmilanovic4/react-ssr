import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from 'Shared/App';
import { withRouter } from 'Shared/utils/withRouter';

const data = window.__DATA__ || {};
delete window.__DATA__;

const el = React.createElement(
	withRouter(Router, App, {}, { posts: data?.posts || [] })
);
const target = document.getElementById('root');

ReactDOM.hydrate(el, target);
