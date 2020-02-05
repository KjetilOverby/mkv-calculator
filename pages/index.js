import React, { useState } from 'react'
import Head from 'next/head'

import App from '../components/App'



const Home = (props) => {

  
  const wallpaper = [
    'https://images.unsplash.com/photo-1579706783492-081a217cd55e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1577255714682-69db9b067fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1579623430776-9ca237d80b20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 ',
    'https://images.unsplash.com/photo-1532538014654-28b063b09d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80 ',
    'https://images.unsplash.com/photo-1483425571841-9662f86c7154?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1905&q=80',
    ' https://images.unsplash.com/photo-1560372610-931c8343bc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1555759446-cf7598d7c14c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
  ]
  

  const [wallpaperValue, setWallpaperValue] = useState(0)




return (
  <div>
    <Head>
      <title>Mkv calculator</title>
      <script src="https://kit.fontawesome.com/f889c3af6d.js"></script>
      <link rel="icon" href="/favicon.ico" />
    </Head>
   
     <App wallpaperValue={setWallpaperValue} />
   
    
     <style global jsx>{`
        
        :root {
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
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
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
    font-size: .8vw
  }
}
@media only screen and (max-width: 400px) {
  * {
    font-size: .9vw
  }
}
        `}
     </style>
   </div>
)
}
export default Home
