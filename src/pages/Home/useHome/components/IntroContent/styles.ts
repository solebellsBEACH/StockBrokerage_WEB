import styled from 'styled-components'
import Lottie from "lottie-react";
export const Container = styled.div`
width:100%;
/* min-height:40rem; */
background-color:${props => props.theme.templateColor1};

display:flex;
justify-content: center;
align-items: center;
`;


export const Content = styled.div`
margin-top:2rem;
width:55%;
display:flex;
flex-direction: row;
@media(max-width:1000px){
    width:80%;
    flex-direction: column;
    align-items: center;
}
`;

export const ContentLeft = styled.div`
width:65%;
min-height:30rem ;
margin:5rem 0 ;
@media(max-width:900px){
    width:70%;
}
h1{
    font-weight:900 ;
    font-size:24px;
    color:${props => props.theme.white} ;
    margin-bottom:1rem;
}
h2{
    font-weight:300 ;
    font-size:22px;
    color:${props => props.theme.white} ;
}
`;

export const MoneyAnimation = styled(Lottie)`
 height:60rem;
 margin-top:-10rem ;
@media(max-width:900px){
  margin-top:-6rem;
  height:60vw ;
}
@media(max-width:600px){
  margin-top:-5rem;
  height:80vw ;
}
`