import React, { useEffect } from 'react'
import { Container } from './styles'
import { useDispatch } from 'react-redux';
import { Creators as HomeActions } from '../../../../../store/ducks/home'

export const GetActualPriceContent = (props: any) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(HomeActions.getActualPriceRequest({name:'VAL'}))
    }, [props])

    return (
        <Container>
            GetActualPriceContent
        </Container>
    )
}