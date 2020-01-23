import React from 'react';
import Modal from './Modal';


const WriteValue = (props) => {
    return (
        <div>
            <Modal close={props.openCloseWriteValueModal} title='Skriv en verdi' message='Du må skrive inn en verdi i feltet.'/>
             
        </div>
    )
}

export default WriteValue
