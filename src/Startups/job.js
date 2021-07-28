import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './startups.css';

import {Col, Container, Row, Button} from 'react-bootstrap';
import {ArrowLeft, CircleFill, ArrowRightShort} from 'react-bootstrap-icons';


const Job = ({startup, goback}) => {
     console.log(startup.job);
     return(
          <div>
               {Object.values(startup.job).map((val, ind) =>
                <Container key={ind}>
                <Row>
                    <Col xs={1}><ArrowLeft className='icon-back' width={40} height={40} onClick={goback}/></Col>
                    <Col sm='auto'><span className='logo'>Startup Logo</span></Col>
                     <Col sm='auto'>
                     <h1 className='startups-head'>{val.name}</h1>
                     <p className='job-overview'><span>{val.role}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span>{val.location}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span>  <span>{val.salary}</span></p>
                     </Col>
                </Row>
                <Row className='job-group'>
                     <Col md={6} sm={12}>
                          <h3 className='gallery-head'>Job description</h3>
                          Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit. Nulla semper mi adipiscing
                         volutpat. Nibh vitae urna, facilisis id et aenean.
                         Feugiat mauris turpis eget phasellus eget sed
                         libero ullamcorper. Turpis amet urna.
                    </Col>
                     <Col md={6} sm={12}>
                         <h3 className='gallery-head'>Perks and Benefits</h3>
                          Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit. Nulla semper mi adipiscing
                         volutpat. Nibh vitae urna, facilisis id et aenean.
                         Feugiat mauris turpis eget phasellus eget sed
                         libero ullamcorper. Turpis amet urna.
                    </Col>
                    </Row>
                    <Row className='job-group'>
                    <Col md={6} sm={12}>
                         <h3 className='gallery-head'>About Us</h3>
                          Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit. Nulla semper mi adipiscing
                         volutpat. Nibh vitae urna, facilisis id et aenean.
                         Feugiat mauris turpis eget phasellus eget sed
                         libero ullamcorper. Turpis amet urna.
                    </Col>
                    <Col md={6} sm={12}>
                         <h3 className='gallery-head'>Requirements</h3>
                          Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit. Nulla semper mi adipiscing
                         volutpat. Nibh vitae urna, facilisis id et aenean.
                         Feugiat mauris turpis eget phasellus eget sed
                         libero ullamcorper. Turpis amet urna.
                    </Col>
                </Row>
                <Row className='more-information'>
                For more information or questions contact us at <span ><a className='alt-link' href = {"mailto: " + startup.email}>{startup.email}</a></span> or phone number  <span ><a className='alt-link' href={'tel:'+startup.number}>{startup.number}</a></span>
                </Row>
                <span className='btn-fill'><Button ><a  href = {"mailto: " + startup.email}>Apply now</a><ArrowRightShort  height={25} width={25}/></Button></span>
               </Container>
               )}
              
          </div>
     )
}

export default Job;