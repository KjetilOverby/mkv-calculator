import React, { useContext } from 'react';
import DataPost from '../../PostArkiv'

const SearchList = props => {
  const poster = useContext(DataPost)

  const getPost = (page, index) => {
   
    props.testingContext(!props.testingContextVal)
    props.postIndex(index)
    
  }
  return (
    <div className={props.openSearchList}>
      <div search-post-container>
      
      
      {poster.map((post, index) =>  <h3 key={post.type.id} onClick={(e) => getPost(e, index)}>{post.type.name}</h3>)}

      </div>
      <style jsx>{`
         h3 {
           cursor: pointer;
           transition: .5s;
          
         }
         h3:hover {
             color: gray;
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
