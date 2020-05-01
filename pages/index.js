import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';

import App from '../components/App';

import ReactGA from 'react-ga'

const Home = props => {

  // Google analytics

  useEffect(() => {
    ReactGA.initialize('UA-165295838-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  const wallpaper = [
    'https://images.unsplash.com/photo-1582208695996-cebe24b00f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 ',
    'https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1527202825319-408f2a7df85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1529405643518-5cf24fddfc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 ',
    'https://images.unsplash.com/photo-1569338991318-04439ecdbfb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80',
    ' https://images.unsplash.com/photo-1520997719764-6cdf09e93606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1508615121316-fe792af62a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1506508618093-6fe5ce3def4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
    'https://images.unsplash.com/photo-1530648914613-cf6c85bb0eb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
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
              font-size: .8vw;
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
