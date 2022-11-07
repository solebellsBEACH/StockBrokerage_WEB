import React from 'react'
import { Container, ContentLeft, ContentRight, Links, Logo, Title } from './styles'
import EtheriumLogo from '../../assets/etherium_logo.svg'

export const Header = () => {
    const links: { name: string, url: string }[] = [{ name: 'Container', url: 'home' }]
    return (
        <Container>
            <ContentLeft><Logo src={EtheriumLogo} /><Title>Stock<h1>Bro</h1>kerage</Title></ContentLeft>
            <ContentRight>
                {links.map(e => <Links onClick={() => { console.log(e) }}>{e.name}</Links>)}
            </ContentRight>
        </Container>
    )
}