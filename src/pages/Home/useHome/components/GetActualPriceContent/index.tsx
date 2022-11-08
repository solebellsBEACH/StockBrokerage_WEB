import React, { useEffect, useState } from 'react'
import { CoinsIcon, Container, Content, ContentRight, StyledAutocomplete } from './styles'
import { useDispatch } from 'react-redux';
import { Creators as HomeActions } from '../../../../../store/ducks/home'
import CoinsSVG from '../../../../../assets/coins_Icon.svg'
import InformationJSON from './information.json'
import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { theme } from '../../../../../styles/theme';
import { SearchIcon } from '@chakra-ui/icons'
import { Autocomplete, Option } from 'chakra-ui-simple-autocomplete';
const options = [
    { value: 'javascript', label: 'Javascript' },
    { value: 'chakra', label: 'Chakra' },
    { value: 'react', label: 'React' },
    { value: 'css', label: 'CSS' },
  ];

export const GetActualPriceContent = (props: any) => {

    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(HomeActions.getActualPriceRequest({ name: 'VAL' }))
    // }, [props])
    const [result, setResult] = useState<Option[]>([]);
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
                            <StyledAutocomplete
                            allowCreation={false}
                                options={options}
                                result={result}
                                setResult={(options: Option[]) => setResult(options)}
                                placeholder="Nome da ação"
                                notFoundText='Ação não encontrada'
                            />
                            <Button backgroundColor={theme.templateColor3} marginLeft={2} leftIcon={<SearchIcon color='white' />} variant='solid'></Button>
                        </Box>
                        <FormHelperText>Click no botão para realizar a consulta.</FormHelperText>
                    </FormControl>
                </ContentRight>
            </Content>
        </Container>
    )
}