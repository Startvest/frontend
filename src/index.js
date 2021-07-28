import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.register();
// To push changes to the repo
// gir remote add Hanif-adedotun https://github.com/Hanif-adedotun/startvest-phase-1.git
// git remote set-url origin https://github.com/Hanif-adedotun/startvest-phase-1.git
// git push Hanif-adedotun

// git add frontend https://github.com/Hanif-adedotun/startvest-phase-1
// git commit -m "Your message"
// git push
// Then merge on github.com

// To run client app
// cd frontend
// then run: npm run client

// To deploy to github pages
// npm run deploy

// Content of Css file
// body {
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }
