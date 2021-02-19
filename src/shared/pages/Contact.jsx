import React from 'react';
import { Helmet } from 'react-helmet';

import { parseTitle } from 'Shared/lib/misc';

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>{parseTitle('Contact')}</title>
			</Helmet>
			<p>Contact</p>
		</>
	);
};

export { Contact };
