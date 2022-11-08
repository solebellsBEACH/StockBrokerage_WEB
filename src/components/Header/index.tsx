import React from 'react'
import { Container, ContentLeft, ContentRight, Links, Logo, Title } from './styles'
import EtheriumLogo from '../../assets/etherium_logo.svg'
import { Grid, SimpleGrid, WrapItem } from '@chakra-ui/react'

export const Header = () => {
    const links: { name: string, url: string }[] = [{ name: 'Container', url: 'home' }, { name: 'Container', url: 'home' }, { name: 'Container', url: 'home' }, { name: 'Container', url: 'home' }]
    return (
        <Container>
            <ContentLeft><Logo src={EtheriumLogo} /><Title>Stock<h1>Bro</h1>kerage</Title></ContentLeft>
            <ContentRight>
                <SimpleGrid
                    columns={[3, links.length]} spacing={2}
                >{links.map((e, i) => <WrapItem key={'links' + i}><Links onClick={() => { console.log(e) }}>{e.name}</Links></WrapItem>)}
                </SimpleGrid>
            </ContentRight>
        </Container>
    )
}