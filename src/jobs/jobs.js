import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jobs.css';
import { Row, Col , Container, Spinner} from 'react-bootstrap';
import {CircleFill} from 'react-bootstrap-icons';

// import job view from jobs
import Job from '../Startups/job';

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


const jobsList = {
          '1':{
               'id': '1',
               'name': 'Senior Developer at Alpha Tech',
               'role': 'FullStack developer',
               'location': 'Lagos, Nigeria',
               'salary': 'Unpaid',
               'type': 'Part-time'
          }, 
          '2':{
               'id': '3',
               'name': 'Field Technician at Slick Cloud',
               'role': 'Technician',
               'location': 'Lagos, Nigeria',
               'salary': 'N500,000 monthly',
               'type': 'Full-time'
          } ,
          '3':{
               'id': '0',
               'name': 'Internship opportunity at voltex',
               'role': 'FullStack developer',
               'location': 'Abuja, Nigeria',
               'salary': 'Unpaid',
               'type': 'Remote '
          }  
}


class jobs extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
            view: 'jobs',
            id: null , //id number of the startup to open
          })
     }

     jobs = () =>{
          return(
          <div > 
               <h1 className='investors-head'>Latest jobs at startups</h1>
               <h5>Showing {Object.keys(jobsList).length} available jobs</h5>  
               <Container >
               <Row>
               {Object.values(jobsList).map((val, ind) => 
               <div key={ind} className='job-container shadow'>
               <Row>
               <Col sm='auto'><CircleFill className='icon-back' height={50} width={50}/></Col>
               <Col sm='auto'>
                    <div key={ind} className='col-startup-name' onClick={() => {this.setState({id: val.id, view: 'job' })}}>{val.name}</div>
                    <span >{val.role}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span >{val.location}</span> <span><CircleFill className='icon-back' height={5} width={5}/></span> <span >{val.type}</span>
               </Col>
               </Row>
               </div>
               )}
                </Row>
                </Container>
          </div>
          )
     }

     renderview = () =>{
          switch(this.state.view){
               default: return <div><Spinner className="load"  animation='border' color='#21295C'/></div>
                   case 'jobs': return this.jobs();
                   case 'job': return <Job startup={Object.values(startups)[this.state.id]} goback={() =>{this.setState({view: 'jobs'})}}/>;
                   
           }
     }

     render(){
          return(
          <div className='job-view'>
               {this.renderview()}
          </div>
          )
     }
}
export default jobs;