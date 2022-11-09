import React, { useState } from 'react'
import { Container, Content, ContentLeft, HistoryPriceIcon } from './styles'
import HistoryPriceSVG from '../../../../../assets/history_price_Icon.svg';
import InformationJSON from './information.json';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Radio, RadioGroup, SimpleGrid, Spinner, useDisclosure, WrapItem } from '@chakra-ui/react';
import { theme } from '../../../../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as HomeActions } from '../../../../../store/ducks/home'
import { IHomeDuckInitialState } from '../../../../../types/interface';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { FormControlContent } from './components/FormControlContent';
import { HistoryTabs } from './components/HistoryTabs';

export const GetHistoryPriceContent = () => {
    const [stock, setStock] = useState('')
    const dispatch = useDispatch();
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const [selectedStock, setSelectedStock] = useState('')
    console.log(selectedStock)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const blockName = 'getHistoryPrice'

    const handleSearch = () => {
        dispatch(HomeActions.setOnFocusBlock({ block: blockName }))
        dispatch(HomeActions.getStocksRequest({ name: stock }))
        setStock('')
    }
    const stockNameOnChange = (e: string) => {
        setStock(e)
    }
    const handleCloseModal = () => {
        onClose()
        setStock('')
        dispatch(HomeActions.getStocksReset())
    }



    const handleGetHistoryPrice = () => {
        // dispatch(HomeActions.getActualPriceRequest({ name: stock }))
        onOpen()
    }

    const props = {
        stock,
        handleSearch,
        blockName,
        stockNameOnChange,
        setSelectedStock,
        selectedStock,
        handleGetHistoryPrice
    }

    return (
        <>
            {/* {selectedStock.length > 0 &&
                <StockInformationsModal
                    stock={selectedStock}
                    onClose={handleCloseModal}
                    isOpen={isOpen}
                />
            } */}
            <Container>
                <Content>
                    <ContentLeft>
                        <h1>{InformationJSON.name}</h1>
                        <h2>{InformationJSON.description}</h2>
                        <FormControl
                            borderColor={theme.gray1}
                            borderWidth={1}
                            padding={2}
                            borderRadius={10}
                            marginTop={5}
                            color={theme.white}
                            backgroundColor={theme.templateColor1}
                        >
                            {selectedStock.length !== 0 ? <HistoryTabs {...props}/> : <FormControlContent {...props} />}

                        </FormControl>
                    </ContentLeft>
                    <HistoryPriceIcon src={HistoryPriceSVG} />
                </Content>
            </Container>
        </>
    )
}