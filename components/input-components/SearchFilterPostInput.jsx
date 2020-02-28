import React, { useContext } from 'react';
import styled from 'styled-components';
import DataPost from '../../PostArkiv';

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

  const H3 = styled.h3`
    
   
    margin-left: 30rem;
    color: khaki;
   
    font-weight: 100;
    float: right;
  
  `
  const H3container = styled.div`
     
     position: absolute;
     left: 56vw;
     margin-top: 2rem;
  `
  const ButtonContainer = styled.div`
      position: absolute;
      left: 55vw;
      top: 8.5vh;
  `

  const poster = useContext(DataPost)
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
              placeholder='Søk i postarkiv'
              onChange={props.searchPostArkivInputFunc}
              value={props.searchInput}
              autoComplete="off"
             

            />
          
          </form>



         <ButtonContainer>
         <Button className='close-btn' onClick={props.OpenCloseSearchPostInput}>Lukk</Button>
         </ButtonContainer>
        </div>
        
        <H3container>
        <H3>Antall poster: {poster.length}</H3>
        </H3container>
      </div>

      <style jsx>{`
       



          .input-component {
            font-size: 2rem;
            padding: .6rem;
            margin-top: 4vh;
            color: khaki;
            outline: none;
            border: none;
            background: transparent;
            border-bottom: 1px solid khaki;
            font-weight: 100;
           
           

          }
  

          .close-btn {
            background: linear-gradient(120deg, transparent 50%, khaki 50%);
          background-size: 220%;
          transition: background 0.5s, color 0.5s;
          color: khaki;
          border: 1px solid khaki;
          
          }
          .close-btn:hover {
            background-position: 100%;
          color: gray;
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
