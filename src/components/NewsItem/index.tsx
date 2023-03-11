import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import  { FC } from 'react';
import { GET_POST } from "redux/action/types";
import * as S from "./index.styles.jsx";
import Button from "../Button";
import { IPost } from 'types/index';
import { getTime } from "utils";


 const NewsItem:FC<IPost> = ({ post }):JSX.Element => {
	const dispatch = useDispatch();
	const { by, time, title, score, id, kids } = post;

	return (
		<S.ContainerItem>
			<h3>{title}</h3>
			<p>Рейтинг: {score}</p>
			<p>Автор: {by}</p>
			<p>Опубликовано: {getTime(time)}</p>
			<p className="espessial">Комментариев: {kids ? kids.length : 0}<Link
				to={`/news/${id}`}
				onClick={() => dispatch({ type: GET_POST, payload: post })}
			>
			<Button buttonName={'Перейти'}/>
			</Link></p>
		</S.ContainerItem>
	);
};

export default NewsItem
