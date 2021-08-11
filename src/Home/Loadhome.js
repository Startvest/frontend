import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ExclamationTriangle} from 'react-bootstrap-icons';
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
               load: true,
               internet: true, //Assumes internet is true for the website to load
               data: [],
               url: 'https://startvest.github.io/frontend',


               investors: [],
               startups: []
          }
     }

     async componentDidMount() {
          setTimeout(() => {
               if(this.state.load){
                    this.setState({internet: false});
               }
          }, 4000);

          let token = await Connect();

          const staging =  'https://startvest-staging.herokuapp.com/api/v1.0/';
          fetch(`${staging}investors/`, {
               method: 'GET', 
               headers: {
                         Authorization: `Bearer ${token}` 
                    }})
               .then(response => response.json())
               .then(data => {    
                    console.log('Investors: '); 
                    this.setState({ investors: data , load_start:true});
               })
               .catch((error) => {
               console.error('Error:', error);
          });

          fetch(`${staging}startups/`, {
               method: 'GET', 
               headers: {
                         Authorization: `Bearer ${token}` 
                    }})
               .then(response => response.json())
               .then(data => {    
                    console.log('Startups: '+ data); 
                    this.setState({ startups: data , load_invest:true});
               })
               .catch((error) => {
               console.error('Error:', error);
          });
           
                // Check if all the data from the database has loaded before calling the main loadS
                setInterval(() => {
                    if(this.state.load_start===true && this.state.load_invest===true){
                         this.setState({load: false})   
                    }
               }, 400);
          
     }


     // Loading screen to simulate a native application
     // It takes 2 seconds to show
     loadScreen = () => {
          return(
               <div>
                    <div className='Load'>
                         <div><img src={Logo} alt='Our logo' height={55}/></div>
                          <ReactLoading className='load-animation' type='bubbles' color='#21295C' height={20} width={90} /> 
                    </div>

                    {(this.state.internet === false) ? 
                    <div className='err-message'>
                    <ExclamationTriangle color='red' height={20} width={20}/>  Your Internet connection is slow or not connected
                    </div>                    
                    :null}
               </div>
               
          )
     }


     renderviews(){
          switch(this.state.load){
               default: return this.loadScreen();
               case true: return this.loadScreen();
               case false: return  <Nav investors={this.state.investors} startups={this.state.startups}/>;
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