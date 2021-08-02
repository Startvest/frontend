import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Loading animation for react
import ReactLoading from 'react-loading';
import './Home.css';

// Logo
import Logo from '../images/load-logo.png';

// Import navigation view
import Nav from '../Nav/nav';


class Loader extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               done: false,
               data: [],
               url: 'https://startvest.github.io/frontend'
          }
     }

     componentDidMount() {
          setTimeout(() => this.setState({ done: true }), 2000);

          // fetch('http://startvest-staging.herokuapp.com/api/v1.0/users/registration/', {
          //      method: 'POST', // or 'PUT'
          //      headers: {
          //      'Content-Type': 'application/json',
          //      },
          //      body: JSON.stringify({"username": "frontend",
          //      "email": "startvest4@gmail.com",
          //      "password1": "/]yyJM!R=m:77^",
          //      "password2": "/]yyJM!R=m:77^"}),
          //      })
          //      .then(response => response.json())
          //      .then(data => {
          //      console.log(data);
          //      })
          //      .catch((error) => {
          //      console.error('Error:', error);
          // });

          
          fetch('http://startvest-staging.herokuapp.com/api/v1.0/users/login/', {
               method: 'POST', 
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify({"username": "Hanif Adedotun",
               "email": "hanif.adedotun@gmail.com",
               "password": "24vJiKSu42z8VD8"}),
               })
               .then(response => response.json())
               .then(data => {
               console.log('Success:', data);
               
               localStorage.clear('token');
               localStorage.setItem('token', data.access_token);
               })
               .catch((error) => {
               console.error('Error:', error);
          });

          // const username = 'Hanif Adedotun';//'hanif.adedotun@gmail.com';
          // const password = '24vJiKSu42z8VD8';

     
          setTimeout(() =>
          fetch('http://startvest-staging.herokuapp.com/api/v1.0/startups/', {
          method:'GET', 
          headers: {
               // 'Authorization': 'Basic ' + username + ":" + password
               Authorization: `Bearer ${localStorage.getItem('token')}` 
          }})
          .then(response => response.json())
          .then((response) => {
               console.log(response);
               console.log(localStorage.getItem('token'));
                })
                 .catch((error) => {
               console.error(error);
                 }) ,10000);

                 

                 fetch('http://startvest-staging.herokuapp.com/api/v1.0/users/token/verify/', {
                    method:'POST', 
                    headers: {
                         'Content-Type': 'application/json',
                    },body: JSON.stringify({
                    "token": localStorage.getItem('token'),
                   }),
                    })
                    .then(response => response.json())
                    .then((response) => {
                         console.log(response);
                          })
                           .catch((error) => {
                         console.error(error);
                           });

               // setTimeout(() =>
               // fetch('http://startvest-staging.herokuapp.com/api/v1.0/users/logout/', {
               //      method:'POST', 
               //      })
               //      .then(response => response.json())
               //      .then((response) => {
               //           console.log(response.detail);
               //            })
               //             .catch((error) => {
               //           console.error(error);
               //             }),14000);;
         
     }
     // 24vJiKSu42z8VD8
// hanif.adedotun@gmail.com
// Hanif Adedotun

     // Loading screen to simulate a native application
     // It takes 2 seconds to show
     loadScreen = () => {
          return(
               <div className='Load'>
                    <div><img src={Logo} alt='Our logo' height={55}/></div>
                    <ReactLoading className='load-animation' type='bubbles' color='#21295C' height={20} width={90} />
               </div>
          )
     }


     renderviews(){
          switch(this.state.done){
               default: return this.loadScreen();
               case undefined: return this.loadScreen();
               case true: return <Nav/>;
          }
     }

     render(){
          return(
               <div>
                    {this.renderviews()}
               </div>
          );
     }

}

export default Loader;