import styled from 'styled-components'
import { Autocomplete } from 'chakra-ui-simple-autocomplete';
 
export const Container  = styled.div`
width:100%;
min-height:20rem;
background-color:${props => props.theme.white};

display:flex;
justify-content: center;
align-items: center;
padding-bottom: 5rem;

`

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

export const ContentRight = styled.div`
width:100%;
min-height:30rem ;
margin:2rem 0 ;
@media(max-width:900px){
    width:70%;
}

@media(max-width:1000px){
    width:90%;
}
h1{
    font-weight:900 ;
    font-size:30px;
    color:${props => props.theme.templateColor4} ;
    margin-bottom:1rem;
}
h2{
    font-weight:900 ;
    font-size:24px;
    max-width:25rem ;
    margin-left:2rem;
    margin-bottom:2rem;
    color:${props => props.theme.templateColor2} ;
}

`;

export const CoinsIcon = styled.img`
  height:25vw ;
  margin-top:5rem;
  @media(max-width:600px){
  margin-top:0rem;
  height:80vw ;
}
@media(max-width:1000px){
  margin-top:0rem;
  height:60vw ;
}

`

export const StyledAutocomplete = styled(Autocomplete)`
border:1px solid ${props => props.theme.templateColor2} ;
padding:0.4rem;
border-radius:10px;
width:20vw;
@media(max-width:1000px){
    width:30rem;
}
`