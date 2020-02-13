import React, { useState, useContext, useEffect } from 'react';
import DataPost from '../../PostArkiv';
import styled from 'styled-components';



const SearchList = props => {

  const poster = useContext(DataPost)

  const getPost = (page, index) => {
    props.testingContext(!props.testingContextVal);
    props.postIndex(index);
       
    const loop = poster.map((post) => post.type.id)
    console.log('ID: ' + loop );
    console.log('loop clicked');
    
   
  };



  
 /*  const getPost = (key) => {
   
   const keys = poster.filter(item => item.key === key)
   props.testingContext(!props.testingContextVal);
    
  } */


  const PostList = styled.div`
      overflow: scroll;
  `

  return (
    <div className={props.openSearchList}>
      <PostList>
        

        {
          props.sortPost.map((post, index) => (
            <h3 key={post.type.id} onClick={e => getPost(e, index)}>
              {post.type.name}
            </h3>
          ))}
        {/* {
          props.sortPost.map((post) => (
            <h3 key={post.type.id} onClick={getPost}>
              {post.type.name}
            </h3>
          ))} */}
      </PostList>
      <style jsx>{`
         
         h3 {
          
           cursor: pointer;
           transition: .2s;
           font-size: 1.1rem;
          
         }
         h3:hover {
             color: dodgerblue;
             text-shadow: 8px 8px 4px rgba(0,0,0,.8);
            
             border-radius: 5px;
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
