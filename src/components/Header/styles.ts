import styled from 'styled-components'

export const Container = styled.header`
width:100% ;
min-height:5rem;
background:${props => props.theme.templateColor1} ;

display:flex ;
align-items: center;
justify-content: space-between;
padding: 0 3vw;

@media(max-width:730px){
    flex-direction: column;
    align-items: flex-start;
}
`

export const Title = styled.div`
margin:0 0.5rem;
display:flex ;
align-items: center;
font-weight:900 ;
font-size:20px;
color:${props => props.theme.white} ;
h1{
    font-size:30px;
    color:${props => props.theme.success} ;
}
`

export const ContentLeft = styled.div`
display:flex ;
align-items: center;

@media (max-width:290px){
    flex-direction: column;
    margin-right:3rem;
}
`
export const ContentRight = styled.div`
@media(max-width:730px){
    margin-bottom:1rem;
}
`
export const Logo = styled.img`
height:4rem;
`
export const Links = styled.h1`
font-weight:900 ;
font-size:15px;
color:${props => props.theme.white} ;
text-transform:uppercase;
margin:0 0.5rem;
@media (max-width:290px){
    font-size:10px;
}
`