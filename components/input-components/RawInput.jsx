import React from 'react'
import InputComponent from '../input-components/InputComponent';

const RawInput = (props) => {
    const color = 'color-title-raw'
    return (
        <div>
            <InputComponent
             title='Råmål' inputDataOnChange={props.getRawInput} 
             submit={props.rawInputDataSubmit} value={props.value} 
             background='raw-input-background' 
             backgroundBtn='raw-btn-background'
             deleteGroup={props.allRawInputDelete}
             close={props.openCloseRawInputWindow}
             hideInputComponent={props.hideRawInputComponent}
             color={color}
             />
        </div>
    )
}

export default RawInput
