import React from 'react';

const Modal = props => {
  return (
    <div className="modal-container">
   />
      <div className="modal">
        <h1>{props.title}</h1>
        <p>{props.message}</p>
      
        <button autoFocus type='submit' onClick={props.close}>Lukk</button>
     
       
      </div>
      <style jsx>{`
        .modal-container {
          height: 100vh;
          width: 100vw;
          background: rgba(0, 0, 0, 0.8);
          position: absolute;
          top: 0;
          z-index: 150;
          animation: fadeIn .5s
        }
        .modal h1 {
            color: #f03434;
            font-size: 4rem
        }
        .modal p {
            font-size: 1.5rem;

        }
        .modal button {
            height: 2rem;
            width:5rem;
            background: #ffec8b;
            border-radius: 5px;
            border: none;
            transition: .5s;
        }
        .modal button:hover {
            background: #f4d03f
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .fadeIn {
          -webkit-animation-name: fadeIn;
          animation-name: fadeIn;
        }

        @-webkit-keyframes fadeInDown {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        .modal {
          height: 30vh;
          width: 50vw;
          background: var(--bright);
          position: absolute;
          left: 50%;
          margin-left: -50vh;
          top: 20vh;
          z-index: 200;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          animation: fadeInDown 0.4s;
        }
        @keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
/*         @keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
} */
        
        /* @keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
 */
      `}</style>
    </div>
  );
};

export default Modal;
