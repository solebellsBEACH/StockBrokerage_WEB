import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { theme } from '../../../../../../../styles/theme'
import { IFormControlContentProps } from '../../../../../../../types/interface'
import { Creators as HomeActions } from '../../../../../../../store/ducks/home'
import { useDispatch } from 'react-redux'

export const HistoryTabs = (props: IFormControlContentProps) => {
    const { selectedStock } = props
    const tabs = [
        { name: 'Semanalmente', mode: 'week' },
        { name: 'Mensalmente', mode: 'week' },
        { name: 'Diariamente', mode: 'week' }
    ]
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(HomeActions.getHistoryStockRequest({ symbol: selectedStock, mode: 'week' }))
    }, [])
    // getHistoryStock

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
            <Tabs
                marginTop={5}
                size='md'
                colorScheme='white'
                variant='enclosed'>
                <TabList>
                    {tabs.map(e => <Tab key={'tabs' + e.name}>{e.name}</Tab>)}
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}