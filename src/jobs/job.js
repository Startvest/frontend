import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Startups/startups.css';
import PropTypes from 'prop-types';

import {Col, Container, Row, Button} from 'react-bootstrap';
import {ArrowLeft, CircleFill, ArrowRightShort} from 'react-bootstrap-icons';


function Job({job, goback}){
     return(
          <div>
               {/* {Object.values(job).map((val, ind) => */}
                <Container>
                <Row>
                    <Col xs={1}><ArrowLeft className='icon-back' width={40} height={40} onClick={goback}/></Col>
                    {/* <Col sm='auto'><span className='logo'><img src={startup.logo} alt={startup.company_name + ' Logo'}/></span></Col> */}
                     <Col md='auto'>
                     <h1 className='startups-head'>{job.company.company_name}</h1>
                     <p className='job-overview'><span>{job.job_title}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span>{job.location}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span>  <span>{job.salary}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span>  <span>{job.job_type}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span>  <span>{job.mode}</span></p>
                     </Col>
                </Row>
                <Row className='job-group'>
                     <Col md={6} sm={12}>
                          <h3 className='gallery-head'>Job description</h3>
                          <p>{job.description}</p>
                    </Col>
                    <Col md={6} sm={12}>
                         <h3 className='gallery-head'>Requirements</h3>
                         <ul className='working-list'> 
                              {job.requirements.map((val, ind) => 
                                   <li key={ind}><CircleFill className='icon-back' height={5} width={5}/>  {val} </li>
                              )}
                         </ul>
                    </Col>
                    </Row>
                    <Row className='job-group'>
                    <Col md={6} sm={12}>
                         <h3 className='gallery-head'>Extra Information</h3>
                         <ul className='working-list'>
                         {job.extra_info.map((val, ind) => 
                                   <li key={ind}> <CircleFill className='icon-back' height={5} width={5}/>  {val} </li>
                         )}
                         </ul>
                    </Col>
                </Row>
                {/* <Row className='more-information'>
                For more information or questions contact us at <span ><a className='alt-link' href = {"mailto: " + startup.email}>{startup.email}</a></span> or phone number  <span ><a className='alt-link' href={'tel:'+startup.number}>{startup.number}</a></span>
                </Row> */}
                <span className='btn-fill'><Button ><a target="_blank" rel="noreferrer" href = { 'http://'+job.application_link}>Apply now</a><ArrowRightShort  height={25} width={25}/></Button></span>
               </Container>
               {/* )} */}
              
          </div>
     )
}

Job.propTypes ={
     job: PropTypes.object.isRequired, 
     goback: PropTypes.func.isRequired
}

export default Job;