import React, { useState, useContext, useEffect } from 'react';
import DataPost from '../../PostArkiv';
import styled from 'styled-components';

const SearchList = props => {
  /*  const getPost = (page, index) => {

    props.testingContext(!props.testingContextVal);
    props.postIndex(index);
    

   }; */

  const poster = useContext(DataPost);

  const getPost = e => {
    const getIndex = poster.findIndex(post => {
      return e.target.id === post.type.id;
    });
    props.clickIndexPost(getIndex)
    props.testingContext(!props.testingContextVal);
    props.postIndex(getIndex);
    props.display('stay-down')

  };

  const PostList = styled.div`
    overflow: auto;
  `;

  return (
    <div className={props.openSearchList}>
      <PostList>
        {/* {
          props.sortPost.map((post, index) => (
            <h3 key={post.type.id} onClick={e => getPost(e, index)}>
              {post.type.name}
            </h3>
          ))} */}

        {props.sortPost.map((post, index) => (
          <h3 id={post.type.id} key={post.type.id} onClick={getPost}>
            {post.type.name}
          </h3>
        ))}
      </PostList>
      <style jsx>{`
         
         h3 {
          
           cursor: pointer;
           transition: .2s;
           font-size: 1.1rem;
           border: 1px solid khaki;
           color: khaki;
           text-align: center;
           border-radius: 5px;
           padding: .5rem .5rem;
           transition: .5s;
         
          
         }
         h3:hover {
             color: navy;
             box-shadow: 10px 20px 20px rgba(0,0,0,.8);
             background: dodgerblue;
             
           
           }
              .search-post-container {
                  height: 100vh;
                  width: 16vw;
                  background: var(--searchPost);
                  position: absolute;
                  right: -16vw;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: white;
                  z-index: 100
                   }
                   .list-container {
                       display: flex;
                       flex-direction: column;
                       align-items: center
                   }
                   .list-container ul li {
                       list-style: none;
                       border: 1px solid yellow;
                       margin: 2px;
                       width: 50px;
                       padding: 2px;
                       font-weight: bold;
                       display: flex;
                       justify-content: center;
                       align-items: center;
                       color: white;
                       font-size: 1.2rem
                   }
                 
                 
                   .full-size {
                    display: flex;
                       flex-wrap: wrap;
                   }
              .show-search-list {
                  display: block;
                  animation: showSearchList .2s;
                  -webkit-animation-fill-mode: forwards, none;
                  right: -16vw;
                  display: flex;
                 align-items: center;
                       flex-direction: column;
                       

              }
              .hide-search-list {
                animation: hideSearchList .2s;
                -webkit-animation-fill-mode: forwards, none;
                  right: 0;
                  
              }
              @keyframes showSearchList {
                  100% {transform: translateX(-16vw); display: none}
              }
              @keyframes hideSearchList {
                  100% {transform: translateX(16vw) }
               }
                 
              }
            `}</style>
    </div>
  );
};

export default SearchList;
