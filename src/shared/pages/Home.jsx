import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Loader } from 'Shared/components/Loader';
import { getInitialData, parseTitle } from 'Shared/utils/misc';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...getInitialData(props)
		};
	}

	componentDidMount() {
		if (!this?.state?.posts) {
			fetch('/api/posts')
				.then((res) => res?.json())
				.then((data) => {
					this.setState({
						posts: data?.posts || []
					});
				})
				.catch(() => {
					this.setState({
						posts: []
					});
				});
		}
	}

	render() {
		const { posts } = this?.state;
		return (
			<>
				<Helmet>
					<title>{parseTitle('Home')}</title>
				</Helmet>
				<p>Home</p>
				{!posts && <Loader />}
				{posts && (
					<ul>
						{!posts?.length && <li key="1">No posts.</li>}
						{posts?.length > 0 &&
							posts?.map((post) => {
								return (
									<li key={post?.id}>
										<Link to={`/blog/${post?.slug}`}>{post?.title}</Link>
									</li>
								);
							})}
					</ul>
				)}
			</>
		);
	}
}

export { Home };
