import styled from "styled-components";

export const ContainerComment = styled.div`
   width:820px;
   display: flex;
   justify-content: space-evenly;
   border-bottom:1px solid #ffffff;
   span{
      font-family: 'Permanent Marker', cursive;
      font-weight: 700;
   }
   span.comment{
      display: inline-block;
      word-break: break-all;
      display: flex;
      max-width:640px;
      width:100%;
      font-weight: 400;
      word-wrap: break-word;
   }
   .rotating-triangels-wrapper{
      margin:0 auto;
   }
`