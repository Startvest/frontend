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


class Startup extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
            startups: this.props.startups,
            view: 'startups',
            id: null , //id number of the startup to open

            hover: true
          })
        }

     // Render the startups in column view
     startups = () => {  
          return(
               <div>
                    <h1 className='startups-head'>Startups</h1>
                    <Container fluid >
                    <Row className='center col-startups-row'>
                    {Object.values(this.state.startups).map((val, index)=>
                              <Col className='col-startup ' key={index}  sm={5} >
                                   <h3 className='col-startup-name' onClick={()=> {this.setState({view: 'startup', id: index})}}>{val.company_name}</h3>
                                   <p className='col-startup-sm'>{val.location}</p>
                                   <p className='col-startup-sm'>Est. {val.est}</p>
                                   <p>{val.snapshot}</p>
                                   <Row>
                                        <Col className='col-startup-sm' >{val.category[0]}</Col>
                                        {(val.jobs.length > 0) ? <Col className='col-startup-job' onClick={() => {this.setState({view: 'job', id: index})}}>{Object.keys(val.jobs).length} job</Col> :''}
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
           var startup = Object.values(this.state.startups)[id];
          //  console.log(arr[id]);
          return(
               <div className='startups'>
                    <Container fluid>
                         <Row>
                              <Col sm='auto'><ArrowLeft className='icon-back' width={40} height={40} onClick={() =>{this.setState({view: 'startups'})}}/></Col>
                              <Col sm='auto'><span className='logo'>Startup Logo</span></Col>
                              <Col sm='auto'><h3 className='startups-head'>{startup.company_name}</h3><p className='col-startup-sm'>{startup.location}</p></Col>
                         </Row>
                    </Container>
                   <Container fluid className='description'>
                    <Row>
                         <Col sm={9}>{startup.snapshot}</Col>
                         <Col sm='auto' className='description-desc'>
                         <Row ><Col>Website</Col><Col><a href={startup.website} className='link bold'>{startup.website}</a></Col></Row>
                         <Row><Col>Staff Strength</Col><Col className='bold'>{startup.team.length}</Col></Row>
                         <Row><Col>Founded</Col><Col className='bold'>{startup.est}</Col></Row>
                         <Row><Col>Registered</Col ><Col className='bold'>{(startup.registered) ? 'Yes':'No'}</Col></Row>
                         <Row><Col>Industry</Col><Col className='bold'>{startup.category[0]}</Col></Row>
                         <Row><Col>Business Model</Col><Col className='bold'>{startup.business_model}</Col></Row>
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
                              {/* Add a .map function that loops throught the amount of picture given */}
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
                          <Col key={ind}><p><span id='avatar'><Person color='white' margin={3} height={30} width={30}/></span></p><b>{val}</b><p>{val}</p></Col>      // <th key={ind}>{(val) ? val:' '}</th>
                         )} 
                         </Row>
                         </Container>

                         {/* Benefits of working */}
                         <Container>
                              <h3 className="gallery-head">Working at {startup.company_name}</h3>
                              <ul className='working-list'> 
                                   {startup.work_benefits.map((val, ind) => 
                                    <li key={ind}><CircleFill className='icon-back' height={10} width={10}/>  {val} </li>
                                   )}
                              </ul>
                         </Container>

                         {/* Send a mail */}
                         <span className='btn-fill'><Button ><a href = {"mailto: startup.email"}>Send a mail</a><ArrowRightShort  height={25} width={25}/></Button></span>
               </div>
          )
     }

     renderview(){
          switch(this.state.view){
               default: return <div><Spinner className="load"  animation='border' color='#21295C'/></div>
                   case 'startups': return this.startups();
                   case 'startup': return this.startup();
                   case 'job': return <Job startup={Object.values(this.state.startups)[this.state.id]} goback={() =>{this.setState({view: 'startups'})}}/>;
                   
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