import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// Importing the main homepage svg picture
import Teampic from '../images/teamates.svg';
import { ArrowRightShort, CircleFill} from 'react-bootstrap-icons';

import {Fade, Zoom, Slide} from 'react-reveal';

//Startup json from the backend
var startups = {
     'voltex': {
          'logo':false, 
          'name':'Voltex Designs', 
          'location': 'Abuja, Nigeria',
          'est': '2019',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Graphics Design',
          'job': {
               '1':{
                    'name': 'Internship opportunity at voltex',
                    'role': 'FullStack developer',
                    'location': 'Abuja, Nigeria',
                    'salary': 'Unpaid'
               }  
          },
          'website': 'https://voltexdesign.io',
          'email': 'admin@spartech.com.ng',
          'number': '09096281736',
          'staff': 2,
          'model': 'B2C',
          'funding': 'Seed',
          'registered': false,
          'team':{
               '1':{
                    'name': 'Lorem Ipsum',
                    'position': 'CEO/Founder'
               },
               '2':{
                    'name': 'Lorem Ipsum',
                    'position': 'Marketing Strategist'
               },
               '3':{
                    'name': 'Lorem Ipsum',
                    'position': 'Senior Developer'
               }
               
          }
     },
     'alpha': {
          'logo':false, 
          'name':'Alpha Tech', 
          'location': 'Lagos, Nigeria',
          'est': '2017',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Cable Networks',
          'job': {
               '1':{
                    'name': 'Senior Developer at Alpha Tech',
                    'role': 'FullStack developer',
                    'location': 'Lagos, Nigeria',
                    'salary': 'Unpaid'
               }, 
          },
          'website': 'https://alphatech.com.ng',
          'email': 'admin@alphatech.com.ng',
          'number': '0816431736',
          'staff': 20,
          'model': 'B2B',
          'funding': '2nd Round',
          'registered': true,
          'team':{
               '1':{
                    'name': 'Lorem Ipsum',
                    'position': 'CEO/Founder'
               },
               '2':{
                    'name': 'Lorem Ipsum',
                    'position': 'Marketing Strategist'
               },
               '3':{
                    'name': 'Lorem Ipsum',
                    'position': 'Senior Developer'
               }
               
          }
     },
     'spartech': {
          'logo':false, 
          'name':'Spartech Energy ', 
          'location': 'Ogun, Nigeria',
          'est': '2018',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Energy solution',
          'job': null,
          'website': 'https://spartech.com.ng',
          'email': 'admin@spartech.com.ng',
          'number': '09076281736',
          'staff': 13,
          'model': 'B2C',
          'funding': 'Seed',
          'registered': false,
          'team':{
               '1':{
                    'name': 'Lorem Ipsum',
                    'position': 'CEO/Founder'
               },
               '2':{
                    'name': 'Lorem Ipsum',
                    'position': 'Marketing Strategist'
               },
               '3':{
                    'name': 'Lorem Ipsum',
                    'position': 'Senior Developer'
               }
               
          }
     },
     'slick': {
          'logo':false, 
          'name':'Slick Cloud', 
          'location': 'Kaduna, Nigeria',
          'est': '2020',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Saas, Iaas',
          'job': {
               '1':{
                    'name': 'Field Technician at Slick Cloud',
                    'role': 'Technician',
                    'location': 'Lagos, Nigeria',
                    'salary': 'N500,000 monthly'
               }  
          },
          'website': 'https://slickcloud.io',
          'email': 'admin@slickcloud.com.ng',
          'number': '09076284736',
          'staff': 5,
          'model': 'B2C',
          'funding': 'Seed',
          'registered': false,
          'team':{
               '1':{
                    'name': 'Lorem Ipsum',
                    'position': 'CEO/Founder',
               },
               '2':{
                    'name': 'Lorem Ipsum',
                    'position': 'Marketing Strategist'
               },
               '3':{
                    'name': 'Lorem Ipsum',
                    'position': 'Senior Developer'
               }
               
          }
     }
}

