import React, { useEffect, useState } from 'react'
import { CoinsIcon, Container, Content, ContentRight, StyledAutocomplete } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { Creators as HomeActions } from '../../../../../store/ducks/home'
import CoinsSVG from '../../../../../assets/coins_Icon.svg'
import InformationJSON from './information.json'
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Spinner } from '@chakra-ui/react';
import { theme } from '../../../../../styles/theme';
import { SearchIcon } from '@chakra-ui/icons'
import { Autocomplete, Option } from 'chakra-ui-simple-autocomplete';
import { IHomeDuckInitialState } from '../../../../../types/interface';
const options = [
    { value: 'javascript', label: 'Javascript' },
    { value: 'chakra', label: 'Chakra' },
    { value: 'react', label: 'React' },
    { value: 'css', label: 'CSS' },
];

export const GetActualPriceContent = (props: any) => {

    const dispatch = useDispatch()
    const [stock, setStock] = useState('')
    const [selectedStock, setSelectedStock] = useState('')
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)

    const stockNameOnChange = (e: string) => {
        setStock(e)
    }

    const handleSearch = () => {
        dispatch(HomeActions.getActualPriceRequest({ name: stock }))
    }
    return (
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
                            <Input placeholder='Nome da ação...' onChange={e => stockNameOnChange(e.target.value)} />
                            <Button
                                disabled={stock.length == 0}
                                onClick={handleSearch}
                                backgroundColor={theme.templateColor3} marginLeft={2} leftIcon={!homeData.loading ? <SearchIcon color='white' /> : <></>} variant='solid'>{homeData.loading && <Spinner color='white' />}</Button>
                        </Box>
                        <Button
                            width='100%'
                            color='white'
                            disabled={selectedStock.length == 0}
                            backgroundColor={theme.templateColor3} marginTop={2} variant='solid'>
                            Buscar preço atual !
                        </Button>
                        <FormHelperText>Click no botão para realizar a consulta.</FormHelperText>
                    </FormControl>
                </ContentRight>
            </Content>
        </Container>
    )
}