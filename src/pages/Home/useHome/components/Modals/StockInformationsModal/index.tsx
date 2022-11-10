import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Stat, StatHelpText, StatLabel, StatNumber, useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IHomeDuckInitialState } from '../../../../../../types/interface';

interface IStockInformationsModalProps {
    isOpen: boolean;
    onClose: () => void;
    stock: string;
}

export const StockInformationsModal = (props: IStockInformationsModalProps) => {
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
                            <ModalHeader>{homeData.actualPriceData?.name}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stat>
                                    <StatLabel>Valor atual da ação</StatLabel>
                                    <StatNumber>£{homeData.actualPriceData?.lastPrice}</StatNumber>
                                    <StatHelpText>{formatDate.dayWeek} {formatDate.day} - {formatDate.mouth} {formatDate.year}</StatHelpText>
                                </Stat>
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                 id='cypress-GetActualPriceContent-FECHAR-MODAL'
                                colorScheme='blue' mr={3} onClick={onClose}>
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