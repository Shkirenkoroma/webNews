import { put, call, all, takeLatest, select } from "redux-saga/effects";
import {
	GET_COMMENTS,
	SET_COMMENTS,
	GET_POSTS,
	HIDE_LOADER,
	SET_LOADING,
	SET_POSTS
} from "./action/types";
import { fetchComments, fetchPosts } from "common/api/helpers";
import { ICommentsType, IPostsType } from "types";

function* sagaWorkerPosts() {
	try {
		yield put({ type: SET_LOADING });
		const payload: IPostsType = yield call(fetchPosts);
		yield put({ type: SET_POSTS, payload });
		yield put({ type: HIDE_LOADER });
	} catch (e) {

	}
}

function* sagaGetPosts() {
	yield takeLatest(GET_POSTS, sagaWorkerPosts);
}

function* sagaWorkerComments() {
	try {
		const { kids } = yield select((state) => state.post);
		const payload: ICommentsType = yield call(fetchComments, kids);
		yield put({ type: SET_COMMENTS, payload });
		yield put({ type: HIDE_LOADER });
	} catch (e) {}
}
function* sagaGetComments() {
	yield takeLatest(GET_COMMENTS, sagaWorkerComments);
}

export default function* rootSaga() {
	yield all([sagaGetPosts(), sagaGetComments()]);
}
