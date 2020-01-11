import React from 'react'

const InputComponent = (props) => {
    return (
        <div className="raw-input-container">
        <h3>{props.title}</h3>
        <form onSubmit={props.submit} className='common-input-form'>
          <input className='input-fields' type="text" value={props.value} onChange={props.inputDataOnChange}/>
          <button className='btn-common-input' >Legg til</button>
          
        </form>
        <div className='common-input-form-btn'>
        <button onClick={props.deleteAllDimensionRings} className='btn-common-input' >Slett alle</button>
        <button className='btn-common-input' >Angre</button>
          <button className='btn-common-input' >Lukk</button>
          </div>
          <style jsx>{`
          .input-fields {
    height: 2vh;
    font-size: 1vw;
    width: 3.5vw;
    border-radius: 10px;
    padding: .3rem .7rem;
    outline: none;
    margin-right: .7rem;
}
.common-input-form {
    display: flex;
    align-items: center;
}
.raw-input-container {
    position: absolute;
    height: 15vh;
    width: 20vw;
    background-color: rgba(107, 212, 190, 0.486); 
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
 }
 .raw-input-container h3 {
     margin: .4rem 0;
 }
 .btn-common-input {
     height: 3vh;
     width: 6rem;
     margin: .2rem .5rem;
     border-radius: 10px;
     outline: none;
     background-color: var(--middle-bright);
 }
 .common-input-form-btn {
     display: flex;
     justify-content: center;
     width: 100%;
     margin-top: 2rem;
     
 }
          `}</style>
      </div>
    )
}

export default InputComponent
