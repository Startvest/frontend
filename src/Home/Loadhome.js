import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import './Home.css';

// Logo
import Logo from '../images/logo.png';

// Import nav view
import Nav from '../Nav/nav';


class Loader extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               done: undefined,
               data: [],
               url: 'https://startvest.github.io/frontend'
          }
     }

     componentDidMount() {
          setTimeout(() => this.setState({ done: true }), 2500)
     }

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