import React from 'react'
import { Container, Content, ContentLeft } from './styles'
import InformationJSON from './information.json'
import { Kbd } from '@chakra-ui/react'
import Lottie from "lottie-react";
import LottieJSON from '../../../../../assets/lottieFiles/money-investment.json'

export const IntroContent = () => {
    return (
        <Container>
            <Content>
                <ContentLeft>
                    <h1>{InformationJSON.name}</h1>
                    <h2>{InformationJSON.description}</h2>
                    <h2>{InformationJSON.techDescription} <Kbd background='gray'>yarn cypress</Kbd></h2>
                </ContentLeft>
                <Lottie animationData={LottieJSON} />;
            </Content>
        </Container>
    )
}