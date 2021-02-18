import { fetchPosts, fetchPostBySlug } from 'Server/db/posts';
import { Home } from 'Shared/pages/Home';
import { BlogPost } from 'Shared/pages/BlogPost';
import { About } from 'Shared/pages/About';
import { Contact } from 'Shared/pages/Contact';
import { withInitialData } from 'Shared/utils/withInitialData';

const routes = [
	{
		path: '/about',
		exact: true,
		component: About
	},
	{
		path: '/contact',
		exact: true,
		component: Contact
	},
	{
		path: '/blog/:slug',
		exact: true,
		component: withInitialData(BlogPost),
		async requestInitialData(path) {
			const post = await fetchPostBySlug(path?.replace(/^\/blog\//, ''));
			return {
				post
			};
		}
	},
	{
		path: '/',
		component: withInitialData(Home),
		async requestInitialData() {
			const posts = await fetchPosts();
			return {
				posts
			};
		}
	}
];

export { routes };
