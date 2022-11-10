import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Button, FormHelperText, FormLabel, Input, Radio, RadioGroup, SimpleGrid, Spinner, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../../../../../../styles/theme';
import { IFormControlContentProps, IHomeDuckInitialState } from '../../../../../../../types/interface';
import { Creators as HomeActions } from '../../../../../../../store/ducks/home'



export const FormControlContent = (props: IFormControlContentProps) => {

    const dispatch = useDispatch();
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const {
        stock,
        handleSearch,
        blockName,
        stockNameOnChange,
        setSelectedStock,
        selectedStock,
        handleGetHistoryPrice
    } = props

    return (
        <>
            <FormLabel>Pesquise o nome da ação</FormLabel>
            <Box
                display='flex'
                flexDirection='row'
            >
                <Input placeholder='Nome da ação...' id='cypress-GetHistoryPrice-INPUT'value={stock} onChange={e => stockNameOnChange(e.target.value)} />
                <Button
                id='cypress-GetHistoryPrice-SEARCH-BUTTON'
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
            <FormHelperText
                color='white'
            >Click no botão para realizar a consulta.</FormHelperText>
        </>
    )
}