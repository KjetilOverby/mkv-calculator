import React from 'react';

const LabelComponent = props => {
  return (
    <div className={`label-container ${props.css} ${props.css2} ${props.focus} ${props.greenFocus}`}>
      <p>{props.value}</p>
      <style jsx>{`
        .label-container {
          
          position: absolute;
          left: -3rem;
          bottom: -15rem;
          width: 6rem;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--bright);
          font-weight: bold;
          

        
        }
        .red-focus {
          animation: redFocus 5s infinite
        }
        @keyframes redFocus {
          33% {background: #f1a9a0; color: #96281b}
          33% {background: #f64747}
          33% {background: #f1a9a0}
         
        }
        .green-focus {
          animation: greenFocus 5s infinite
        }
        @keyframes greenFocus {
          33% {background: #7befb2; color: #1e824c}
          33% {background: #16a085}
          33% {background: #7befb2}
         
        }
        .label-container-correct {
            background: linear-gradient(rgb(1, 152, 117), rgb(38, 194, 129));
            
        }
        .label-container-correct2 {
            background: linear-gradient(rgb(1, 152, 117), rgb(38, 194, 129));
            
        }
        @media only screen and (max-width: 1600px) {
          .label-container p {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LabelComponent;
