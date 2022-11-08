import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Creators as HomeActions } from '../../../../../../store/ducks/home'
import { IHomeDuckInitialState } from '../../../../../../types/interface';

interface IGetActualPriceModalProps {
    isOpen: boolean;
    onClose: () => void;
    stock: string;
}

export const GetActualPriceModal = (props: IGetActualPriceModalProps) => {

    const dispatch = useDispatch()
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const { isOpen, onClose } = props
    const date = new Date().toString();
    const splitDate = date.split(' ')
    const formatDate = { dayWeek: splitDate[0], mouth: splitDate[1], day: splitDate[2], year: splitDate[3] }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
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
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}