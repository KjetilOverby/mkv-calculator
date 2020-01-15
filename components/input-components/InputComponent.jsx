import React from 'react'

const InputComponent = (props) => {
   
    
    return (
        <div className={`raw-input-container ${props.background} ${props.hideInputComponent}`}>
        <div className="title-container">
        <h3 className={`title ${props.color}`}>{props.title}</h3>
        </div>
        <form onSubmit={props.submit} className='common-input-form'>
          <input className='input-fields' type="text" value={props.value} onChange={props.inputDataOnChange}/>
          <button className={`btn-common-input ${props.backgroundBtn}`} >Legg til</button>
          
        </form>
        <div className={`common-input-form-btn`}>
        <button onClick={props.deleteGroup} className={`btn-common-input ${props.backgroundBtn}`} >Slett alle</button>
        <button className={`btn-common-input ${props.backgroundBtn}`} >Angre</button>
          <button onClick={props.close} className={`btn-common-input ${props.backgroundBtn}`} >Lukk</button>
          </div>
          <style jsx>{`
          .title-container {   
            position: absolute;
            left:2rem;
            top: 40%
          }
          .title {
              
              font-size: 4.3rem;
             
          }
          .color-title-raw {
            color: #065535;
          }
          .color-title-outer {
            color: #003366;
          }
          .input-fields {
    height: 3vh;
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
    padding-top: 1.5rem
}
 .raw-input-background {
    background: var(--inner-ring)
 }
 .outer-rings-background {
    background: var(--outer-ring)
 }
.raw-input-container {
    position: absolute;
    height: 19vh;
    width: 68vw;
    
    border-radius: 2px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    top: -20.5vh;
    left: 50%;
    margin-left: -34vw
   
   
 }
.hide-input-component {
    animation: hideInputComponent .2s forwards, none;
    top: 0
}
.show-input-component {
    animation: showInputComponent .2s forwards, none
}
@keyframes hideInputComponent {
    100% {transform: translateY(-20.5vh)}
}
@keyframes showInputComponent {
    100% {transform: translateY(20.5vh)}
}


 .raw-input-container h3 {
     margin: .4rem 0;
 }
 .btn-common-input {
     height: 3vh;
     width: 6rem;
     margin: .2rem .5rem;
     border-radius: 5px;
     outline: none;
     border: none;
     font-weigth: 100;
     z-imdex: 100;
     transition: .5s
    } 
    .btn-common-input:hover {
        background: gray
    }
 .raw-btn-background {
     background: var(--middle-bright)
 }
 .outer-btn-background {
     background: var(--bright)
 }
 .common-input-form-btn {
     display: flex;
     justify-content: center;
     width: 100%;
     margin-top: 2rem;
 }
 @media only screen and (max-width: 1600px) {
    .btn-common-input {
        height: 5vh
    }
}

          `}
          
          
          
          
          </style>
      </div>
    )
}

export default InputComponent
