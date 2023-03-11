 import * as S from "./index.styles";
 import { FC } from "react";
import { IButtonProps } from "types";

 const Button:FC<IButtonProps> = ({ onClick, buttonName, className }):JSX.Element => {
    
	return (
		<S.ContainerButton>
			<button className={className} onClick={onClick}>{buttonName}</button>
		</S.ContainerButton>
	);
};

export default Button;