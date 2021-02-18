import React from 'react';

import { getInitialData } from 'Shared/utils/misc';

const withInitialData = (Comp) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				...getInitialData(props)
			};
		}

		render() {
			return <Comp {...this?.state} />;
		}
	};
};

export { withInitialData };
