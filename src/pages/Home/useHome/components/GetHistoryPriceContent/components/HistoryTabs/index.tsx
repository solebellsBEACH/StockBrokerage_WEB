import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { theme } from '../../../../../../../styles/theme'
import { IFormControlContentProps } from '../../../../../../../types/interface'

export const HistoryTabs = (props: IFormControlContentProps) => {
    const { selectedStock } = props
    const tabs = [
        { name: 'Semanalmente' },
        { name: 'Mensalmente' },
        { name: 'Diariamente' }
    ]
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
                    {tabs.map(e => <Tab>{e.name}</Tab>)}
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