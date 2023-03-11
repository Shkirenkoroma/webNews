import styled from "styled-components";

export const ContainerItem = styled.div`
	max-width: 600px;
	width: 100%;
	margin: 20px auto;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 50px;
	padding: 10px 45px;
	background: linear-gradient(#aaecec, #e2b5d7);
	&:hover {
		cursor: pointer;
		transform: scale(1.1);
		transition: ease transform 900ms;
	}
	p {
		font-weight: 700;
		color: #682828;
		font-family: "Permanent Marker", cursive;
	}
	p.espessial {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
`;
