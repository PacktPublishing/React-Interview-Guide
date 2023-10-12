function Blog() {
  const articleRef = useRef(null);

  if (articleRef.current === null) {
    articleRef.current = new CreateBlogArticle();
  }
  //...
}
