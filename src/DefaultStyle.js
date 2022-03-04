const defaultStyles = {
    /**
     * Default Style of the modal component
     */
    'modal-background': {
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'background': 'rgba(0, 0, 0, 0.6)',
        'z-index': '2000',
    },
    'modal-wrapper': {
        'position': 'fixed',
        'display': 'flex',
        'align-items': 'end',
        'justify-content': 'center',
        'flex-direction': 'column',
        'background': 'white',
        'width': 'fit-content',
        'height': 'fit-content',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'border-radius': '5px',
        'padding': '5px',
    },
    'modal-close-button': {
        'cursor': 'pointer',
        'width': 'fit-content',
        'height': 'fit-content',
        'padding': '0',
        'padding-right': '5px',
        'padding-top': '5px',
        'color': '#081348'
    },
}

export default defaultStyles;