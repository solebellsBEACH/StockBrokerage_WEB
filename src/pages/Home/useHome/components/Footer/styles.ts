import styled from "styled-components";
import Lottie from "lottie-react";

export const Container  = styled.div`
width:100%;
min-height:10rem;
background-color:${props => props.theme.templateColor3};

display:flex;
justify-content: center;
align-items: center;
padding:2rem 0;
@media(max-width:600px){flex-direction:column;
    padding:0 2rem;}
`

export const ThanksIcon = styled(Lottie)`
width:100% ;
 margin-top:0rem ;
@media(max-width:400px){
}

`