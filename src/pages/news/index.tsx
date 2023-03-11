import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IState } from "types";
import Button from "components/Button";
import Comments from "components/Comments";
import { GET_COMMENTS } from "redux/action/types";
import * as S from "./index.styles";


export const NewsPage:FC = ():JSX.Element => {
	const state = useSelector((state:IState) => state);
	const { by, time, title, url, kids } = state.post;
	const { comments } = state;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: GET_COMMENTS, kids });
	}, []);

	return (
		<S.ContainerNew>
			<Link to="/">
				<Button buttonName={"Назад"} className={"backPage"} />
			</Link>
			<h1>{title}</h1>
			<div className="content">
				<div className="groupTitle">
					<span>
						<b>Дата:</b>
						{time}
					</span>
					<span>
						<b>Автор:</b>
						{by}
					</span>
					<span>
						<b>Количество комментариев:</b> {kids ? kids.length : 0}
					</span>
				</div>
				<div className="groupButton">
					<Button
						className={"updateComments"}
						updatePosts={() => dispatch({ type: GET_COMMENTS, kids })}
						buttonName={"Обновить комментарии"}
					/>
					<a href={`${url}`}>
						<Button buttonName={"Ссылка на новость"} className={"linkOnNews"} />
					</a>
				</div>
			</div>
			<Comments items={comments}  />
		</S.ContainerNew>
	);
};
