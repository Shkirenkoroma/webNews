import { FC, useEffect } from "react";
import NewsList from "components/NewsList";
import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS } from "redux/action/types";
import * as S from "./index.styles";
import Loader from "components/Loader";
import { IState } from "types";


export const MainPage:FC = ():JSX.Element => {
	const dispatch = useDispatch();
	const loading = useSelector((state:IState) => state?.loading);
	const posts = useSelector((state:IState) => state?.posts);
	const errorPosts = useSelector((state:IState) => state?.postError);

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
					<NewsList items={posts} error={errorPosts}/>
				</S.Div>
			)}
		</div>
	);
};
