import React, { useState, useContext } from 'react';
import Head from 'next/head';

import App from '../components/App';

const Home = props => {
  const wallpaper = [
    'https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80 ',
    'https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1449156733864-dd5471bb7427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1529405643518-5cf24fddfc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 ',
    'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    ' https://images.unsplash.com/photo-1573885955765-31c11f8b700e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1511113897571-447d6bc7b6b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1680&q=80',
    'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1578134260566-d4083893996a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
  ];

  const [wallpaperValue, setWallpaperValue] = useState(0);
  const [faneTitle, setFaneTitle] = useState('');
  
  /***************  colors ******************/

  const [innerRing, setInnerRing] = useState('linear-gradient(#6FB98F, #004445)');
  const [outerRings, setOuterRings] = useState('linear-gradient(rgb(128, 180, 204), rgb(28, 28, 82))');

  // same color bright - dark
  const [inputOuterRings, setInputOuterRings] = useState('#004445')
  const [titleInnerRings, setTitleInnerRings] = useState('#004445')
  // same color dark bright
  const [titleOuterRings, setTitleOuterRings] = useState('#6FB98F')
  const [inputInnerRings, setinputInnerRings] = useState('#6FB98F')
   // searh component

   const [searchBg, setSearchBg] = useState('#004445')
   const [searchPostBtn, setSearchPostBtn] = useState('#6FB98F')
   const [searchPostBtnHover, setSearchPostBtnHover] = useState('#004445')
   const [postListHover, setPostListHover] = useState('#004445')

   // Sidebar

   const [sidebarBg, setSidebarBg] = useState('#021C1E')
   const [deleteBtn, setDeleteBtn] = useState('#D75B66')
   const [deleteBtnHover, setDeleteBtnHover] = useState('#D24136')
  return (
    <div>
      <Head>
        <script src="https://kit.fontawesome.com/f889c3af6d.js"></script>
        <link rel="icon" href="/favicon.ico" />
        <title>{faneTitle}</title>
      </Head>

      <App 
      wallpaperValue={setWallpaperValue} 
      faneTitle={setFaneTitle} 

      innerRing={setInnerRing}
      outerRings={setOuterRings}
      
      inputOuterRings={setInputOuterRings}
      titleInnerRings={setTitleInnerRings}
      titleOuterRings={setTitleOuterRings}
      inputInnerRings={setinputInnerRings}
      searchBg={setSearchBg}
      searchPostBtn={setSearchPostBtn}
      searchPostBtnHover={setSearchPostBtnHover}
      sidebarBg={setSidebarBg}
      deleteBtn={setDeleteBtn}
      deleteBtnHover={setDeleteBtnHover}
      postListHover={setPostListHover}
      />
      


      <style global jsx>{`
          :root {
            
            --outer-ring: ${outerRings};
            --inner-ring: ${innerRing};
            --input-outer-rings: ${inputOuterRings};
            --input-inner-rings: ${inputInnerRings};
            --input-title-outer-rings: ${titleOuterRings};
            --input-title-inner-rings: ${titleInnerRings};
            --searchPost: ${searchBg};
            --searchPostBtn: ${searchPostBtn};
            --searchPostBtnHover: ${searchPostBtnHover};
            --post-list-hover: ${postListHover};
            
            --sidebarBg: ${sidebarBg};
            --deleteBtn: ${deleteBtn};
            --deleteBtnHover: ${deleteBtnHover};


            --main-dark: #080f5b;
            --brighter-dark: #d4dfdd;
            --middle-bright: #15db95;
            --darker-bright: #d14c4c;
            --bright: #e4c580;

            
            

            --blue: rgb(128, 180, 204);
            --rustyRed: #984b43;
            --labels: linear-gradient(gray, gray);

             
          }
          /*         :root {
  --main-dark: #080f5b;
  --brighter-dark: #d4dfdd;
  --middle-bright: #15db95;
  --darker-bright: #d14c4c;
  --bright: #e4c580;
  
  --searchPost: linear-gradient(rgba(23,20,20,1) , rgba(247,110,0,1));
  --searchPostBtn: rgba(247,118,0,1);

  --blue: rgb(128, 180, 204);
  --rustyRed: #984B43;
  --inner-ring: linear-gradient(rgb(112, 200, 153),rgb(31, 58, 47));
  --outer-ring: linear-gradient(rgb(128, 180, 204),rgb(28, 28, 82));
  --labels: linear-gradient(gray, gray)
} */
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)),
              url(${wallpaper[wallpaperValue]});
            background-size: cover;
            heigth: 100vh;
            width: 100vw;
            overflow: hidden;
            box-sizing: border-box;
          }

          /* https://images.unsplash.com/photo-1579706783492-081a217cd55e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 

 https://images.unsplash.com/photo-1577255714682-69db9b067fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 

 https://images.unsplash.com/photo-1579623430776-9ca237d80b20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 

 https://images.unsplash.com/photo-1532538014654-28b063b09d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80 

 https://images.unsplash.com/photo-1483425571841-9662f86c7154?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1905&q=80

 https://images.unsplash.com/photo-1560372610-931c8343bc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80

 https://images.unsplash.com/photo-1555759446-cf7598d7c14c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80

*/

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }

          @media only screen and (max-width: 1600px) {
            * {
              font-size: 0.8vw;
            }
          }
          @media only screen and (max-width: 400px) {
            * {
              font-size: 0.9vw;
            }
          }
        `}
      </style>
    </div>
  );
};
export default Home;
