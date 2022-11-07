import styled from 'styled-components'

export const Container = styled.div`
margin-top: 10vh;
width:100% ;
display:flex;
justify-content: center;
align-items: center;
`;

export const ErrorIcon = styled.img`
width:50vw;

@media (max-width: 1300px){
    width:60vw;
}

@media (max-width: 900px){
    width:70vw;
}
@media (max-width: 600px){
    width:80vw;
}
`;