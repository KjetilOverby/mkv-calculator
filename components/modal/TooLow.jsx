import React from 'react'
import Modal from './Modal'

const TooLow = (props) => {
    return (
        <div>
            <Modal close={props.openCloseTooLow} title='For lav verdi' message='Du kan ikke sette inn en verdi lavere enn 20'/>
        </div>
    )
}

export default TooLow
