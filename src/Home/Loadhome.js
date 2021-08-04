import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Loading animation for react
import ReactLoading from 'react-loading';
import './Home.css';

// Logo
import Logo from '../images/load-logo.png';

// Import navigation view
import Nav from '../Nav/nav';

// Import Connector to server
import Connect from '../utility/connectdb';

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

          Connect();
          
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

                         
     }

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