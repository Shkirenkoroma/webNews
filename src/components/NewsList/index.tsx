import NewsItem from "../NewsItem";
import * as S from "./index.styles.jsx";
import { FC } from "react";
import { IPostsData, IPostsType } from "types/index";

const NewsList: FC<IPostsData> = ({ items, error }): JSX.Element => {

	return (
		<S.ContainerItem>
			{items.length ? (
				items.map((post: IPostsType) => <NewsItem key={post.id} post={post} />)
			) : (
				<div className="error__meassage">{error}</div>
			)}
		</S.ContainerItem>
	);
};

export default NewsList;
