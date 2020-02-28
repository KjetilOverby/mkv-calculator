import React from 'react';

const InputComponent = props => {
  return (
    <div
      className={`raw-input-container ${props.background} ${props.hideInputComponent}`}
    >
      <div className="title-container">
        <h3 className={`title ${props.color}`}>{props.title}</h3>
      </div>
      <form onSubmit={props.submit} className="common-input-form">
        <input
          autoFocus
          placeholder={props.placeholder}
          type="text"
          value={props.value}
          onChange={props.inputDataOnChange}
          className={`input-fields ${props.inputColor} ${props.inputColorOuter} ${props.inputBorderColor}`}
        /> 
        <button className={`btn-common-input ${props.backgroundBtn}`}>
          Legg til
        </button>
      </form>
      <div className={`common-input-form-btn`}>
        <button
          onClick={props.deleteGroup}
          className={`btn-common-input ${props.backgroundBtn}`}
        >
          Slett alle
        </button>
        {/*  <button onClick={props.postList42} className={`btn-common-input ${props.backgroundBtn}`} >Angre</button> */}
        <button
          onClick={props.close}
          className={`btn-common-input ${props.backgroundBtn}`}
        >
          Lukk
        </button>
      </div>
      <style jsx>{`
          .title-container {
            position: absolute;
            left: 2rem;
            top: 40%;
          }
          .title {
            font-size: 2.3rem;
          }
          .color-title-arkiv {
            color: #7a2801;
          }
          .color-title-raw {
            color: var(--input-title-inner-rings);
          }
          .color-title-outer {
            color: var(--input-title-outer-rings);
          }

          .input-fields {
            height: 3vh;
            font-size: 1vw;
            width: 8.8rem;
            border: none;
            background: transparent;
            padding: 0.3rem 0.7rem;
            outline: none;
            margin-right: 0.7rem;
            
            
          }

           .input-border-color-outer {
               border-bottom: 1px solid var(--input-inner-rings)
               
           }
           .input-border-color-inner {
               border-bottom: 1px solid var(--input-outer-rings)
               
           }
           .input-color-outer {
            color: var(--input-inner-rings)
           }
           .input-color-inner {
            color: var(--input-outer-rings)
           }

          .common-input-form {
            display: flex;
            align-items: center;
            padding-top: 1.5rem;
          }
          .raw-input-background {
            background: var(--input-inner-rings);
          }
          .outer-rings-background {
            background: var(--input-outer-rings);
          }
          .search-post-background {
            background: var(--searchPost);
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
            margin-left: -34vw;
          }
          .hide-input-component {
            animation: hideInputComponent 0.2s forwards, none;
            top: 0;
          }
          .show-input-component {
            animation: showInputComponent 0.2s forwards, none;
          }
          @keyframes hideInputComponent {
            100% {
              transform: translateY(-20.5vh);
            }
          }
          @keyframes showInputComponent {
            100% {
              transform: translateY(20.5vh);
            }
          }

          .raw-input-container h3 {
            margin: 0.4rem 0;
          }
          .btn-common-input {
            height: 3vh;
            width: 10rem;
            margin: 0.2rem 0.5rem;

            outline: none;
            border: none;
            font-weigth: 100;
            z-index: 100;
            transition: 0.5s;
          }
          .btn-common-input:hover {
            background: gray;
            color: white;
          }
          .raw-btn-background {
            background: var(--input-title-inner-rings);
            color: var(--input-inner-rings);
          }
          .outer-btn-background {
            background: var(--input-title-outer-rings);
          }
          .common-input-form-btn {
            display: flex;
            position: absolute;
            width: 100%;
            flex-direction: column;
            margin-top: 2rem;
            left: 55vw;
          }
          @media only screen and (max-width: 1600px) {
            .btn-common-input {
              height: 5vh;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InputComponent;
