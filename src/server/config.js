const isDev = process?.env?.NODE_ENV !== 'production';

const config = {
	isDev,
	port: 1234
};

export { config };
