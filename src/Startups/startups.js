import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './startups.css';
import { Spinner, Col, Container, Row, Carousel, Button} from 'react-bootstrap';
import {ArrowLeft, ArrowRightShort, Person, CircleFill} from 'react-bootstrap-icons';
import ReactPlayer from "react-player";

// Import Job view
import Job from './job';

// Import pictures
import Teampic1 from '../images/gallery1.png';
import Teampic2 from '../images/gallery2.png';

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



class Startup extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
            view: 'startups',
            id: null , //id number of the startup to open
          })
        }

     // Render the startups in column view
     startups = () => {
          
          return(
               <div>
                    <h1 className='startups-head'>Startups</h1>
                    <Container fluid >
                    <Row className='center col-startups-row'>
                    {Object.values(startups).map((val, index)=>
                              <Col className='col-startup shadow' key={index}  sm={5} >
                                   <h3 className='col-startup-name' onClick={()=> {this.setState({view: 'startup', id: index})}}>{val.name}</h3>
                                   <p className='col-startup-sm'>{val.location}</p>
                                   <p className='col-startup-sm'>Est. {val.est}</p>
                                   <p>{val.description}</p>
                                   <Row>
                                        <Col className='col-startup-sm' >{val.industry}</Col>
                                        {(val.job) ? <Col className='col-startup-job' onClick={() => {this.setState({view: 'job', id: index})}}>{Object.keys(val.job).length} job</Col> :''}
                                   </Row>
                              </Col>
                    )}
                    </Row>
                    </Container>

                    
               </div>
          )
     }

      // Render the detailed view of a startup
      startup = () => {
           var id = this.state.id;
           var startup = Object.values(startups)[id];
          //  console.log(arr[id]);
          return(
               <div className='startups'>
                    <Container fluid>
                         <Row>
                              <Col sm='auto'><ArrowLeft className='icon-back' width={40} height={40} onClick={() =>{this.setState({view: 'startups'})}}/></Col>
                              <Col sm='auto'><span className='logo'>Startup Logo</span></Col>
                              <Col sm='auto'><h3 className='startups-head'>{startup.name}</h3><p className='col-startup-sm'>{startup.location}</p></Col>
                         </Row>
                    </Container>
                   <Container fluid className='description'>
                    <Row>
                         <Col sm={9}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ut
                         pellentesque eros hendrerit proin et. Convallis condimentum sed magna
                         iaculis etiam aliquam dignissim urna libero. Erat augue vestibulum egestas
                         risus libero quis purus. Molestie sagittis sit id nunc, tellus quis orci tellus
                         sollicitudin. Magna nibh dignissim sit aliquam elementum, ut sed libero turpis.
                         Dictum at nullam imperdiet dui bibendum at vulputate velit.

                         Rutrum volutpat suspendisse mattis elementum nec viverra nibh. Quis
                         pellentesque eleifend tristique gravida id elementum pulvinar. Morbi libero
                         amet enim, nulla gravida consequat ullamcorper aliquam. Nibh pulvinar orci
                         fringilla tincidunt dis sit natoque sed tortor. Quam purus porttitor diam nisl
                         quis sodales dui.

                         Nulla proin amet, integer sed non pulvinar maecenas sed. Vestibulum. Nulla
                         proin amet, integer sed non pulvinar maecenas sed. Vestibulum. Quam purus
                         porttitor diam nisl quis sodales dui.
                         </Col>
                         <Col sm='auto' className='description-desc'>
                         <Row ><Col>Website</Col><Col><a href={startup.website} className='link bold'>{startup.website}</a></Col></Row>
                         <Row><Col>Staff Strength</Col><Col className='bold'>{startup.staff}</Col></Row>
                         <Row><Col>Founded</Col><Col className='bold'>{startup.est}</Col></Row>
                         <Row><Col>Registered</Col ><Col className='bold'>{(startup.registered) ? 'Yes':'No'}</Col></Row>
                         <Row><Col>Industry</Col><Col className='bold'>{startup.industry}</Col></Row>
                         <Row><Col>Business Model</Col><Col className='bold'>{startup.model}</Col></Row>
                         <Row><Col>Funding State</Col><Col className='bold'>{startup.funding}</Col></Row>
                         </Col>
                    </Row>
                   </Container>

                        {/* Gallery Section */}
                        <Container fluid>
                         <h3 className="gallery-head">Gallery</h3>
                         <Row>
                         <Col>
                         <Carousel className='gallery shadow'>
                              <Carousel.Item>
                              <img
                                   className="gallery-pic"
                                   src={Teampic1}
                                   alt="First slide"
                              />
                              <Carousel.Caption>
                                   <h3>First slide label</h3>
                                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                              </Carousel.Caption>
                              </Carousel.Item>
                              
                              <Carousel.Item>
                              <img
                                   className="gallery-pic"
                                   src={Teampic2}
                                   alt="Second slide"
                              />
                             
                              <Carousel.Caption>
                                   <h3>Second slide label</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </Carousel.Caption>
                              </Carousel.Item>
                         </Carousel>
                         </Col>
                         <Col>
                         {/* <div>Video Column</div> */}
                         <ReactPlayer className='gallery-video' url='https://www.youtube.com/embed/suuTbKJV7Ik?autoplay=1'/>
                         </Col>
                         </Row>
                         </Container>

                         {/* Team Executives Section */}
                         <Container>
                         <h3 className="gallery-head">Key Executives</h3>
                         <Row>
                         {Object.values(startup.team).map((val, ind)=>
                          <Col key={ind}><p><span id='avatar'><Person color='white' margin={3} height={30} width={30}/></span></p><b>{val.name}</b><p>{val.position}</p></Col>      // <th key={ind}>{(val) ? val:' '}</th>
                         )} 
                         </Row>
                         </Container>

                         {/* Benefits of working */}
                         <Container>
                              <h3 className="gallery-head">Working at {startup.name}</h3>
                              <ul className='working-list'> 
                                   {[1, 2, 3, 4, 5, 6].map((val, ind) => 
                                    <li key={ind}><CircleFill className='icon-back' height={10} width={10}/>  Adipiscing elit. Nulla semper mi adipiscing, volutpat. </li>
                                   )}
                              </ul>
                         </Container>

                         {/* Send a mail */}
                         <span className='btn-fill'><Button ><a href = {"mailto: " + startup.email}>Send a mail</a><ArrowRightShort  height={25} width={25}/></Button></span>
               </div>
          )
     }

     renderview(){
          switch(this.state.view){
               default: return <div><Spinner className="load"  animation='border' color='#21295C'/></div>
                   case 'startups': return this.startups();
                   case 'startup': return this.startup();
                   case 'job': return <Job startup={Object.values(startups)[this.state.id]} goback={() =>{this.setState({view: 'startups'})}}/>;
                   
           }
     }
     render(){
          return(
          <div className='startups'>
               {this.renderview()}               
          </div>
          )
     }
}
export default Startup;