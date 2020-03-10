import React from 'react';

const LabelComponent = props => {
  return (
    <div className={`label-container ${props.css} ${props.css2} `}>
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
          color: white;
          font-weight: bold;
          background: red;
          
          

        
        }
     
      
      
       
        .label-container-correct {
            background: var(--input-title-inner-rings);
            color: var(--input-title-outer-rings);
        }
        .label-container-correct2 {
            background: var(--input-title-inner-rings);
            color: var(--input-title-outer-rings);
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
