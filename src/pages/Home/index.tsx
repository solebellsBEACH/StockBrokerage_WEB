import React from 'react'
import { Header } from '../../components'
import { Container } from './styles'
import { IntroContent } from './useHome/components'

export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <IntroContent/>
            </Container>
        </>

    )
}