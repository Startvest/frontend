import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './startups.css';
import { Spinner, Col, Container, Row, Carousel, Button, Form, InputGroup, Nav} from 'react-bootstrap';
import {ArrowLeft, ArrowRightShort, Person, CircleFill, Search, GeoAltFill, BoxArrowUpRight} from 'react-bootstrap-icons';
// import ReactPlayer from "react-player";

// Import Job view
import Job from '../jobs/job';

// Import pictures
import Teampic1 from '../images/gallery1.png';
import Teampic2 from '../images/gallery2.png';
import StartupThumb from '../images/startuptn.jpg';
import StartupLogo from '../images/startuplogo.png';
import StartupBG from '../images/startupbg.png';

class Startup extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
            startups: this.props.startups,
            view: 'startups',
            id: null , //id number of the startup to open

            hover: true, 
            logoHeight: 0,
          })
        }


        
     componentDidMount(){
          this.props.active();
          document.title = 'See top startups';
          window.scrollTo(0, 0);

          this.setState({logoHeight: document.getElementById('s-logo').clientHeight});
          
     }

     componentWillUnmount(){
          this.props.not_active();
     }


     // Render the startups in column view
     startups = () => {  
          
          return(
               <div>
                    <h1 className='startups-head'>Startups</h1>
                    <Container>
                         <Row>
                              <Col xs={5}>
                                   <InputGroup size='sm' className='startups-s'>
                                        <InputGroup.Text className='startups-s-icon' id="basic-addon1"><Search height={15} width={15}/></InputGroup.Text>
                                        <Form.Control className='startups-s-text'  type="text" placeholder="Search..." />
                                   </InputGroup>
                              </Col>
                              <Col xs={5}><Form.Control className="startups-s-text" size="sm" type="text" placeholder="Industry" /></Col>
                              <Col xs={2} className="startups-search"><Button>Search</Button></Col>
                         </Row>
                    </Container>
                    <Container  >
                    <Row className='center col-startups-row'>
                    {Object.values(this.state.startups).map((val, index)=>
                              <Col className='col-startup ' key={index}  md={4} >
                                   <div><img  src={StartupThumb} className="col-startup-bg"/></div>
                                   <img id="s-logo" src={StartupLogo} className="col-startup-logo" style={{marginTop: (-1/2)*(this.state.logoHeight)}}/>
                                   <h3 className='col-startup-name' onClick={()=> {this.setState({view: 'startup', id: index})}}>{val.company_name}</h3>
                                   <p className='col-startup-sm'>{val.location}</p>
                                   <p className='col-startup-sm'>Established {val.year_established}</p>
                                   <p className='col-startup-sc'>{val.snapshot}</p>
                                   <Row>
                                        <Col className='col-startup-sm' >{Object.values(val.category).map((v,i) => <span>{v}</span>)}</Col>
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
           document.title = `${startup.company_name} @ StartVest`;
          //  const iconImg = document.getElementById("sp-img").clientHeight;
          //  console.log(arr[id]);
          return(
               <div className='sp'>
                    <img alt={startup.company_name + " cover image"} src={(startup.logo) ? startup.logo:StartupBG} className='sp-bg'/>
                    <div className='sp-back'><ArrowLeft className='icon-back' width={30} height={30} onClick={() =>{this.setState({view: 'startups'})}}/></div>
                    <img id='sp-img' style={{marginTop:  -(this.state.logoHeight)/2}} className='sp-logo' src={(startup.logo) ? startup.logo:StartupLogo} alt={startup.company_name + ' Logo'}/>

                    <Container className="sp-details">
                    <h3 className='startups-head'>{startup.company_name} <BoxArrowUpRight height={30} width={30} /></h3>
                    <p className='sp-sm'><GeoAltFill height={10} width={10}/> {startup.location}</p>

                    <p>{startup.snapshot}</p>
                    </Container>

                   <Container className='description'>
                    <Row>
                         
                         <Col md='4' sm='auto' className='description-desc'>
                         <Row ><Col>Website</Col><Col><a href={startup.website} className='link bold'>{startup.website}</a></Col></Row>
                         <Row><Col>Staff Strength</Col><Col className='bold'>{startup.company_size}</Col></Row>
                         <Row><Col>Founded</Col><Col className='bold'>{startup.year_established}</Col></Row>
                         <Row><Col>Registered</Col ><Col className='bold'>{(startup.registered) ? 'Yes':'No'}</Col></Row>
                         <Row><Col>Industry</Col><Col className='bold'>{Object.values(startup.category).map((v,i) => v )}</Col></Row>
                         <Row><Col>Business Model</Col><Col className='bold'>{startup.business_model}</Col></Row>
                         <Row><Col>Funding Stage</Col><Col className='bold'>{startup.funding_stage}</Col></Row>
                         </Col>
                         <Col md={'2'}></Col>
                         <Col md={'6'} sm='auto'>
                              Unique selling points
                              <ul>
                                   <li>Easy to use</li>
                                   <li>Proprietary Artificial Intelligence software</li>
                                   <li>Over $10 billion in transactions</li>
                                   <li>1m+ active customers</li>
                              </ul>
                         </Col>
                    </Row>
                   </Container>

                   <Container>
                   <Nav variant="pills" defaultActiveKey="/pitch">
                    <Nav.Item>
                    <Nav.Link href="/pitch">Pitch</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                         <Nav.Link eventKey="contact">Contact</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                         <Nav.Link eventKey="team">Team</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                         <Nav.Link eventKey="docs">Documents</Nav.Link>
                    </Nav.Item>
                    
                    </Nav>

                    
                   </Container>

                        {/* Gallery Section */}
                        <Container fluid>
                         
                         <Row>
                         <Col xs={'12'}>
                         <h3 className="gallery-head">Gallery</h3>
                              {/* Add a .map function that loops throught the amount of picture given */}
                              {(startup.gallery.length > 0) ? 
                                   
                                   Object.values(startup.gallery).map((val,i) => 
                                   <Carousel className='gallery shadow' key={i}>
                                   <Carousel.Item key={i}>
                                        <span>{startup.gallery}</span>
                                   <img
                                        className="gallery-pic"
                                        src={val.image}
                                        alt={ val.startup + ' slide ' + val.id }
                                   />
                                   <Carousel.Caption>
                                        <h3>val.startup</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                   </Carousel.Caption>
                                   </Carousel.Item>    
                                   </Carousel>
                                   )                               
                              :<Carousel className='gallery shadow'><Carousel.Item>
                              <img
                                   className="gallery-pic"
                                   src={Teampic1}
                                   alt="First slide"
                              />
                              {/* <Carousel.Caption>
                                   <h3>First slide label</h3>
                                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                              </Carousel.Caption> */}
                              </Carousel.Item>
                              
                              <Carousel.Item>
                              <img
                                   className="gallery-pic"
                                   src={Teampic2}
                                   alt="Second slide"
                              />
                             
                              {/* <Carousel.Caption>
                                   <h3>Second slide label</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </Carousel.Caption> */}
                              </Carousel.Item>
                              </Carousel>}
                         
                         </Col>
                         
                         {/* <Col sm={'auto'}>
                         <h3 className="gallery-head">{startup.company_name + ' pitch'}</h3>
                         <img className='gallery-video' src={startup.pitch} alt={startup.company_name + ' pitch'}/>
                         </Col> */}
                         </Row>
                         </Container>

                         {/* Team Executives Section */}
                         <Container>
                              <Row>
                                   <Col md={'auto'}>
                                   <h3 className="gallery-head">Key Executives</h3>
                                   <Row>
                                   {Object.values(startup.team).map((val, ind)=>
                                   <Col key={ind}><p><span id='start-avatar'><Person color='white' margin={3} height={30} width={30}/></span></p><b>{val}</b><p>{val}</p></Col>      // <th key={ind}>{(val) ? val:' '}</th>
                                   )} 
                                   </Row>
                                   </Col>
                                   

                                   {/* Benefits of working */}
                                   <Col md={'auto'}>
                                        <h3 className="gallery-head">Working at {startup.company_name}</h3>
                                        <ul className='working-list'> 
                                             {startup.work_benefits.map((val, ind) => 
                                             <li key={ind}><CircleFill className='icon-back' height={10} width={10}/>  {val} </li>
                                             )}
                                        </ul>
                                   </Col>
                              </Row>
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

Startup.propTypes = {
     startups: PropTypes.array.isRequired,
     active: PropTypes.func.isRequired,
     not_active: PropTypes.func.isRequired
}

export default Startup;