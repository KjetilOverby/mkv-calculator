import React from 'react'
import Modal from './Modal'

const TooHigh = (props) => {
    return (
        <div>
            <Modal close={props.openCloseTooHigh} title='For høy verdi' message='Du kan ikke legge inn høyere verdi enn 80' />
        </div>
    )
}

export default TooHigh
