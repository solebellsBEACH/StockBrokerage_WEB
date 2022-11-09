import { useEffect, useState } from 'react'
import { CoinsIcon, Container, Content, ContentRight } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { Creators as HomeActions } from '../../../../../store/ducks/home'
import CoinsSVG from '../../../../../assets/coins_Icon.svg'
import InformationJSON from './information.json'
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Radio, RadioGroup, SimpleGrid, Spinner, useDisclosure, WrapItem } from '@chakra-ui/react';
import { theme } from '../../../../../styles/theme';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import { IHomeDuckInitialState } from '../../../../../types/interface';
import { StockInformationsModal } from '../Modals/StockInformationsModal';

export const GetActualPriceContent = (props: any) => {

    const dispatch = useDispatch()
    const [stock, setStock] = useState('')
    const [selectedStock, setSelectedStock] = useState('')
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const stockNameOnChange = (e: string) => {
        setStock(e)
    }

    useEffect(() => {
        dispatch(HomeActions.getActualPriceRequest({ name: selectedStock }))
    }, [isOpen])

    const handleSearch = () => {
        setSelectedStock('')
        dispatch(HomeActions.getStocksRequest({ name: stock }))
        setStock('')
    }

    const handleCloseModal = () => {
        onClose()
        setStock('')
        dispatch(HomeActions.getStocksReset())
    }
    const handleGetActualPrice = () => {
        // dispatch(HomeActions.getActualPriceRequest({ name: stock }))
        onOpen()
    }
    return (
        <>
            {selectedStock.length > 0 &&
                <StockInformationsModal
                    stock={selectedStock}
                    onClose={handleCloseModal}
                    isOpen={isOpen}
                />
            }

            <Container>
                <Content>
                    <CoinsIcon src={CoinsSVG} />
                    <ContentRight>
                        <h1>{InformationJSON.name}</h1>
                        <h2>{InformationJSON.description}</h2>
                        <FormControl
                            borderColor={theme.gray1}
                            borderWidth={1}
                            padding={2}
                            borderRadius={10}
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
                                    backgroundColor={theme.templateColor3} marginLeft={2} leftIcon={!homeData.loading ? <SearchIcon color='white' /> : <></>} variant='solid'>{homeData.loading && <Spinner color='white' />}</Button>
                            </Box>
                            {homeData?.stocks?.length === 0 && <Box
                                marginTop={5}
                                marginBottom={5}
                                fontSize={19}
                                width='100%'
                                fontWeight='extrabold'
                                textAlign='center'
                            >Nenhum registro encontrado</Box>}
                            {homeData?.stocks &&
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
                            {homeData.stocks && homeData?.stocks?.length > 0 &&
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
                            <Button
                                width='100%'
                                color='white'
                                onClick={handleGetActualPrice}
                                disabled={selectedStock.length === 0}
                                backgroundColor={theme.templateColor3} marginTop={2} variant='solid'>
                                Buscar preço atual !
                            </Button>
                            <FormHelperText>Click no botão para realizar a consulta.</FormHelperText>
                        </FormControl>
                    </ContentRight>
                </Content>
            </Container>
        </>
    )
}