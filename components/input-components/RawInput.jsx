import React from 'react'
import InputComponent from '../input-components/InputComponent';

const RawInput = (props) => {
    return (
        <div>
            <InputComponent title='Legg til Råmål' inputDataOnChange={props.getRawInput} submit={props.rawInputDataSubmit} value={props.value}/>
        </div>
    )
}

export default RawInput
