import { IState } from "types";
import {
	GET_POST,
	SET_POSTS,
	SET_LOADING,
	GET_COMMENTS,
	SET_COMMENTS,
	HIDE_LOADER,
	SET_ERRORS_POSTS,
	SET_ERRORS_COMMENTS,
	GET_POSTS,
} from "../action/types";

const initialState = {
	post: {},
	posts: [],
	comments: [],
	loading: false,
	postError: "",
	commentError: "",
};

const handlers = {
	[GET_POST]: (state: IState, action: any) => ({
		...state,
		post: action.payload,
		loading: false,
	}),
	[SET_POSTS]: (state: IState, action: any) => ({
		...state,
		posts: action.payload,
		loading: false,
	}),
	[SET_COMMENTS]: (state: IState, action: any) => ({
		...state,
		comments: action.payload,
		loading: false,
	}),
	[SET_LOADING]: (state: IState) => ({ ...state, loading: true }),
	[HIDE_LOADER]: (state: IState) => ({ ...state, loading: false }),
	[SET_ERRORS_POSTS]: (state: IState, action: any) => ({
		...state,
		postError: action.payload,
	}),
	[SET_ERRORS_COMMENTS]: (state: IState, action: any) => ({
		...state,
		commentError: action.payload,
	}),
	DEFAULT: (state: IState) => state,
};

export const RootReducer = (state = initialState, action: any) => {
	//@ts-ignore
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action);
};
