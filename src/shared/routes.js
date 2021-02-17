import { fetchPosts, fetchPostBySlug } from 'Server/db/posts';
import { Home } from 'Shared/pages/Home';
import { BlogPost } from 'Shared/pages/BlogPost';
import { About } from 'Shared/pages/About';
import { Contact } from 'Shared/pages/Contact';

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
		component: BlogPost,
		requestInitialData(path) {
			const post = fetchPostBySlug(path?.replace(/^\/blog\//, ''));
			return {
				post
			};
		}
	},
	{
		path: '/',
		component: Home,
		requestInitialData: () => {
			const posts = fetchPosts();
			return {
				posts
			};
		}
	}
];

export { routes };
