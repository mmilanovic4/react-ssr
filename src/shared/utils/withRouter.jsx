import React from 'react';

const withRouter = (Router, Comp, props = {}) => () => {
	return (
		<Router {...props}>
			<Comp />
		</Router>
	);
};

export { withRouter };
