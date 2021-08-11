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
                         <img src={Logo} height={40}  alt='Our logo'/>
                    </Col>

                    <Col className='footer-links' md={'auto'} sm={12}>
                    <ul>
                         <li className='links-head'>Company</li>
                         <li>About Us</li>
                         <li>Profile</li>
                         <li>Career</li>
                    </ul>
                    </Col>

                    <Col className='footer-links' md={'auto'} sm={12}>
                    <ul>
                         <li className='links-head'>Quick Links</li>
                         <li>Startups</li>
                         <li>Investors</li>
                         <li>Available Jobs</li>
                    </ul>
                    </Col>

                    <Col className='footer-links' md={'auto'} sm={12}>
                    <ul>
                         <li className='links-head'>Policies</li>
                         <li>Privacy Policy</li>
                         <li>Terms and Condition</li>
                    </ul>
                    </Col>

                    <Col className='footer-links' md={'auto'} sm={12}>
                         <ul>
                              <li className='links-head'>Contact us</li>
                              <li><span><EnvelopeFill color='#9EB3C2' /></span> <span className='links-a-head'>Email</span> - <a href='mailto:admin@startvest.io'>admin@startvest.io</a></li>
                              <li><span><TelephoneOutboundFill color='#9EB3C2' /></span> <span className='links-a-head'>Phone</span> - <a href='tel:+2349096281736'>+234 909 628 1736</a></li>
                              <li><span><GeoAltFill color='#9EB3C2' /></span> <span className='links-a-head'>Location</span> - Abuja, Nigeria</li>
                         </ul>
                    </Col>
               </Row>
              
               <Row className='footer-text' fluid='true'> 
                    <Col >
                    Copyright &copy;  2021 StartVest Inc.   
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