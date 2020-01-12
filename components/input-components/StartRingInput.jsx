import React from 'react'

import InputComponent from './InputComponent';

const StartRingInput = (props) => {
    return (
        <div>
            <InputComponent 
                title='Utfylling foran' 
                inputDataOnChange={props.inputDataOnChange}
                submit={props.submit}
                value={props.value}
                deleteAllDimensionRings={props.deleteAllStartRings}
                background='outer-rings-background'
            />
        </div>
    )
}

export default StartRingInput