import React from 'react';
import  {Navbar, Nav, }  from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
               <Router>
               <Navbar className="navigation shadow-sm" collapseOnSelect expand="lg" bg="light" sticky='top' >
               <Navbar.Brand href="/"><img src={Logo} height={30} alt='Startvest logo'/></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto">
                 {/* <Nav.Link active className='Navlinks' href="/" >Home</Nav.Link> */}
                 </Nav>
                 <Nav className=" navitems" defaultActiveKey="/" onSelect={this.handleSelect}>    
                 {/* <NavLink exact activeClassName="Navlinks-active"><Nav.Link active className='Navlinks' href="/" >Home</Nav.Link></NavLink>  */}
                 <Nav.Item><Nav.Link active eventKey="home" className='Navlinks ' href="/frontend" >Home</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link active eventKey="about" className='Navlinks' href="/frontend/about">About Us</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link active eventKey="jobs" className='Navlinks' href="/frontend/jobs">Jobs</Nav.Link></Nav.Item>
                 <Nav.Item><div className='line-break'></div></Nav.Item>
                 <Nav.Item><Nav.Link active eventKey="startup" className='Navlinks' href="/frontend/startups" id='line-left-border'>Startups</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link active eventKey="investors" className='Navlinks' href="/frontend/investors" id='line-right-border'>Investors</Nav.Link></Nav.Item>
                 <Nav.Item><div className='line-break'></div></Nav.Item>
                 <Nav.Item><Nav.Link active eventKey="profile" className='Navlinks' href="/frontend/profile"><PersonCircle color='#21295C' height={30} width={30}/></Nav.Link></Nav.Item>
                 </Nav>

                 
               </Navbar.Collapse>
             </Navbar>
             <div className='views'>
             <Switch >
                  <Route exact path="/frontend">
                    <Home/>
                  </Route>
                  <Route exact path="/frontend/about">
                    <About/>
                  </Route>
                  <Route exact path="/frontend/startups">
                    <Startups/>
                  </Route>
                  <Route exact path="/frontend/investors">
                    <Investors/>
                  </Route>
                  <Route exact path="/frontend/profile">
                    <Profile/>
                  </Route>
                  <Route exact path="/frontend/jobs">
                    <Jobs/>
                  </Route>
             </Switch>
             </div>
             </Router>
             </div>
          )
     }
}

export default nav;