import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, List, ListItem, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { theme } from '../../../../../../../styles/theme'
import { IFormControlContentProps, IHistoryItem, IHomeDuckInitialState } from '../../../../../../../types/interface'
import { Creators as HomeActions } from '../../../../../../../store/ducks/home'
import { useDispatch, useSelector } from 'react-redux'
import { ContentButtons } from './styles'
import { CloseIcon } from '@chakra-ui/icons'

export const HistoryTabs = (props: IFormControlContentProps) => {
    const { selectedStock } = props
    const [tag, setTag] = useState<'Weekly Time Series' | "Monthly Time Series" | 'Time Series (Daily)' | null>(null)
    const [modeRequest, setModeRequest] = useState<'week' | "monthly" | 'day' | null>(null)
    const [name, setName] = useState<string>('')
    const tabs: { name: string, mode: 'week' | "monthly" | 'day', tag: 'Weekly Time Series' | "Monthly Time Series" | 'Time Series (Daily)' }[] = [
        { name: 'Semanalmente', mode: 'week', tag: 'Weekly Time Series' },
        { name: 'Mensalmente', mode: 'monthly', tag: 'Monthly Time Series' },
        { name: 'Diariamente', mode: 'day', tag: 'Time Series (Daily)' }
    ]
    const dispatch = useDispatch();
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)

    useEffect(() => {
        if (modeRequest) dispatch(HomeActions.getHistoryStockRequest({ symbol: selectedStock, mode: modeRequest }))
    }, [modeRequest])
    // getHistoryStock
    const returnItems = () => {
        const items: IHistoryItem[] = Object.values(homeData?.historyData?.[`${tag}`])
        const keys = Object.keys(homeData?.historyData?.[`${tag}`])
        let i;
        const arrayComponents = []
        for (i = 0; i < 10; i++) {
            arrayComponents.push(<Box
                padding={1}
                paddingLeft={2}
                backgroundColor={theme.templateColor5}
                fontWeight='extrabold'
                key={'Item' + i}
            >
                No dia {keys[i]}
                <ListItem
                    fontWeight='bold'
                >Abriu com - {items[i]?.["1. open"]} - Fechou Com - {items[i]?.["4. close"]}</ListItem>
            </Box>)
        }
        return arrayComponents
    }
    const handleResetProps = () => {
        dispatch(HomeActions.resetHistoryData())
        setTag(null)
        setModeRequest(null)
        setName('')
    }

    return (
        <Box
            margin={2}
            display='flex'
            flexDirection='column'
        >
            <Box
                fontWeight='bold'
                fontSize={19}
                display='flex'
                flexDirection='row'
                alignItems='center'
            // flexDirection='column'
            >
                Ver histórico de <Box
                    padding={0.5}
                    fontWeight='extrabold'
                    backgroundColor={theme.white}
                    marginLeft={2}
                    marginRight={2}
                    color={theme.templateColor5}
                >{selectedStock} </Box>{name}
            </Box>
            {!tag && <ContentButtons>
                {tabs.map(e => {
                    return <Button
                        onClick={() => {
                            setTag(e.tag)
                            setModeRequest(e.mode)
                            setName(e.name)
                        }}
                        margin={1} colorScheme='blue' key={'tabs' + e.name}>{e.name}</Button>
                })}
            </ContentButtons>}
            <Box
                w='100%'
                display='flex'
                justifyContent='center'
            >
                {homeData.historyData &&
                    <List
                        marginTop={5}
                        display={homeData.historyData ? 'inline-block' : 'flex'}
                        justifyContent='center'
                        spacing={3}>
                        {!homeData.loading ? returnItems() : <Spinner size='xl' color='white' />}
                    </List>
                }

            </Box>
            {tag && <Button
                marginTop={4}
                marginBottom={2}
                onClick={handleResetProps}
                w={10} h={10}
                color='white'
                backgroundColor={theme.templateColor3}
                variant='solid'>
                <CloseIcon w={15} h={15} />
            </Button>}

        </Box>
    )
}
