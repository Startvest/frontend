import React from 'react';
import  {Navbar, Nav, }  from 'react-bootstrap';
import {HashRouter, Route, Link} from 'react-router-dom';
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

      handleSelect(key){
        this.setState({
            key: key
        })
        alert(`selected ${key}`);
    }
     render() {
          return(
               <div>
               <HashRouter basename='/'>
               <Navbar className="navigation shadow-sm" collapseOnSelect expand="lg" bg="light" sticky='top' >
               <Navbar.Brand href={process.env.PUBLIC_URL}><img src={Logo} height={30} alt='Startvest logo'/></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto">
                 {/* <Nav.Link  className='Navlinks' href="/" >Home</Nav.Link> */}
                 </Nav>
                 <Nav className=" navitems" defaultActiveKey="/" onSelect={this.handleSelect}>    
                 <Nav.Item><Link className='Navlinks ' to="/" >Home</Link></Nav.Item>
                 <Nav.Item><Link className='Navlinks' to="/about">About Us</Link></Nav.Item>
                 <Nav.Item><Link  className='Navlinks' to="/jobs">Jobs</Link></Nav.Item>
                 <Nav.Item><div className='line-break'></div></Nav.Item>
                 <Nav.Item><Link className='Navlinks' to="/startups" id='line-left-border'>Startups</Link></Nav.Item>
                 <Nav.Item><Link  className='Navlinks' to="/investors" id='line-right-border'>Investors</Link></Nav.Item>
                 <Nav.Item><div className='line-break'></div></Nav.Item>
                 <Nav.Item><Link className='Navlinks' to="/profile"><PersonCircle color='#21295C' height={30} width={30}/></Link></Nav.Item>
                 </Nav>

                 
               </Navbar.Collapse>
             </Navbar>
             
             <div className='views'>
            
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/startups" component={Startups}/>
                  <Route exact path="/investors" component={Investors}/>                  
                  <Route exact path="/profile" component={Profile}/> 
                  <Route exact path="/jobs" component={Jobs}/> 
                  
             </div>
             </HashRouter>

             <Footer/>
             </div>
          )
     }
}


export default nav;