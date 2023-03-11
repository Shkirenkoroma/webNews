import icon from "assets/img/logo.png";
import * as S from "./index.styles.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_POSTS } from "redux/action/types";
import Button from "../Button";
import { FC } from "react";

const Header:FC = ():JSX.Element => {
	const dispatch = useDispatch();

	const updatePosts = () => {
		dispatch({ type: GET_POSTS });
	};
	
	return (
		<S.ContainerHeader>
			<Link to="/">
				<img src={icon} alt="Перейти на главную" />
			</Link>
			<Button
				updatePosts={()=>updatePosts}
				buttonName={"Обновить список новостей"}
			/>
		</S.ContainerHeader>
	);
};

export default Header;
