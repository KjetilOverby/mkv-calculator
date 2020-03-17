import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import DataPost from '../../PostArkiv';

const SearchFilterPostInput = props => {
  const Button = styled.button`
    height: 2.5rem;
    width: 8rem;
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

  const H3 = styled.h3`
    margin-left: 30rem;
    color: var(--input-inner-rings);
    font-size: 1.2rem;
    font-weight: 100;
    float: right;
  `;
  const H3container = styled.div`
    position: absolute;
    left: 50vw;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  `;
  const ButtonContainer = styled.div`
    position: absolute;
    left: 55vw;
    top: 8.5vh;
  `;

  const poster = useContext(DataPost);

  const searchInput = useRef()

  useEffect(() => {
    searchInput.current.focus()
  })
  return (
    <div
      className={`raw-input-container search-post-background ${props.hideSearchPostInput} `}
    >
      <div className="title-container">
        {/* <h1 className="title color-title-arkiv">Søk</h1> */}
      </div>

      <div className="button-container">
        <div>
          <form className="form-container">
            <input
              type="text"
              className="input-component"
              placeholder="Søk i postarkiv"
              onChange={props.searchPostArkivInputFunc}
              value={props.searchInput}
              autoComplete="off"
              ref={searchInput}
            />
          </form>

          <ButtonContainer>
            <Button
              className="close-btn"
              onClick={props.OpenCloseSearchPostInput}
            >
              Lukk
            </Button>
          </ButtonContainer>
        </div>

        <H3container>
          <H3>Antall poster: {poster.length}</H3>
          <H3>Søkeresultat: {props.searchResult}</H3>
        </H3container>
      </div>

      <style jsx>{`
        .input-component {
          font-size: 2rem;
          padding: 0.6rem;
          margin-top: 4vh;
          color: var(--input-inner-rings);
          outline: none;
          border: none;
          background: transparent;
          border-bottom: 1px solid var(--input-inner-rings);
          font-weight: 100;
        }

        .close-btn {
          background: linear-gradient(120deg, transparent 50%, var(--input-inner-rings) 50%);
          background-size: 220%;
          transition: background 0.5s, color 0.5s;
          color: var(--input-inner-rings);
          border: 1px solid var(--input-inner-rings);
          margin-left: -53vw;
          margin-top: 5vh;
        }
        .close-btn:hover {
          background-position: 100%;
          color: var(--input-outer-rings);
        }
        .title-container {
          position: absolute;
          left: 2rem;
          top: 40%;
        }
        .title {
          font-size: 4rem;
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
          animation: hideInputComponent 0.4s forwards, none;
          top: 0;
        }
        .show-input-component {
          animation: showInputComponent 0.4s forwards, none;
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
