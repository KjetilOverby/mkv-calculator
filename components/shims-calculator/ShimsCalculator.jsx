import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import RawInputComponent from './RawInputSC';
import RingInputSC from './RingInputSC';
import ShimsInpputSC from './ShimsInpputSC';

const ShimsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--sidebarBg);
  padding: 10rem;
  width: 100vw;
  height: 100vh;
  filter: brightness(120%);
  position: absolute;
  align-items: center;
  padding-top: 20vh;
  
  z-index: 10;
 
  
`;


const OutInputContainer = styled.div`
  display: flex;
  flex-direction: row;

 
`;


const OutputContainer = styled.div`
  width: 30vw;
 
`;

const RawInputComponentStyle = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
`;

const Button = styled.button`
  height: 5vh;
  width: 9vw;
  border: none;
  
  font-size: 1rem;
  background: linear-gradient(
    120deg,
    var(--input-outer-rings) 50%,
    var(--input-inner-rings) 50%
  );
  background-size: 220%;
  color: var(--input-inner-rings);
  margin-right: 2rem;
  transition: background 0.5s, color 0.5s;
  &:hover {
    background-position: 100%;
    color: var(--input-outer-rings);
  }
`;
const HiddenButton = styled.div`
  height: 5vh;
  width: 9vw;
  visibility: hidden;
  margin-right: 2rem;
`;

