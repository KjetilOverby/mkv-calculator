import React from 'react'
import Modal from './Modal'

const TooMany = (props) => {
    return (
        <div>
            <Modal close={props.openCloseModal} title='Maks 8 plank' message='Du kan ikke legge inn fler enn 8 plank om gangen.'/>
        </div>
    )
}

export default TooMany
