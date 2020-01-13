import React from 'react';

const LabelComponent = props => {
  return (
    <div className={`label-container ${props.css} ${props.css2}`}>
      <p>{props.value}</p>
      <style jsx>{`
        .label-container {
          background: linear-gradient(rgba(207, 0, 15, 1), rgba(192, 57, 43, 1));
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
        .label-container-correct {
            background: linear-gradient(rgb(1, 152, 117), rgb(38, 194, 129))
        }
        .label-container-correct2 {
            background: linear-gradient(rgb(1, 152, 117), rgb(38, 194, 129))
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
