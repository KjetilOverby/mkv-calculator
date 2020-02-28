import React from 'react'

import InputComponent from './InputComponent';

const StartRingInput = (props) => {
    const color = 'color-title-outer'
    const inputColor = 'input-color-green'
    const placeholder = 'Ringer foran'
    
    return (
        <div>
            <InputComponent 
                title='Utfylling foran' 
                inputDataOnChange={props.inputDataOnChange}
                submit={props.submit}
                value={props.value}
                deleteAllDimensionRings={props.deleteAllStartRings}
                background='outer-rings-background'
                backgroundBtn='outer-btn-background'
                deleteGroup={props.allStartRingDelete}
                close={props.openCloseStartInputWindow}
                hideInputComponent={props.hideStartInputComponent}
                color={color}
                inputColor={inputColor}
                placeholder={placeholder}
                
              
            />
        </div>
    )
}

export default StartRingInput