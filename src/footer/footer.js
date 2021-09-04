import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import {Container, Row, Col} from 'react-bootstrap';
import {GeoAltFill, TelephoneOutboundFill,  EnvelopeFill } from 'react-bootstrap-icons';

// Logo Import
import Logo from '../images/logo-white.png';
class footer extends React.Component {
     render(){
          return(
          <div className='footer'>
               <Container fluid>
                   
               <Row >
                    <Col className='footer-links' md={'auto'}>
                         <img src={Logo} height={30}  alt='Our logo'/>
                    </Col>

                    <Col className='footer-links' md={'auto'} sm={'auto'}>
                    <ul>
                         <li className='links-head'>Company</li>
                         <li><a href={'#about'}>About Us</a></li>
                         <li><a href={'#profile'}>Profile</a></li>
                         <li className='coming-soon'>Career @ StartVest</li>
                    </ul>
                    </Col>

                    <Col className='footer-links' md={'auto'} sm={'auto'}>
                    <ul>
                         <li className='links-head'>Quick Links</li>
                         <li><a href={'#startups'}>Startups</a></li>
                         <li><a href={'#investors'}>Investors</a></li>
                         <li><a href={'#jobs'}>Available Jobs</a></li>
                    </ul>
                    </Col>

                    <Col className='footer-links' md={'auto'} sm={'auto'}>
                    <ul>
                         <li className='links-head'>Policies</li>
                         <li><a href={'#policy'}>Privacy Policy</a></li>
                         <li><a href={'#terms'}>Terms and Condition</a></li>
                    </ul>
                    </Col>

                    <Col className='footer-links' md={'auto'} sm={'auto'}>
                         <ul>
                              
                              <li className='links-head'>Contact us</li>
                              <li><span><EnvelopeFill color='#9EB3C2' /></span> <span className='links-a-head'>Email</span> - <a className='contact-link' href='mailto:admin@startvest.io'>contact@startvest.io</a></li>
                              <li><span><TelephoneOutboundFill color='#9EB3C2' /></span> <span className='links-a-head'>Phone</span> - <a href='tel:+2349096281736'>+234 909 628 1736</a></li>
                              <li><span><GeoAltFill color='#9EB3C2' /></span> <span className='links-a-head'>Location</span> - Abuja, Nigeria</li>
                         </ul>
                    </Col>
               </Row>
              
               <Row className='footer-text' fluid='true'> 
                    <Col >
                    &copy;  2021 StartVest Inc. All rights reserved   
                    </Col>
                    {/* <Col className='ml-auto'>
                    <span><Twitter color='#9EB3C2' /></span>  <span>{<Github color='#9EB3C2 '/>}</span>
                    </Col> */}
               </Row>
              
               </Container>
              
          </div>
          )
     }
}
export default footer;