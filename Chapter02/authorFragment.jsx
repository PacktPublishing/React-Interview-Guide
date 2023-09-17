function Author() {
	return posts.map(post =>
		<Fragment key={ post.id}>
			<Post title={post.text} body={post.body} />
			<Date date= {post.date} />
		</Fragment>
	);
}
