import React from 'react';
import StartLabel from '../labels/StartLabel';
import EndLabel from '../labels/EndLabel';
import StartLabelStatic from '../labels/static/StartLabelStatic';
import EndLabelStatic from '../labels/static/EndLabelStatic';



const Hylse = props => {
  return (
    <div className="hylse">
      <StartLabelStatic value={props.startLabelStatic}/>
      <StartLabel css2={props.correctLabel2} value={props.startLabel} />

      {/*   Axl values Labels container  */}
      <div className="hylse-light-reflection"></div>
      <div className="hylse-kile">
          <div className='hylse-screw-hole'>
              <div className='screw-head'>
                  <div className='screw-head2'></div>
              </div>
          </div>
          <div className='hylse-screw-hole'>
              <div className='screw-head'>
                  <div className='screw-head2'></div>
              </div>
          </div>
          <div className='hylse-screw-hole'>
              <div className='screw-head'>
                  <div className='screw-head2'></div>
              </div>
          </div>
      </div>
      <div className="hylse-start">
        <div className="kilespor"></div>
      </div>
      
      <div className="hylse-end">
      <div className='kilespor-gangs'></div>
      
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <div className="gang"></div>
        <EndLabelStatic value={props.EndLabelStatic}/>
        <EndLabel css={props.correctLabel} value={props.endLabel} />
      </div>
      <style jsx>{`
        .hylse {
          margin-top: 3em;
          background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5)) , url('https://image.freepik.com/free-photo/metallic-textured-background_53876-89540.jpg');
          background-size: cover;
          background-position: 50% 50%;
          height: 9rem;
          width: 69.5rem;
          position: absolute;
          top: 9rem;
          display: flex;
          align-items: center;
          border-radius: 5px;
          border: 1px solid gray
        }
        .hylse-kile {
          height: 2.8rem;
          width: 71.3rem;
          background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)) , url('https://image.freepik.com/free-photo/metallic-textured-background_53876-89540.jpg');
          background-position: center;
          box-shadow: inset 12px 2px 3px -2px rgba(0,0,0,.8);
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin-top: 0rem;
          z-index: 10;
          margin-left: -1em;
          border-top-left-radius: 40px;
          border-bottom-left-radius: 40px;
          border: 1px solid gray;
          position: absolute;

        }
        .hylse-screw-hole {
            height: 1.8em;
            width: 1.8em;
            background:#2f2f2f;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .screw-head {
            height: 1.6em;
            width: 1.6em;
            background: #5b5b5b;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .screw-head2 {
            height: 1em;
            width: 1em;
            background: black;
            border-radius: 50%;
            box-shadow: inset 1px 1px 6px white
        }
        .hylse-start {
          height: 12rem;
          width: 4rem;
          background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5)) , url('https://image.freepik.com/free-photo/metallic-textured-background_53876-89540.jpg');
          background-position: center;
          border-radius: 10px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -3rem;
          box-shadow: 10px 10px 30px black;
          overflow: hidden;
          display: flex;
          align-items: center;
          border: 1px solid gray;
        }
        /* .kilespor {
            height: 3em;
            width: 5em;
            background: rgb(56, 56, 56);
            margin-left: 1.5em;
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
            box-shadow: inset 5px 4px 3px black;
        } */
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
          height: 8.5rem;
          width: 5rem;
          background: linear-gradient(rgb(175, 175, 175), rgb(85, 85, 85));
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -5rem;
          display: flex;
          align-items: center;
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
        }
        .gang {
          height: 8.5rem;
          width: 0.1rem;
          background: rgb(56, 56, 56);
          margin: 0 0.1rem;
        }
        .gang:last-child {
          height: 6.7rem;
          align-items: center;
        }
        .kilespor-gangs {
            height: 2.9rem;
            width: 3rem;
            background: rgb(85, 85, 85);
            position: absolute;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
            margin-left: -.5em;
            box-shadow: inset 1px 9px 3px black;
            z-index: 100
        }
      `}</style>
    </div>
  );
};

export default Hylse;
