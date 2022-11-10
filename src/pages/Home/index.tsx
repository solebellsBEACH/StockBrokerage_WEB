import React from 'react'
import { Header } from '../../components'
import { Container } from './styles'
import {
    CompareStocksContent,
    GetActualPriceContent,
    GetHistoryPriceContent,
    IntroContent
} from './useHome/components'
import { Footer } from './useHome/components/Footer'

export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <IntroContent />
                <GetActualPriceContent />
                <GetHistoryPriceContent />
                <CompareStocksContent/>
                <Footer/>
            </Container>
        </>

    )
}