import { put, call, all, takeLatest, select } from "redux-saga/effects";
import { getAllComments, getAllPosts } from "common/api/helpers";
import { ICommentsType, IPostsType } from "types";
import {
	setComments,
	setErrorsComments,
	setErrorsPosts,
	setLoading,
	setPosts,
	unsetLoading,
} from "redux/reducer/newsSlice";

function* sagaWorkerPosts() {
	try {
		yield put(setLoading());
		const payload: IPostsType = yield call(getAllPosts);
		yield put(setPosts(payload));
		yield put(unsetLoading());
	} catch {
		yield put(setErrorsPosts("Произошла ошибка загрузки новостей..."));
		yield put(unsetLoading());
		console.log("Произошла ошибка загрузки новостей...");
	}
}

function* sagaGetPosts() {
	yield takeLatest("news/getPosts", sagaWorkerPosts);
}

function* sagaWorkerComments() {
	try {
		const { kids } = yield select((state) => state.news.post);
		const payload: ICommentsType = yield call(getAllComments, kids);
		yield put(setComments(payload));
	} catch {
		yield put(setErrorsComments("Произошла ошибка загрузки комментариев"));
		console.log("Произошла ошибка загрузки комментариев");
	}
}
function* sagaGetComments() {
	yield takeLatest("news/getComments", sagaWorkerComments);
}

export default function* rootSaga() {
	yield all([sagaGetPosts(), sagaGetComments()]);
}
