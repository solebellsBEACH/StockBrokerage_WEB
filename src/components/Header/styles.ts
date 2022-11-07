import styled from 'styled-components'

export const Container = styled.header`
width:100% ;
min-height:5rem;
background:${props => props.theme.templateColor1} ;

display:flex ;
align-items: center;
justify-content: space-between;
padding: 0 3vw;
`

export const Title = styled.h1`
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
margin-right:10rem;
`
export const ContentRight = styled.div`
min-height:5rem;
display:flex ;
align-items: center;
`
export const Logo = styled.img`
height:4rem;
`
export const Links = styled.h1`
font-weight:900 ;
font-size:15px;
color:${props => props.theme.white} ;
text-transform:uppercase;
margin:0 1rem;
`