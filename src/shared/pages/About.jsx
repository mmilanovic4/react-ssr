import React from 'react';
import { Helmet } from 'react-helmet';

import { parseTitle } from 'Shared/lib/misc';

const About = () => {
	return (
		<>
			<Helmet>
				<title>{parseTitle('About')}</title>
			</Helmet>
			<p>About</p>
		</>
	);
};

export { About };
