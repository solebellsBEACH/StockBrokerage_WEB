import { Text } from '@chakra-ui/react'
import React from 'react'
import { Container, ThanksIcon } from './styles'
import ThanksJSON from '../../../../../assets/lottieFiles/team.json'

export const Footer = () => {
    return (
        <Container>
            <ThanksIcon animationData={ThanksJSON}/>
            <Text
            marginLeft={5}
            fontSize={25}
            fontWeight='extrabold'
            color='white'
            >Obrigado por avaliar meu desempenho, espero que agrade e que eu venha agregar muito ao time</Text>
        </Container>
    )
}