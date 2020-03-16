import React from 'react'
import InputCommonComponent from './InputCommonComponent'

const RawInputComponent = (props) => {
    return (
       <div>
           <InputCommonComponent
           
            title='Råmål'
            submit={props.executeRawInput}
            change={props.getRawInputSCMethod}
            placeholder='Legg til råmål'
            inputRef={props.inputRef}
        
            
            />
       </div>
    )
}

export default RawInputComponent
