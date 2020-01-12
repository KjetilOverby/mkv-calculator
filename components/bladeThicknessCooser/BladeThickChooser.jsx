import React from 'react';

const BladeThickChooser = props => {
  return (
    <div className="blade-thick-container">
      <h1>Velg bladtype</h1>
      <div className='skille'>I</div>
      <ul>
        <li onClick={props.blade1}>2.2 - 3.6</li>
        <li onClick={props.blade2}>2.4 - 3.8</li>
        <li onClick={props.blade3}>2.6 - 4.0</li>
        <li onClick={props.blade4}>2.8 - 4.2</li>
        <li onClick={props.blade5}>3.0 - 4.4</li>
        <li onClick={props.blade6}>3.2 - 4.6</li>
      </ul>
      <style jsx>{`
        .blade-thick-container {
          position: absolute;
          background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
          height: 30rem;
          width: 40rem;
          z-index: 100;
          border-radius: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column
          
         
          box-shadow: 10px 10px 20px rgba(0,0,0,.5)
        }
        .skille {
          height: 25rem;
          width: 3px;
          background: white;
          margin-left: 3rem
        }
        .blade-thick-container ul li {
          color: white;
          font-size: 1.2rem;
          transition: 0.5s;
          list-style: none;
          width: 20rem;
          height: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: .6rem;
          font-weight: bold
        }
        .blade-thick-container h1 {
          color: white;
          font-size: 2rem;
          margin-left: 20rem;
          
        }
        .blade-thick-container ul {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-right: 18rem
        }
        .blade-thick-container ul li:hover {
          color: yellow;
          cursor: pointer;
          background: gray;
          border-radius: 10px
        }

        @media only screen and (max-width: 1600px) {
            .blade-thick-container ul li {
                height: 1.5rem;
                padding: .5rem
            }
        }
        @media only screen and (max-width: 400px) {
            .blade-thick-container ul li {
                height: 1rem
            }
        }
      `}</style>
    </div>
  );
};

export default BladeThickChooser;
