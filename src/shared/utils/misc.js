import config from 'Shared/config.json';

const { seo } = config;

export const parseTitle = (title) => {
	if (!title) return seo?.title || '';
	if (!seo?.title) return title;
	return `${seo?.title} | ${title}`;
};

export const getInitialData = (props) => {
	if (props?.staticContext) {
		return { ...props?.staticContext };
	}

	if (window?.__DATA__) {
		const data = window?.__DATA__;
		delete window.__DATA__;
		return { ...data };
	}

	return {};
};
