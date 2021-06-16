import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import {Container, Row, Col} from 'react-bootstrap';
import TeamPic from '../images/team_3.svg';
import { Person } from 'react-bootstrap-icons';

// Format of team members [avatarurl, name, position] 
var team = {
     'member1': {
          'image':false, 
          'name':'Okorite Briggs', 
          'position':'Backened Developer'
     },
     'member2': {
          'image':false, 
          'name':'Hanif Adedotun', 
          'position':'Frontend Developer & Graphics Designer'
     },
     'member3': {
          'image':false, 
          'name':'David Utee Usiere', 
          'position':'Frontend Developer & Scribe'
     },
     'member4': {
          'image':false, 
          'name':'Fortune Aliebiesu', 
          'position':'Backened Developer'
     }
}

class about extends React.Component {
     render(){
          return(
          <div>
               <h1 className="heading">About Us</h1>
               <Container >
                    <Row className="teambrief" >
                         <Col><img src={TeamPic} className='about-team-image ' sm={12} md={6} alt="Team pic svg"/></Col>

                         <Col sm={12} md={6} >
                         <h2 className="teamHead">Meet our team</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper tortor sit amet consequat semper. Proin malesuada enim vel felis rhoncus, vel cursus tellus porttitor. Nulla facilisis vehicula mattis. Sed dapibus sem a urna malesuada fermentum. Pellentesque aliquet lorem eget turpis molestie aliquam. Cras pharetra, metus in consectetur interdum, tellus tellus gravida tortor, eu tristique neque ex non nisi. Nulla elementum a risus at mollis. Cras elit dui, auctor hendrerit nisl id, posuere elementum dolor. Vivamus consectetur iaculis libero convallis volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eleifend sem commodo lorem volutpat, sit amet bibendum ipsum bibendum. Etiam lacinia, nibh sit amet mattis hendrerit, purus dolor venenatis eros, et tempor nisl erat malesuada nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed erat lobortis, maximus risus ut, auctor risus. Aliquam venenatis massa a dapibus iaculis. </p>
                         </Col>
                         
                    </Row>

                    <Row>
                    {Object.values(team).map((val, ind)=>
                     <Col key={ind}><p><span id='avatar'><Person color='white' margin={3} height={30} width={30}/></span></p><b>{val.name}</b><p>{val.position}</p></Col>      // <th key={ind}>{(val) ? val:' '}</th>
                    )} 
                        
                    </Row>
               </Container>
          </div>
          )
     }
}
export default about;