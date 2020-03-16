import React from 'react'
import InputCommonComponent from './InputCommonComponent'

const RingInputSC = (props) => {
    return (
        <div>
       
        <InputCommonComponent 
            title='Ring'
            submit={props.executeRingInput}
            change={props.getRingInputSCMethod}
            placeholder='Legg til ring'
            inputRef={props.inputRef}
            
        />
        </div>
    )
}

export default RingInputSC
