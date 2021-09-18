import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// Prototype Validation
import PropTypes from 'prop-types';

// Importing the main homepage svg picture
import Teampic from '../images/teamates.svg';
import { ArrowRightShort, CircleFill, ClockHistory, ShopWindow} from 'react-bootstrap-icons';

import {Fade, Zoom, Slide} from 'react-reveal';

// Notification bar
import Notifyer from '../utility/notification';
// import ConnectDB from '../utility/connectdb';


class home extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
               count_startup: 0,
               count_investors: 0,
               shadow: false,
               
               // The investors list from the database
               investors: this.props.investors,
               startups: this.props.startups,

               // Make the multiple option of the notification false
               multiple: false
          })
     }

     async componentDidMount(){
          document.title = 'Home - Startvest'
          window.scrollTo(0, 0);
          this.interval = setInterval(() => {
              this.countStartups()
          }, 2000);
     
     }


     
     // Count and iterate over the amount of startups,
     //  to give an animation of counting on the home page
     countStartups = () =>{
          if(this.state.count_startup < Object.keys(this.state.startups).length){
               this.setState({count_startup: this.state.count_startup + 1})
          }
     }

     // data for the unique selling point
     usp = [
          {
               "logo": {
                    "img" : <ShopWindow height={20} width={30} color={'#A45CFF'}/>,
                    "bg": "rgba(164, 92, 255, 0.05)"
               },
               "title": "We showcase budding startups", 
               "desc": "They are startups looking for early stage funding, from the community to actualize their dreams"
          },
          {
               "logo": {
                    "img" : <ClockHistory height={20} width={30} color={'#75FDCD'}/>,
                    "bg": "rgba(117, 253, 205, 0.1)"
               },
               "title": "Get started in minutes", 
               "desc": "Create an investor account and start investing eith as little as N1000"
          },    
          
     ]


     render(){
          return(
               <div className="Home">
                     {(this.state.error) ? <Notifyer message={this.state.errMessage} type={this.state.type} multiple={this.state.multiple} onDismissed={() => this.setState({error: false})} />:null}
                    <h1 className='Home-head'>Where your idea meets funding!</h1>
                    <Container className='homePage' fluid>
                         <Row className='flex-column-reverse flex-md-row'>
                              <Col className='text ' >
                                   <h5 className='tagline'>We believe in your vision!</h5>
                                   <div className='homeText'>
                                        Present your ideas and
                                        <p> connect with top investors to achieve your dreams today!</p>
                                   </div>
                                   <Fade left>
                                   <Row className='home-btns'>
                                        <Col  className='btn-outline '><Link to='/about'><Button>Learn More</Button></Link></Col>
                                        <Col  className='btn-fill '><Link to='/profile'><Button>Get Started<ArrowRightShort  height={25} width={25}/></Button></Link></Col>
                                   </Row>
                                   </Fade>
                              </Col>
                              <Zoom right>
                              <Col  className='teamIcon'><img className='home-image'  src={Teampic} alt="teamates discussing"  /></Col>
                              </Zoom>
                         </Row>
                    </Container>

                    {/* Container for unique selling points */}
                    <Container className='home-startup ' >
                         <Slide down>
                              <h5 className='tagline'>We are the platform to invest in disruptive ideas <span className='tagline-italic'>early!</span></h5>
                         </Slide>

                         <Row>
                              {this.usp.map((v,i) => 
                               <Col md={4} sm={'auto'} className='usp-container '>
                                    <Row>
                                         <Col xs={2}><div style={{backgroundColor: `${v.logo.bg}`}}  className='usp-logo'>{v.logo.img}</div></Col>
                                         <Col>
                                         <div className='usp-title'>{v.title}</div>
                                         <span className='usp-description'>{v.desc}</span>
                                         </Col>
                                    </Row>
                                    
                              </Col> 
                              )}    
                         </Row>
                    </Container>

                    {/* Container for top investors*/}
                    <div className='accent'>{/*accent colour change */}
                    <Container className='home-startup' fluid>
                         <Slide  right>
                         <div className='center'>
                         <h5 className='tagline ' >Connect to top investors</h5>            
                         <p className='counter'>{this.state.investors.length}+ Investor{(this.state.investors > 1)? 's':''} looking for startups</p>
                         </div>
                         <Row >   
                              {Object.values(this.state.investors).slice(0, 3).map((val, ind) => 
                              <div key={ind} className='job-container shad'>
                                   <Row>
                                   <Col sm='auto'>
                                        <div key={ind} className='col-startup-name' >{val.name}</div>
                                        <span className='underText'> {Object.values(val.interests).map((v,i) => <span key={i}><CircleFill className='icon-back' height={5} width={5}/> {v}  </span>)} 
                                        </span>
                                   </Col>
                                   </Row>
                              </div>
                              )}
                              
                         </Row>
                         </Slide>
                    </Container>

                    {/* Container for options for startups */}
                    <Container className='home-startup ' fluid>
                         <Row >
                              <Slide left>
                              <Col>
                              <h5 className='tagline'>See all the top startups</h5>
                              <p className='counter margin-top'>{this.state.count_startup}+ startup{(this.state.count_startup > 1)? 's':''} Registered</p>
                              <p className='homeText'>Join us today to make you take a step closer in achieving your goals!</p>
                              </Col>
                              </Slide>
                         
                         <Zoom cascade right>
                              <Col sm={12}>
                              {Object.values(this.state.startups).slice(0, 2).map((val, ind) => 
                              <div id={ind} key={ind} className='job-container shadow' >
                                   <Row>
                                   <Col sm='auto'>
                                        <div key={ind} className='col-startup-name' >{val.company_name}</div>                                                                
                                        <span className='underText'>Est. {val.year_established}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span className='underText' >{Object.values(val.category).map((v,i) => `${v} `)}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span className='underText' >{val.location}</span>
                                   </Col>
                                   </Row>
                              </div>
                              )}
                              </Col>
                         </Zoom>
                         </Row>
                    </Container>

                    </div>



               </div>
          )
          
     }
}

home.propTypes = {
     investors: PropTypes.object.isRequired,
     startups: PropTypes.object.isRequired
   };
export default home;