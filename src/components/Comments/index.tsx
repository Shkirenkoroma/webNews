import * as S from "./index.styles";
import Comment from "./Comment";
import  { FC } from "react";
import { IPostsData } from "types";

const Comments: FC<IPostsData> = ({ items }): JSX.Element => {

	return (
		<S.ContainerComments>
			{Array.isArray(items) ? (
				items.map((item) => <Comment key={item.id} item={item} />)
			) : (
				<div className="nocomments">Комментариев пока нет...</div>
			)}
		</S.ContainerComments>
	);
};

export default Comments;
