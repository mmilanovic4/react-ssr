import { seo } from 'Shared/config.json';

const parseTitle = (title) => {
	if (!title) return seo?.title || '';
	if (!seo?.title) return title;
	return `${seo?.title} | ${title}`;
};

export { parseTitle };
