import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import defaultStyles from './DefaultStyle';
import getDefaultStyles from './Utils';
import PropTypes from "prop-types";


const Background = styled.div`
    //Set the styles from the default styles object
    ${({ theme, type }) => {
        return getDefaultStyles(theme, type);
    }}
    
    // custom styles
    ${({ customBackgroundStyle }) => customBackgroundStyle}
`;

const ModalWrapper = styled.div`
    
    //Set the styles from the default styles object
    ${({ theme, type }) => {
        return getDefaultStyles(theme, type);
    }}
    
    // custom styles
    ${({ customWrapperStyle }) => customWrapperStyle}
`;

const CloseModalButton = styled.div`
    //Set the styles from the default styles object
    ${({ theme, type }) => {
        return getDefaultStyles(theme, type);
    }}
    
    // custom styles
    ${({ closeModalButtonStyle }) => closeModalButtonStyle}
`;

const Modal = ({ showModal, setShowModal, customBackgroundStyle, customWrapperStyle, modalCloseButton, closeModalButtonStyle, children, ...props }) => {
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <div>
            {showModal ? (
                <Background
                    theme={defaultStyles}
                    type={'modal-background'}
                    onClick={closeModal}
                    ref={modalRef}
                    customBackgroundStyle={customBackgroundStyle} {...props}>
                    <ModalWrapper
                        theme={defaultStyles}
                        type={'modal-wrapper'}
                        showModal={showModal}
                        customWrapperStyle={customWrapperStyle} {...props}>
                        {modalCloseButton &&
                            <CloseModalButton
                                onClick={() => setShowModal(prev => !prev)}
                                theme={defaultStyles}
                                type={'modal-close-button'}
                                closeModalButtonStyle={closeModalButtonStyle}>
                                X
                            </CloseModalButton>}

                        {children}
                    </ModalWrapper>
                </Background>
            ) : null}
        </div>
    );
};

Modal.propTypes = {
    /**
     *	Default Style of the component
     */
    theme: PropTypes.object,
    /**
     *	Show modal
     */
    showModal: PropTypes.bool.isRequired,
    /**
     *	Show modal function
     */
    setShowModal: PropTypes.func.isRequired,
    /**
     *	Show modal close button or not
     */
    modalCloseButton: PropTypes.bool,
}

Modal.defaultProps = {
    theme: defaultStyles,
    showModal: false,
    setShowModal: () => { },
    modalCloseButton: true,
}

export default Modal;
