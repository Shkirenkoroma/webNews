import * as S from "./index.styles";
import { FC } from 'react';
import { RotatingTriangles } from "react-loader-spinner";
import { ICommentData } from "types";

const Comment:FC<ICommentData> = ({ item }):JSX.Element => {
	
	return (
		<S.ContainerComment>
			{item ? (
				<div>
					<div>
						<span>№:</span>
						{item.id}
					</div>
					<div>
						<span>Автор:</span>
						{item.by}
					</div>
					<div>
						<span>Комментарий:</span>
						<span className="comment">{item.text}</span>
					</div>
				</div>
			) : (
				<RotatingTriangles
					visible={true}
					height="40"
					width="40"
					colors={['#8C5E58', '#d18db9', '#af93ae']}
					wrapperClass="rotating-triangels-wrapper"
				/>
			)}
		</S.ContainerComment>
	);
};

export default Comment;
