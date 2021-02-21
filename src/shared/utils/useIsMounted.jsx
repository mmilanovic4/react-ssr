import React from 'react';

const useIsMounted = () => {
	const isMounted = React.useRef(null);

	React.useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	});

	return isMounted;
};

export { useIsMounted };
