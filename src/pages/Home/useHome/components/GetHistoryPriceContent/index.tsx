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
import { StockInformationsModal } from '../Modals/StockInformationsModal';

export const GetHistoryPriceContent = () => {
    const [stock, setStock] = useState('')
    const dispatch = useDispatch();
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const [selectedStock, setSelectedStock] = useState('')
    const [interval, setInterval] = useState({ init: '', final: '' })
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
                            <FormLabel>Pesquise o nome da ação</FormLabel>
                            <Box
                                display='flex'
                                flexDirection='row'
                            >
                                <Input placeholder='Nome da ação...' value={stock} onChange={e => stockNameOnChange(e.target.value)} />
                                <Button
                                    disabled={stock.length === 0}
                                    onClick={handleSearch}
                                    backgroundColor={theme.templateColor5} marginLeft={2} leftIcon={!homeData.loading ? <SearchIcon color='white' /> : <></>} variant='solid'>{homeData.loading && <Spinner color='white' />}</Button>
                            </Box>
                            {homeData?.stocks?.length === 0 && <Box
                                marginTop={5}
                                marginBottom={5}
                                fontSize={19}
                                width='100%'
                                fontWeight='extrabold'
                                textAlign='center'
                            >Nenhum registro encontrado</Box>}
                            {homeData.onFocusBlock == blockName && homeData?.stocks &&
                                <Button
                                    marginTop={4}
                                    marginBottom={2}
                                    onClick={() => { dispatch(HomeActions.getStocksReset()) }}
                                    w={10} h={10}
                                    color='white'
                                    backgroundColor={theme.templateColor3}
                                    variant='solid'>
                                    <CloseIcon w={15} h={15} />
                                </Button>}
                            {homeData.onFocusBlock == blockName && homeData.stocks && homeData?.stocks?.length > 0 &&
                                <Box
                                    margin={1}
                                    padding={2}
                                    height={300}
                                    overflow='auto'
                                    backgroundColor={theme.templateColor1}
                                >
                                    <RadioGroup onChange={setSelectedStock} value={selectedStock}>
                                        <SimpleGrid
                                            columns={[1]} spacing={2}
                                        >{homeData.stocks.map((e, i) => <WrapItem key={'stocks' + i}><Radio value={e['1. symbol']}>{e['2. name']}</Radio></WrapItem>)}
                                        </SimpleGrid>
                                    </RadioGroup>
                                </Box>}
                            {selectedStock.length !== 0 &&
                                <>
                                    <Box
                                        marginTop={3}
                                        display='flex'
                                        justifyContent='space-between'
                                    >
                                        <Input
                                            size="md"
                                            type='date'
                                            width='49%'
                                            onChange={e => { console.log(e) }}
                                        />
                                        <Input
                                            size="md"
                                            type='date'
                                            width='49%'
                                        />

                                    </Box>
                                    <FormHelperText
                                        color='white'
                                    >Insira o intervalo que deseja procurar</FormHelperText>
                                </>}

                            <Button
                                width='100%'
                                color='white'
                                onClick={handleGetHistoryPrice}
                                disabled={selectedStock.length === 0}
                                backgroundColor={theme.templateColor3} marginTop={2} variant='solid'>
                                Buscar preço histórico!
                            </Button>
                            <FormHelperText
                                color='white'
                            >Click no botão para realizar a consulta.</FormHelperText>
                        </FormControl>
                    </ContentLeft>
                    <HistoryPriceIcon src={HistoryPriceSVG} />
                </Content>
            </Container>
        </>
    )
}