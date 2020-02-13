import React from 'react';
import styled from 'styled-components';

const SearchFilterPostInput = props => {
  const Button = styled.button`
    height: 3.5rem;
    width: 14rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    outline: none;
    margin-top: 1.5rem;
    background: tan;
    color: indianred;
    font-size: 13px;
    transition: 0.5s;
    border: none;
  `;
  return (
    <div
      className={`raw-input-container search-post-background ${props.hideSearchPostInput} `}
    >
      <div className="title-container">
        <h1 className="title color-title-arkiv">Søk</h1>
      </div>

      <div className="button-container">
        {/*  <button onClick={props.allhandler}>Alle</button>
         <button onClick={props.x2Handler}>X2</button>
         <button>X3</button>
         <button>X4</button>
         <button onClick={props.sortOut42handler}>4.2</button>
         <button onClick={props.sortOut40handler}>4.0</button> */}

        <div>
          <form className="form-container">
            <input
              type="text"
              className="input-component"
              placeholder="Søk i postarkivet"
              onChange={props.searchPostArkivInputFunc}
            />
          </form>
          <Button onClick={props.OpenCloseSearchPostInput}>Lukk</Button>
        </div>
      </div>

      <style jsx>{`
          .input-component {
            font-size: 2rem;
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 5px;
            outline: none;
            border: none;
            background: tan;
          }

          .title-container {
            position: absolute;
            left: 2rem;
            top: 40%;
          }
          .title {
            font-size: 4rem;
          }
          .color-title-arkiv {
            color: #7a2801;
          }
          .color-title-raw {
            color: #065535;
          }
          .color-title-outer {
            color: #003366;
          }
          .button-container {
            display: flex;
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

          .raw-btn-background {
            background: var(--middle-bright);
          }
          .outer-btn-background {
            background: var(--bright);
          }
          .common-input-form-btn {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 2rem;
          }
          @media only screen and (max-width: 1600px) {
            .btn-common-input {
              height: 5vh;
            }
          }
        `}</style>
    </div>
  );
};

export default SearchFilterPostInput;
