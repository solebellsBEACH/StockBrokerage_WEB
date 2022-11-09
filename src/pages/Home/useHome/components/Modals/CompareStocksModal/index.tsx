import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Spinner, Stat, StatHelpText, StatLabel, StatNumber, Text, useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IHomeDuckInitialState } from '../../../../../../types/interface';

interface ICompareStocksModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CompareStocksModal = (props: ICompareStocksModalProps) => {
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const toast = useToast()
    const { isOpen, onClose } = props
    const date = new Date().toString();
    const splitDate = date.split(' ')
    const formatDate = { dayWeek: splitDate[0], mouth: splitDate[1], day: splitDate[2], year: splitDate[3] }

    return (
        <>
            {homeData.error ? () => {
                toast({
                    title: `Erro ao pesquisar a ação selecionada, por favor selecione outra!!`,
                    status: 'error',
                    isClosable: true,
                })
                onClose()
            } :
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        {!homeData.loading ? <>
                            <ModalHeader
                                fontSize={25}
                            >Comparando Ações</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <SimpleGrid columns={[1, 2, 3]} spacing={3}>
                                    {homeData.compareStocksData?.lastPrices.map((e, i) => <Box
                                        display='flex'
                                        flexDirection='column'
                                        key={'StockItem' + i}
                                    >
                                        <Text
                                            fontSize={20}
                                            fontWeight='extrabold'
                                        >{e.name}</Text>
                                        <Stat>
                                            <StatLabel>Last Price</StatLabel>
                                            <StatNumber>£{e.lastPrice}</StatNumber>
                                            <StatHelpText>{e.pricedAt}</StatHelpText>
                                        </Stat>
                                    </Box>)}
                                </SimpleGrid>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Fechar
                                </Button>
                            </ModalFooter>
                        </> : <ModalBody
                        >
                            <Box
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                height={330}
                            ><Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                /></Box>
                        </ModalBody>}
                    </ModalContent>
                </Modal>
            }
        </>
    )
}