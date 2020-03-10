import React from 'react'
import StartLabelStaticComponent from './StartLabelStaticComponent'

const EndLabelStatic = (props) => {
    return (
        <div>
            <StartLabelStaticComponent position={-3} value={props.value}/>
        </div>
    )
}

export default EndLabelStatic


 