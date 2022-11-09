import React from 'react'
import { Header } from '../../components'
import { Container } from './styles'
import {
    GetActualPriceContent,
    GetHistoryPriceContent,
    IntroContent
} from './useHome/components'

export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <IntroContent />
                <GetActualPriceContent />
                <GetHistoryPriceContent />
            </Container>
        </>

    )
}