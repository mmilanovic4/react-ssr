import React from 'react';

const withRouter = (
	Router,
	Comp,
	propsForRouter = {},
	propsForComp = {}
) => () => {
	return (
		<Router {...propsForRouter}>
			<Comp {...propsForComp} />
		</Router>
	);
};

export { withRouter };
