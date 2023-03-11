import { put, call, all, takeLatest, select } from "redux-saga/effects";
import {
	GET_COMMENTS,
	SET_COMMENTS,
	GET_POSTS,
	HIDE_LOADER,
	SET_LOADING,
	SET_POSTS,
	SET_ERRORS_POSTS, 
	SET_ERRORS_COMMENTS
} from "./action/types";
import { getComments, getPosts } from "common/api/helpers";
import { ICommentsType, IPostsType } from "types";

function* sagaWorkerPosts() {
	try {
		yield put({ type: SET_LOADING });
		const payload: IPostsType = yield call(getPosts);
		yield put({ type: SET_POSTS, payload });
		yield put({ type: HIDE_LOADER });
	} catch {
	yield put({type:SET_ERRORS_POSTS, payload:'Произошла ошибка загрузки новостей...'})
	yield put({ type: HIDE_LOADER });
	console.log('Произошла ошибка загрузки новостей...')
}
}

function* sagaGetPosts() {
	yield takeLatest(GET_POSTS, sagaWorkerPosts);
}

function* sagaWorkerComments() {
	try {
		const { kids } = yield select((state) => state.post);
		const payload: ICommentsType = yield call(getComments, kids);
		yield put({ type: SET_COMMENTS, payload });
	} catch  {
		yield put({type:SET_ERRORS_COMMENTS, payload:'Произошла ошибка загрузки комментариев'})
		console.log('Произошла ошибка загрузки комментариев')
	}
}
function* sagaGetComments() {
	yield takeLatest(GET_COMMENTS, sagaWorkerComments);
}

export default function* rootSaga() {
	yield all([sagaGetPosts(), sagaGetComments()]);
}
