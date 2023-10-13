export const getPostsByAuthor = (authorId) => async (dispatch) => {
  const response = await client.get(`/api/posts/${authorId}`);
  dispatch(postsLoaded(response.posts));
};
