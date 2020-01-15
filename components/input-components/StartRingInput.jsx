import React from 'react'

import InputComponent from './InputComponent';

const StartRingInput = (props) => {
    const color = 'color-title-outer'
    return (
        <div>
            <InputComponent 
                title='Utfylling foran' 
                inputDataOnChange={props.inputDataOnChange}
                submit={props.submit}
                value={props.value}
                deleteAllDimensionRings={props.deleteAllStartRings}
                background='outer-rings-background'
                deleteGroup={props.allStartRingDelete}
                close={props.openCloseStartInputWindow}
                hideInputComponent={props.hideStartInputComponent}
                color={color}
            />
        </div>
    )
}

export default StartRingInput