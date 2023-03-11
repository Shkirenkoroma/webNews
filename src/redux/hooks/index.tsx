import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
   getPosts,
	getPost,
	setPosts,
	setComments,
	getComments,
	setLoading,
	unsetLoading,
	setErrorsPosts,
	setErrorsComments,
} from "./../reducer/newsSlice";

const allActions: any = {
	...getPost,
   getPosts,
	setPosts,
	getComments,
	setComments,
	setLoading,
	unsetLoading,
	setErrorsPosts,
	setErrorsComments,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
