import styled from 'styled-components'
export const Container = styled.div`
width:100%;
/* min-height:40rem; */
background-color:${props => props.theme.templateColor4};
padding:3rem 0;
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
    width:90%;
    flex-direction: column;
    align-items: center;
}
`;

export const ContentLeft = styled.div`
width:65%;
/* min-height:30rem ; */

@media(max-width:1000px){
    width:80%;
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
export const HistoryPriceIcon = styled.img`
  height:25vw ;
  @media(max-width:600px){
  margin-top:2rem;
  height:80vw ;
}
@media(max-width:1000px){
  margin-top:2rem;
  height:60vw ;
}

`