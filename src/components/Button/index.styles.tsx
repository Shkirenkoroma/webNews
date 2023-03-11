import styled from "styled-components";

export const ContainerButton = styled.div`
	button {
		border: 1px solid #000;
		border-radius: 10px;
		padding: 15px 10px;
		font-family: "Permanent Marker", cursive;
		font-weight: 700;
		background-color: transparent;
		&:hover {
			cursor: pointer;
			background-color: #000;
			color: #ffff;
			transition: all 700ms;
			border: 1px solid #fff;
		}
	}
	.backPage {
		position: absolute;
		left: 5px;
		top: 5px;
	}
`;
