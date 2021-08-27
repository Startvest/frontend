import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {ExclamationTriangle} from 'react-bootstrap-icons';


// New Loader
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";


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

     
      override = css`
          display: block;
          margin: 2em auto;
          border-radius: 40px;
          background: none;
          `;

     async componentDidMount() {
          // Display a warnign message that the user internet is slow
          // If it takes long to change screen
          setTimeout(() => {
               if(this.state.load){
                    this.setState({internet: false});
               }
          }, 8000);

          let token = await Connect();

          const staging =  'https://startvest-staging.herokuapp.com/api/v1.0/';
          fetch(`${staging}investors/`, {
               method: 'GET', 
               headers: {
                         Authorization: `Bearer ${token}` 
                    }})
               .then(response => response.json())
               .then(data => {    
                    // console.log('Investors: '+ JSON.stringify(data)); 
                    this.setState({ investors: data.results , load_start:true});
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
                    // console.log('Startups: '+ JSON.stringify(data)); 
                    this.setState({ startups: data.results , load_invest:true});
               })
               .catch((error) => {
               console.error('Error:', error);
          });
           
          fetch(`${staging}startups/viewjobs/`, {
               method: 'GET', 
               headers: {
                         Authorization: `Bearer ${token}` 
                    }})
               .then(response => response.json())
               .then(data => {    
                    // console.log('Available jobs: '+ JSON.stringify(data)); 
                    this.setState({ jobs: data.results , load_jobs:true});
               })
               .catch((error) => {
               console.error('Error:', error);
          });
                // Check if all the data from the database has loaded before calling the main loadS
                setInterval(() => {
                    if(this.state.load_start && this.state.load_invest  && this.state.load_jobs){
                         this.setState({load: false})   
                    }
               }, 40);
          
     }


     // Loading screen to simulate a native application
     // It takes 2 seconds to show
     loadScreen = () => {
          return(
               <div>
                    <div className='Load'>
                         <div><img src={Logo} alt='Our logo' height={55}/></div>
                          <BarLoader color={'#21295C'} loading={true} css={this.override} height={3} width={200} speedMultiplier={0.8} />
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
               case false: return  <Nav investors={this.state.investors} startups={this.state.startups} jobs={this.state.jobs}/>;
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