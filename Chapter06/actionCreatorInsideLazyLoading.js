function AuthorComponent({ authorId }) { 
    //... 
    const onLazyLoading = () => { 
      dispatch(getPostsByAuthor(authorId)) 
    } 
} 