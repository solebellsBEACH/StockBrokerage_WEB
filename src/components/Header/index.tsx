import React from 'react'
import { Container, ContentLeft, Logo, Title } from './styles'
import EtheriumLogo from '../../assets/etherium_logo.svg'

export const Header = () => {
    return (
        <Container>
            <ContentLeft><Logo src={EtheriumLogo} /><Title>Stock<h1>Bro</h1>kerage</Title></ContentLeft>
        </Container>
    )
}