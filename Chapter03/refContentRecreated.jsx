function CreateBlogArticle() {
  // This is an expensive object to create the article
}

function Blog() {
  const articleRef = useRef(new CreateBlogArticle());
  //...
}