const ShimsCalculator = () => {
  const [viggSc, setViggSc] = useState(1.4);

  const [getRawInputSC, setgetRawInputSC] = useState('');
  const [rawValueSC, setRawValueSC] = useState('');

  const [getRingValueSC, setGetRingValueSC] = useState('');
  const [ringValueSC, setRingValueSC] = useState('');

  const [shimsCalcSC, setShimsCalcSC] = useState('');

  const [getShimsInputSC, setGetShimsInputSC] = useState('');
  const [shimsValueSC, setShimsValueSC] = useState('');

  const [getShimsInputSC2, setGetShimsInputSC2] = useState('');
  const [shimsValueSC2, setShimsValueSC2] = useState('');

  const [xValueSc, setXvalueSc] = useState();

  const [rawInputBool, setRawInputBool] = useState(true);
  const [ringInputBool, setRingInputBool] = useState(false);
  const [shimsInputBool, setShimsInputBool] = useState(false);

  const [showShims1, setShowShims1] = useState(false);
  const [showShims2, setShowShims2] = useState(false);

  const getRawInputSCMethod = e => {
    setgetRawInputSC(e.target.value);
  };

  const executeRawInput = e => {
    e.preventDefault();

    setRawValueSC(getRawInputSC);
    setRawInputBool(false);
    setRingInputBool(true);
   
  };
  const getRingInputSCMethod = e => {
    setGetRingValueSC(e.target.value);
  };
  const executeRingInput = e => {
    e.preventDefault();
    setRingValueSC(getRingValueSC);
    setRingInputBool(false);
    setShimsInputBool(true);
    setShowShims1(true);
  };

  const getShimsInputSCMethod = e => {
    setGetShimsInputSC(e.target.value);
  };
  const executeShimsInput = e => {
    e.preventDefault();
    setShimsValueSC2(getShimsInputSC);
    setShowShims2(true);
  };

  useEffect(() => {
    const xValRingVal = xValueSc - ringValueSC - shimsValueSC2;
    const rawValVigg = Number(rawValueSC) + viggSc;
    setShimsCalcSC(xValRingVal.toFixed(1));
    setXvalueSc(rawValVigg.toFixed(1));
    inputRef.current.focus()
   
   
  });
  

  const inputRef = useRef();

  const reset = () => {
    setShowShims1(false);
    setRawInputBool(true);
    setRingInputBool(false);
    setShimsInputBool(false);
    setShowShims2(false);
    setShimsValueSC2('');

    setRawValueSC('');
    setXvalueSc('');
    setRingValueSC('');
  };

  const editRawInput = () => {
    setRawInputBool(true);
    setRingInputBool(false);
    setShimsInputBool(false);
  };
  const editRing = () => {
    setRawInputBool(false);
    setRingInputBool(true);
    setShimsInputBool(false);
  };
  const editShims = () => {
    setRawInputBool(false);
    setRingInputBool(false);
    setShimsInputBool(true);
  };
  return (
    <>
      
      <ShimsContainer>
      <div className='f-size-container'>
      <h1 style={{color: 'var(--input-inner-rings)', marginBottom: '10vh', fontSize: '3rem', fontWeight: '100'}}>Skims Kalkulator</h1>
        <Button style={{position: 'absolute', top: '25rem', right: '32vw'}} onClick={reset}>Reset</Button>
        {rawInputBool && (
          <RawInputComponent
            inputRef={inputRef}
            executeRawInput={executeRawInput}
            getRawInputSCMethod={getRawInputSCMethod}
          />
        )}

        {ringInputBool && (
          <RingInputSC
            inputRef={inputRef}
            executeRingInput={executeRingInput}
            getRingInputSCMethod={getRingInputSCMethod}
          />
        )}

        {shimsInputBool && (
          <ShimsInpputSC
            inputRef={inputRef}
            executeShimsInput={executeShimsInput}
            getShimsInputSCMethod={getShimsInputSCMethod}
          />
        )}

        <OutInputContainer>
       
          <OutputContainer>
            {rawValueSC && (
              <RawInputComponentStyle>
                <div className="buttonH1 bounceLeft">
                  <Button onClick={editRawInput}>Endre</Button>
                  <h1 className="title-before-val">Råmål: </h1>
                  <h1 className="val">{rawValueSC}</h1>
                </div>
                <div className="buttonH1 bounceRight">
                  <HiddenButton>Hidden</HiddenButton>
                  <h1 className="title-before-val">Xverdi: </h1>{' '}
                  <h1 className="val">{xValueSc}</h1>
                </div>
              </RawInputComponentStyle>
            )}
            {ringValueSC && <hr />}
            {ringValueSC && (
              <RawInputComponentStyle>
                <div className="buttonH1 bounceLeft">
                  <Button onClick={editRing}>Endre</Button>
                  <h1 className="title-before-val">Ring: </h1>
                  <h1 className="val">{ringValueSC}</h1>
                </div>
              </RawInputComponentStyle>
            )}
            {showShims1 && (
              <RawInputComponentStyle>
                <div className="buttonH1 bounceRight">
                  <HiddenButton></HiddenButton>
                  <h1 className="title-before-val">Skims: </h1>
                  <h1 className="val">{shimsCalcSC}</h1>
                </div>
              </RawInputComponentStyle>
            )}
            {showShims2 && (
              <RawInputComponentStyle>
                <div className="buttonH1 bounceLeft">
                  <Button onClick={editShims}>Endre</Button>
                  <h1 className="title-before-val">Skims 2: </h1>
                  <h1 className="val">{shimsValueSC2}</h1>
                </div>
              </RawInputComponentStyle>
            )}
          </OutputContainer>
        </OutInputContainer>
        </div>
      </ShimsContainer>

      <style jsx>{`

@media only screen and (max-width: 1600px) {
          h1{ font-size: 2.2rem;}
          }
        input {
          width: 4vw;
        }

        .buttonH1 {
          display: flex;
          align-items: center;
        }
        .title-before-val {
          width: 15rem;
         color: var(--input-inner-rings);
        
        }
        .val {
          color: var(--input-inner-rings);
          background: var(--input-outer-rings);
          border-radius: 10px;
          width: 7rem;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
        }
        @keyframes bounceOutDown {
          20% {
            -webkit-transform: translate3d(0, 10px, 0);
            transform: translate3d(0, 10px, 0);
          }

          40%,
          45% {
            opacity: 1;
            -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, 2000px, 0);
            transform: translate3d(0, 2000px, 0);
          }
        }

        .bounceLeft {
          animation: bounceInLeft 0.8s;
        }
        @keyframes bounceInLeft {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          0% {
            opacity: 0;
            -webkit-transform: translate3d(-3000px, 0, 0);
            transform: translate3d(-3000px, 0, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(25px, 0, 0);
            transform: translate3d(25px, 0, 0);
          }

          75% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
          }

          90% {
            -webkit-transform: translate3d(5px, 0, 0);
            transform: translate3d(5px, 0, 0);
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }
        .bounceRight {
          animation: bounceInRight 0.8s;
        }
        @keyframes bounceInRight {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          from {
            opacity: 0;
            -webkit-transform: translate3d(3000px, 0, 0);
            transform: translate3d(3000px, 0, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(-25px, 0, 0);
            transform: translate3d(-25px, 0, 0);
          }

          75% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
          }

          90% {
            -webkit-transform: translate3d(-5px, 0, 0);
            transform: translate3d(-5px, 0, 0);
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }
      
      
      `}</style>
    </>
  );
};

export default ShimsCalculator;
