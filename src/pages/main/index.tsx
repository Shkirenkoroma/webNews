import { FC, useEffect } from "react";
import NewsList from "components/NewsList";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./index.styles";
import Loader from "components/Loader";
import { IState } from "types";
import { useActions } from "redux/hooks";

export const MainPage:FC = ():JSX.Element => {
	const dispatch = useDispatch();
	const loading = useSelector((state:IState) => state.news.loading);
	const posts = useSelector((state:IState) => state.news.posts);
	const errorPosts = useSelector((state:IState) => state?.news.postError);
	const { getPosts }  = useActions();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	setInterval(()=>{
		dispatch(getPosts())
	}, 60000);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<S.Div>
					<NewsList items={posts} error={errorPosts}/>
				</S.Div>
			)}
		</div>
	);
};
