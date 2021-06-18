import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './footer/footer';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('footer')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ServiceWorker.unregister();
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
