import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, List, ListItem, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { theme } from '../../../../../../../styles/theme'
import { IFormControlContentProps, IHistoryItem, IHomeDuckInitialState } from '../../../../../../../types/interface'
import { Creators as HomeActions } from '../../../../../../../store/ducks/home'
import { useDispatch, useSelector } from 'react-redux'
import { ContentButtons } from './styles'

export const HistoryTabs = (props: IFormControlContentProps) => {
    const { selectedStock } = props
    const [modeRequest, setModeRequest] = useState<'week' | "monthly" | 'day'>('week')
    const tabs: { name: string, mode: 'week' | "monthly" | 'day' }[] = [
        { name: 'Semanalmente', mode: 'week' },
        { name: 'Mensalmente', mode: 'monthly' },
        { name: 'Diariamente', mode: 'day' }
    ]
    const dispatch = useDispatch();
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)

    useEffect(() => {
        dispatch(HomeActions.getHistoryStockRequest({ symbol: selectedStock, mode: modeRequest }))
    }, [modeRequest])
    // getHistoryStock
    const returnItems = () => {
        const items: IHistoryItem[] = Object.values(homeData?.historyData?.['Weekly Time Series'])
        const keys = Object.keys(homeData?.historyData?.['Weekly Time Series'])
        let i;
        const arrayComponents = []
        for (i = 0; i < 10; i++) {
            arrayComponents.push(<Box
                padding={1}
                paddingLeft={2}
                backgroundColor={theme.templateColor5}
                fontWeight='extrabold'
            >
                No dia {keys[i]}
                <ListItem
                    fontWeight='bold'
                >Abriu com - {items[i]?.["1. open"]} - Fechou Com - {items[i]?.["4. close"]}</ListItem>
            </Box>)
        }
        return arrayComponents
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
                    color={theme.templateColor5}
                >{selectedStock}</Box>
            </Box>
            <ContentButtons>
                {tabs.map(e => <Button
                    onClick={() => { setModeRequest(e.mode) }}
                    margin={1} colorScheme='blue' key={'tabs' + e.name}>{e.name}</Button>)}
            </ContentButtons>
            <Box
                w='100%'
                display='flex'
                justifyContent='center'
            >
                <List
                    marginTop={5}
                    display={homeData.historyData ? 'inline-block' : 'flex'}
                    justifyContent='center'
                    spacing={3}>
                    {homeData.historyData && !homeData.loading ? returnItems() : <Spinner size='xl' />}
                </List>
            </Box>
        </Box>
    )
}
