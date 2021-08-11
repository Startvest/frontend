import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// Importing the main homepage svg picture
import Teampic from '../images/teamates.svg';
import { ArrowRightShort, CircleFill} from 'react-bootstrap-icons';

import {Fade, Zoom, Slide} from 'react-reveal';

// Notification bar
import Notifyer from '../utility/notification';
// import ConnectDB from '../utility/connectdb';

class investors extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
               count_startup: 0,
               count_investors: 0,
               shadow: false,
               
               // The investors list from the database
               investors: this.props.investors,
               startups: this.props.startups,

          })
     }

     async componentDidMount(){
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


     render(){
          return(
               <div className="Home">
                     {(this.state.error) ? <Notifyer message={this.state.errMessage} type={this.state.type} onDismissed={() => this.setState({error: false})} />:null}
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

                    {/* Container for top investors*/}
                    
                    <Container className='home-startup' fluid>
                         <Slide  right>
                         <div className='center'>
                         <h5 className='tagline ' >Connect to top investors</h5>            
                         <p className='counter'>{this.state.investors.length}+ Investor{(this.state.investors > 1)? 's':''} looking for startups</p>
                         </div>
                         <Row >   
                              {Object.values(this.state.investors).slice(0, 2).map((val, ind) => 
                              <div key={ind} className='job-container shad'>
                                   <Row>
                                   <Col sm='auto'>
                                        <div key={ind} className='col-startup-name' >{'name'}</div>
                                        <span className='underText'> {Object.values(val.interests).map((v,i) => <span> {v}  <CircleFill className='icon-back' height={5} width={5}/> </span>)} 
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
                                        <span className='underText'>Est. {val.est}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span className='underText' >{Object.values(val.category).map((v,i) => v, )}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span className='underText' >{val.location}</span>
                                   </Col>
                                   </Row>
                              </div>
                              )}
                              </Col>
                         </Zoom>
                         </Row>
                    </Container>



               </div>
          )
          
     }
}
export default investors;