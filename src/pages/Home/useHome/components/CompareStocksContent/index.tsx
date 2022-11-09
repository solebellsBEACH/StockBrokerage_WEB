import React from 'react'
import { CompareIcon, Container, Content, ContentRight, StyledAutocomplete } from './styles'
import InformationJSON from './information.json'
import CompareSVG from '../../../../../assets/compare_Icon.svg'
import { Option } from 'chakra-ui-simple-autocomplete'
import { Box, Button } from '@chakra-ui/react'
import { theme } from '../../../../../styles/theme'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { Creators as HomeActions } from '../../../../../store/ducks/home'

export const CompareStocksContent = () => {

    const stocksToCompare = [
        { label: 'V', value: 'V' }, { label: 'VAL', value: 'VAL' }, { label: 'VALE', value: 'VALE' }
    ]
    const [result, setResult] = React.useState<Option[]>([]);
    const dispatch = useDispatch()
    return (
        <Container>
            <Content>
                <CompareIcon src={CompareSVG} />
                <ContentRight>
                    <h1>{InformationJSON.name}</h1>
                    <h2>{InformationJSON.description}</h2>
                    <Box
                        display='flex'
                        flexDirection='column'
                    >
                        <StyledAutocomplete
                            options={stocksToCompare}
                            result={result}
                            setResult={(options: Option[]) => setResult(options)}
                            placeholder="Digite o nome da ação..."
                            allowCreation={false}
                            renderBadge={(option) => {
                                return <Button
                                    marginRight={1}
                                    rightIcon={<CloseIcon w={10} h={10} />}
                                    marginBottom={1}
                                    color={theme.templateColor1}>{option.label}</Button>
                            }}
                        />
                        <Button
                            width='80%'
                            disabled={result.length < 2}
                            onClick={() => { dispatch(HomeActions.getCompareStocksRequest({ stocks: result })) }}
                            marginTop={2} color='white' backgroundColor={theme.templateColor5}>Comparar ações <SearchIcon marginLeft={30} w={20} h={20} /></Button>
                    </Box>
                </ContentRight>
            </Content>
        </Container>
    )
}