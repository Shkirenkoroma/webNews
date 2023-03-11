import { FC, useEffect } from "react";
import NewsList from "components/NewsList";
import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS } from "redux/action/types";
import * as S from "./index.styles";
import Loader from "components/Loader";
import { IState } from "types";


export const MainPage:FC = ():JSX.Element => {
	const dispatch = useDispatch();
	const state = useSelector((state:IState) => state);
	const loading = state.loading;
	const posts = state.posts;
console.log('posts', posts)
	useEffect(() => {
		dispatch({ type: GET_POSTS });
	}, []);

	// setInterval(()=>{
	// 	dispatch({ type: FETCH_POSTS })
	// }, 60000)
	
	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<S.Div>
					<NewsList items={posts} />
				</S.Div>
			)}
		</div>
	);
};
