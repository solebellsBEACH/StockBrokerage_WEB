import React from 'react'
import { Container , ErrorIcon} from './styles'
import Icon404 from '../../assets/404_Icon.svg'
export const NotFound404 = () => {
    return (
        <Container>
            <ErrorIcon src={Icon404} />
        </Container>
    )
}