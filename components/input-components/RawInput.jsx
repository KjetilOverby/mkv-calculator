import React from 'react'
import InputComponent from '../input-components/InputComponent';

const RawInput = (props) => {
    return (
        <div>
            <InputComponent
             title='Legg til Råmål' inputDataOnChange={props.getRawInput} 
             submit={props.rawInputDataSubmit} value={props.value} 
             background='raw-input-background' 
             backgroundBtn='raw-btn-background'
             deleteGroup={props.allRawInputDelete}
             close={props.openCloseRawInputWindow}
             />
        </div>
    )
}

export default RawInput
