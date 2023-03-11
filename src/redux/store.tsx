import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { newsReducer } from "./reducer/newsSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		news: newsReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
