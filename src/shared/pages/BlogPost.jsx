import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Loader } from 'Shared/components/Loader';
import { getInitialData, parseTitle } from 'Shared/utils/misc';

class BlogPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...getInitialData(props)
		};
	}

	componentDidMount() {
		console.log();
		if (!this?.state?.post) {
			fetch(`/api/post/${this?.props?.match?.params?.slug}`)
				.then((res) => res?.json())
				.then((data) => {
					this.setState({
						post: data?.post || {}
					});
				})
				.catch(() => {
					this.setState({
						post: {}
					});
				});
		}
	}

	render() {
		const { post } = this.state;
		return (
			<>
				<Helmet>
					<title>{parseTitle(post?.title)}</title>
				</Helmet>
				{!post && <Loader />}
				{post && <p>{post?.title}</p>}
				<Link to="/">Back to home</Link>
			</>
		);
	}
}

export { BlogPost };
