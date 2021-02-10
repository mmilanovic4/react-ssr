import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from 'Shared/App';
import { withRouter } from 'Shared/utils/withRouter';

const el = React.createElement(withRouter(App, Router));
const target = document.getElementById('root');

ReactDOM.hydrate(el, target);
