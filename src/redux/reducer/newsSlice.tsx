import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
	name: "news",
	initialState: {
		post: {},
		posts: [],
		comments: [],
		loading: false,
		postError: "",
		commentError: "",
	},
	reducers: {
		getPosts: (state) => {
			state.loading = true;
		},
		getPost: (state, action) => {
			state.post = action.payload;
			state.loading = false;
		},
		setPosts: (state, action) => {
			state.posts = action.payload;
			state.loading = false;
		},
		getComments: (state) => {
			state.loading = true;
		},
		setComments: (state, action) => {
			state.comments = action.payload;
			state.loading = false;
		},
		setLoading: (state) => {
			state.loading = true;
		},
		unsetLoading: (state) => {
			state.loading = false;
		},
		setErrorsPosts: (state, action) => {
			state.postError = action.payload;
		},
		setErrorsComments: (state, action) => {
			state.commentError = action.payload;
		},
	},
});

export const newsReducer = newsSlice.reducer;
export const {
	getPosts,
	getPost,
	setPosts,
	getComments,
	setComments,
	setLoading,
	unsetLoading,
	setErrorsPosts,
	setErrorsComments,
} = newsSlice.actions;
