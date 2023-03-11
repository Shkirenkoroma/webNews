import icon from "assets/img/logo.png";
import * as S from "./index.styles.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { FC } from "react";
import { getPosts } from "redux/reducer/newsSlice";

const Header:FC = ():JSX.Element => {
	const dispatch = useDispatch();

	const updatePosts = () => {
		dispatch(getPosts());
	};
	
	return (
		<S.ContainerHeader>
			<Link to="/">
				<img src={icon} alt="Перейти на главную" />
			</Link>
			<Button
				onClick={updatePosts}
				buttonName={"Обновить список новостей"}
			/>
		</S.ContainerHeader>
	);
};

export default Header;
