import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IState } from "types";
import Button from "components/Button";
import Comments from "components/Comments";
import * as S from "./index.styles";
import { getTime } from "utils";
import { getComments } from "redux/reducer/newsSlice";

export const NewsPage: FC = (): JSX.Element => {
	const state = useSelector((state: IState) => state.news);
	const { by, time, title, url, kids } = state.post;
	const { comments } = state;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getComments());
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
						{getTime(time)}
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
						onClick={() => dispatch(getComments())}
						buttonName={"Обновить комментарии"}
					/>
					<a href={`${url}`}>
						<Button buttonName={"Ссылка на новость"} className={"linkOnNews"} />
					</a>
				</div>
			</div>
			<Comments items={comments} />
		</S.ContainerNew>
	);
};
