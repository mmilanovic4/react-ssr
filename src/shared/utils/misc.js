import config from 'Shared/config.json';

const { seo } = config;

export const stripHtmlTags = (html) => {
	return (html || '')?.replace(/<[^>]+>/g, '');
};

export const parseTitle = (title) => {
	if (!title) return seo?.title || '';
	if (!seo?.title) return title;
	return `${seo?.title} | ${title}`;
};
