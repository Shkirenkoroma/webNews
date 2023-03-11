import styled from "styled-components";

export const ContainerComments = styled.div`
	margin-top: 150px;
	width: 100%;
	overflow-y: scroll;
    height: 250px;
    overflow-x: hidden;
	flex-wrap: wrap;
	display: flex;
	div {
		flex-direction: column;
	}
	.nocomments{
		margin:0 auto;
		}
`;
