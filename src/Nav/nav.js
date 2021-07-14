import React from 'react';
import  {Navbar, Nav}  from 'react-bootstrap';
import {HashRouter, Route} from 'react-router-dom';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PersonCircle} from 'react-bootstrap-icons';


// Import the views
import Home from '../Home/Home';
import About from '../About/about';
import Startups from '../Startups/startups';
import Investors from '../Investors/investors';
import Profile from '../Profile/profile';
import Jobs from '../jobs/jobs';


// The logo
import Logo from '../images/logo.png';

// Import footer
import Footer from '../footer/footer';
class nav extends React.Component {
  constructor(props) {
      super(props);
      this.state =({
          key: "home",
      })
    }

    //   handleSelect(key){
    //     this.setState({
    //         key: key
    //     })
    //     alert(`selected ${key}`);
    //onSelect={this.handleSelect}>   
    // }
     render() {
          return(
               <div>
               <HashRouter basename='/'>
               <Navbar className="navigation shadow-sm"  collapseOnSelect expand="md" bg="light" sticky='top' >
                <Navbar.Brand href={process.env.PUBLIC_URL+'#home'}><img src={Logo} height={30} alt='Startvest logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className="ml-auto navitems" defaultActiveKey="/">  
                  <Nav.Link href="#home" className='Navlinks'>Home</Nav.Link>
                  <Nav.Link href="#about"  className='Navlinks'>About</Nav.Link>
                  <Nav.Link href="#jobs"  className='Navlinks'>Jobs</Nav.Link>
                  <Nav.Item><div className='line-break'></div></Nav.Item>
                  <Nav.Link href="#startups"  className='Navlinks'>Startups</Nav.Link>
                  <Nav.Link href="#investors"  className='Navlinks'>Investors</Nav.Link>
                  <Nav.Item><div className='line-break'></div></Nav.Item>
                  <Nav.Link href="#profile"  className='Navlinks'><PersonCircle color='#21295C' height={30} width={30}/></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
               </Navbar>
             
             <div className='views'>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/startups" component={Startups}/>
                  <Route exact path="/investors" component={Investors}/>                  
                  <Route exact path="/profile" component={Profile}/> 
                  <Route exact path="/jobs" component={Jobs}/> 
             </div>
             </HashRouter>
             
             {/* Added footer to the navbar content */}
             <Footer/>
             </div>
          )
     }
}


export default nav;