import NewsItem from "../NewsItem";
import * as S from "./index.styles.jsx";
import  { FC } from 'react';
import { IPostsData }from "types/index";
const NewsList:FC<IPostsData> = ({ items }):JSX.Element => {

	return (
		<S.ContainerItem>
			{items.map((post:any) => (
				<NewsItem key={post.id} post={post} />
			))}
		</S.ContainerItem>
	);
};

export default NewsList;