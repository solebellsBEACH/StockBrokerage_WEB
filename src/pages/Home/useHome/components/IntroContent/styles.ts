import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:40rem;
background-color:${props => props.theme.templateColor1};

display:flex;
justify-content: center;
align-items: center;
`;


export const Content = styled.div`
margin-top:-5rem;
min-width:50rem;
display:flex;
flex-direction: row;
@media(max-width:900px){
    min-width:40rem;
    flex-direction: column;
}
height:30rem ;
`;

export const ContentLeft = styled.div`
width:20rem;
height:30rem ;

h1{
    font-weight:900 ;
    font-size:20px;
    color:${props => props.theme.white} ;
    margin-bottom:1rem;
}
h2{
    font-weight:300 ;
    font-size:18px;
    color:${props => props.theme.white} ;
}
`;