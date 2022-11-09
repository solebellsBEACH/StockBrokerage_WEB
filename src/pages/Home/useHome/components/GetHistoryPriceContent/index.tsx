import React from 'react'
import { Container, Content, ContentLeft, HistoryPriceIcon } from './styles'
import HistoryPriceSVG from '../../../../../assets/history_price_Icon.svg';

export const GetHistoryPriceContent = () => {
    return (
        <Container>
        <Content>
            <ContentLeft>
                <h1>InformationJSON.name</h1>
                <h2>InformationJSON.description</h2>
                <h2>InformationJSON.techDescription </h2>
            </ContentLeft>
           <HistoryPriceIcon src={HistoryPriceSVG}/>
        </Content>
    </Container>
    )
}