import React from 'react';
import PropTypes from 'prop-types';
import  {Navbar, Nav}  from 'react-bootstrap';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import the views
import Home from '../Home/Home';
import About from '../About/about';
import Startups from '../Startups/startups';
import Investors from '../Investors/investors';
import Profile from '../Profile/profile';
import Jobs from '../jobs/jobs';
import TC from '../policies/t&c';
import Policy from '../policies/policy';
import NoMatch from '../utility/404';

// The logo
import Logo from '../images/logo.png';

// Import footer
import Footer from '../footer/footer';

// Menu Icon
import {List, X} from 'react-bootstrap-icons';

class nav extends React.Component {
  constructor(props) {
      super(props);
      this.state =({
          // Set all the active states of the links
          home_active: false,
          about_active: false,
          jobs_active: false,
          startups_active: false,
          investors_active: false,
          profile_active: false,

          // The state of the toggle button
          expanded : false
      })
    }

    setExpanded = () =>{
          this.setState({expanded: !this.state.expanded})
          
    }

     render() {
          return(
               <div>
               <HashRouter basename='/'>
               <Navbar className="navigation shadow-sm"  collapseOnSelect expand="md" bg="light" sticky='top' >
               <Link to='/'><Navbar.Brand><img src={Logo} height={30} alt='Startvest logo'/></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-toggle' onClick={this.setExpanded}>
                     {(this.state.expanded) ? <X height={30} width={30} />: <List height={30} width={30} color='#21295C'/>}
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className="ml-auto navitems" defaultActiveKey="/">  
                  <Nav.Link href="#/" className={`Navlinks ${(this.state.home_active) ? 'active' : ''}`}>Home</Nav.Link>
                  <Nav.Link href="#about"  className={`Navlinks ${(this.state.about_active) ? 'active' : ''}`}>About</Nav.Link>
                  <Nav.Link href="#jobs" className={`Navlinks ${(this.state.jobs_active) ? 'active' : ''}`}>Jobs</Nav.Link>
                  <Nav.Link href="#startups"  className={`Navlinks ${(this.state.startups_active) ? 'active' : ''}`}>Startups</Nav.Link>
                  <Nav.Link href="#investors"  className={`Navlinks ${(this.state.investors_active) ? 'active' : ''}`}>Investors</Nav.Link>
                  <Nav.Link href="#profile" className={`Navlinks quick-signin-nav`}><div className='quick-signin shadow'>Sign Up For Free</div></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
               </Navbar>
             
             <div className='views'>
                  <Switch>
                  <Route exact path="/"><Home active={() => this.setState({home_active: true})} not_active={() => this.setState({home_active: false})}  investors={this.props.investors} startups={this.props.startups}/></Route>                    <Route exact path="/about"><About active={() => this.setState({about_active: true})} not_active={() => this.setState({about_active: false})}/></Route>  
                  <Route exact path="/startups"><Startups active={() => this.setState({startups_active: true})} not_active={() => this.setState({startups_active: false})} startups={this.props.startups}/></Route>
                  <Route exact path="/investors"><Investors active={() => this.setState({investors_active: true})} not_active={() => this.setState({investors_active: false})} investors={this.props.investors}/></Route>  
                  <Route exact path="/profile"><Profile active={() => this.setState({profile_active: true})} not_active={() => this.setState({profile_active: false})}/></Route>  
                  <Route exact path="/jobs"><Jobs active={() => this.setState({jobs_active: true})} not_active={() => this.setState({jobs_active: false})} jobs={this.props.jobs}/></Route>  
                  <Route path='/dashboard' component={() => { 
                         window.location.href = 'https://dashboard.startvest.io/'; 
                         return null;
                    }}/>
                  <Route exact path="/policy"><Policy/></Route> 
                  <Route exact path="/terms"><TC/></Route> 
                  <Route><NoMatch/></Route> 
                  </Switch>
             </div>
             </HashRouter>
             
             {/* Added footer to the navbar content */}
             <Footer/>
             </div>
          )
     }
}

nav.propTypes = {
     investors: PropTypes.oneOfType([PropTypes.array,PropTypes.object,]).isRequired,
     startups: PropTypes.oneOfType([PropTypes.array,PropTypes.object,]).isRequired,
     jobs: PropTypes.array.isRequired,
}

export default nav;