const investor={
     '1': {
          'name': 'PWZ Ventures',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Cloud Computing, Networking'
     },
     '2': {
          'name': 'Tony Elumelu Foundation',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Fintech, MSE, Female Entrepreneurs'
     },
     '3': {
          'name': 'Angel Tech Inc',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Networking, IT, Manufacturing'
     },
     '4': {
          'name': 'Y Combinator',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Networking, IT, Manufacturing'
     },
     '5': {
          'name': 'Dangote foundation',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Insuretech, IT, Manufacturing'
     },
     '6': {
          'name': 'Carrington Atlantic',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Fintech, MSE, Female Entrepreneurs'
     },
}
class investors extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
               count_startup: 0,
               count_investors: 0,
          })
     }

     componentDidMount(){
          this.interval = setInterval(() => {
              this.countStartups()
          }, 1000);
          
     }
     
     countStartups = () =>{
          if(this.state.count_startup < Object.keys(startups).length){
               this.setState({count_startup: this.state.count_startup + 1})
          }
     }

     render(){
          return(
               <div className="Home">
                    <h1 className='Home-head'>Where idea meets funding!</h1>
                    <Container className='homePage'>
                         <Row >
                              <Col className='text'>
                                   <h5 className='tagline'>We believe in your vision!</h5>
                                   <p className='homeText'>
                                        Present your ideas and
                                        <p> connect with top investors to achieve your dreams today!</p>
                                   </p>
                                   <Fade left>
                                   <Row className='home-btns'>
                                        <Col className='btn-outline'><Link to='/about'><Button>Learn More</Button></Link></Col>
                                        <Col  className='btn-fill'><Link to='/profile'><Button>Get Started<ArrowRightShort  height={25} width={25}/></Button></Link></Col>
                                   </Row>
                                   </Fade>
                              </Col>
                              <Zoom right>
                              <Col  className='teamIcon'><img className='home-image'  src={Teampic} alt="teamates discussing"  /></Col>
                              </Zoom>
                         </Row>
                    </Container>

                    {/* Container for top investors*/}
                    <Container className='home-startup' >
                         <Slide  right>
                         <div className='center'>
                         <h5 className='tagline ' >Connect to top investors</h5>            
                         <p className='counter'>{Object.keys(investor).length}+ Investors looking for startups</p>
                         </div>
                         <Row >   
                              {Object.values(investor).slice(3, 6).map((val, ind) => 
                              <div key={ind} className='job-container shadow'>
                                   <Row>
                                   {/* <Col sm='auto' ><CircleFill className='icon-back' height={50} width={50}/></Col> */}
                                   <Col sm='auto'>
                                        <div key={ind} className='col-startup-name' >{val.name}</div>
                                        <span className='underText'> {val.industry}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span>
                                   </Col>
                                   </Row>
                              </div>
                              )}
                              
                         </Row>
                         </Slide>
                    </Container>

                    {/* Container for options for startups */}
                    <Container className='home-startup'>
                         <Row >
                              <Slide left>
                              <Col>
                              <h5 className='tagline'>See all the top startups</h5>
                              <p className='counter margin-top'>{this.state.count_startup}+ startups Registered</p>
                              <p className='homeText'>Join us today to make you take a step closer in achieving your goals!</p>
                              </Col>
                              </Slide>
                         
                         <Zoom cascade right>
                              <Col >
                              {Object.values(startups).slice(1, 3).map((val, ind) => 
                              <div key={ind} className='job-container shadow'>
                                   <Row>
                                   {/* <Col sm='auto' ><CircleFill className='icon-back' height={50} width={50}/></Col> */}
                                   <Col sm='auto'>
                                        <div key={ind} className='col-startup-name' >{val.name}</div>
                                        <span className='underText'>Est. {val.est}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span className='underText' >{val.industry}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span className='underText' >{val.location}</span>
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