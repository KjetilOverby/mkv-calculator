import React from 'react';
import Modal from './Modal';


const WriteValue = (props) => {
    <script src="https://kit.fontawesome.com/f889c3af6d.js"></script>
    return (
        <div>
            <Modal close={props.openCloseWriteValueModal} title='Skriv en verdi' message='Du må skrive inn en verdi i feltet.'/>
           
        </div>
    )
}

export default WriteValue
