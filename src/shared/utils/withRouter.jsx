import React from 'react';

const withRouter = (Comp, Router, props = {}) => () => {
	return (
		<Router {...props}>
			<Comp />
		</Router>
	);
};

export { withRouter };
