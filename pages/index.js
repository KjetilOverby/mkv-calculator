import React from 'react'
import Head from 'next/head'

import App from '../components/App'

const Home = () => (
  <div>
    <Head>
      <title>Mkv calculator</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
     <App />
     <style global jsx>{`
        
        :root {
  --main-dark: #080f5b;
  --brighter-dark: #d4dfdd;
  --middle-bright: #15db95;
  --darker-bright: #d14c4c;
  --bright: #e4c580;
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
  background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.4)), url('https://images.unsplash.com/photo-1532538014654-28b063b09d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80');
  background-size: cover;
}

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

export default Home
