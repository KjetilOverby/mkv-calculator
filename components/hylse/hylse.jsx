import React from 'react';
import StartLabel from '../labels/StartLabel';
import EndLabel from '../labels/EndLabel';
import StartLabelStatic from '../labels/static/StartLabelStatic';
/* import EndLabelStatic from '../labels/static/EndLabelStatic'; */

const Hylse = props => {
  return (
    <div className="hylse">
      {/* <StartLabelStatic value={props.startLabelStatic}/> */}
      <StartLabel css2={props.correctLabel2} value={props.startLabel} />

      {/*   Axl values Labels container  */}
      <div className="hylse-light-reflection"></div>
      <div className="hylse-shadow"></div>
      <div className="hylse-start">
        <div className="hylse-start-shadow"></div>
      </div>
      <div className="hylse-end">
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        {/*  <EndLabelStatic value={props.endLabel}/> */}
        <EndLabel css={props.correctLabel} value={props.endLabel} />
      </div>
      <style jsx>{`
        .hylse {
          background: linear-gradient(rgb(200, 200, 200), rgb(66, 66, 66));
          height: 7rem;
          width: 65rem;
          position: absolute;
          top: 9rem;
          display: flex;
          align-items: center;
        }
        .hylse-shadow {
          height: 2rem;
          width: 63.5rem;
          background: linear-gradient(rgb(204, 204, 204), rgb(70, 69, 69));
          box-shadow: 5px 5px 30px black;
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
        }
        .hylse-light-reflection {
          height: 1rem;
          width: 65rem;
          background: linear-gradient(
            rgba(0, 0, 0, 0.205),
            rgba(46, 42, 42, 0.102)
          );
          margin-top: 8rem;
          position: absolute;
          top: -2.5rem;
        }
        .hylse-start {
          height: 10rem;
          width: 3rem;
          background: linear-gradient(rgb(184, 184, 184), rgb(56, 56, 56));
          border-radius: 10px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -3rem;
          box-shadow: 10px 10px 30px black;
        }
        .hylse-start-shadow {
          height: 1rem;
          width: 3rem;
          background: linear-gradient(
            rgba(0, 0, 0, 0.205),
            rgba(46, 42, 42, 0.102)
          );
          margin-top: 8rem;
        }
        .hylse-end {
          height: 7rem;
          width: 2rem;
          background: linear-gradient(rgb(175, 175, 175), rgb(85, 85, 85));
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -2rem;
          display: flex;
          align-items: center;
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
        }
        .gang {
          height: 7rem;
          width: 0.1rem;
          background: rgb(189, 188, 188);
          margin: 0 0.1rem;
        }
        .gang:last-child {
          height: 6.7rem;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Hylse;
