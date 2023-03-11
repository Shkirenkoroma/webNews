import styled from "styled-components";

export const ContainerNew = styled.div`
	position: relative;
	max-width: 740px;
	border-radius: 10px;
	margin: 25px auto;
	align-items: center;
	background: linear-gradient(#aaecec, #e2b5d7);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
   font-family: 'Permanent Marker', cursive;
	.content{
		display: flex;
		justify-content:space-between;
		width:100%;
		align-items: center;
	}
	.groupTitle{
display: flex;
flex-direction: column;
	}
	.groupButton{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 174px;
    gap: 45px;
    margin-right: 60px
	}
	h1{
		text-align: center;
		width:650px;
		margin:65px auto;
	}
	span{
		margin-bottom: 30px;
		margin-left:60px;
	}
`;
