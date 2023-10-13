import { takeLatest, put, call } from "redux-saga/effects";
import { GET_POSTS } from "./actionTypes";
import { getPostsSuccess, getPostsFail } from "./actions";
import { getPosts } from "../backend/api/posts ";

function* fetchAuthorPosts() {
  try {
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* postsSaga() {
  yield takeLatest(GET_POSTS, fetchAuthorPosts);
}

export default postsSaga;
