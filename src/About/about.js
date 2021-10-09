import React from 'react';
import PropTypes from 'prop-types';
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
          'position':'Backened Developer & ML'
     },
     'member2': {
          'image':false, 
          'name':'Hanif Adedotun', 
          'position':'Frontend Developer, Graphics Designer & ML'
     },
     'member3': {
          'image':false, 
          'name':'David Utee Usiere', 
          'position':'Frontend Developer & Scribe'
     },
     'member4': {
          'image':false, 
          'name':'Fortune Aliebiesu', 
          'position':'Frontend Developer'
     },
     'member5': {
          'image':false, 
          'name':'Steven Iguza', 
          'position':'Documentation & Content creation'
     },
     'member6': {
          'image':false, 
          'name':'Zikora Ogbuagu', 
          'position':'Backend Developer'
     }
}

class about extends React.Component {
     componentDidMount(){
          this.props.active();
          document.title = 'About Startvest';
          window.scrollTo(0, 0);
     }
     componentWillUnmount(){
          this.props.not_active();
     }
     render(){
          return(
          <div>
               <h1 className="heading">About Us</h1>
               <Container className='about-content'>
                    <Row className="teambrief" >
                         <Col><img src={TeamPic} className='about-team-image ' sm={12} md={6} alt="Team pic svg"/></Col>

                         <Col sm={12} md={6} className='about-startup'>
                         <p>Starvest is an equity crowdfunding platform that allows people with innovative ideas to register and get funded; gives everyone the opportunity to invest in startups; and allows startups to post openings in their companies for job seekers.</p>
                         <p>The idea was borne from the observation of the high rate of poverty and unemployment in Nigeria even though the nation is home to some of the most creative minds in the world. This unfortunate reality can be attributed to the non-inclusive nature of the economy, and a high rate of nepotism.</p>
                         <p>With startvest, we want to give everyone a chance to achieve their financial goals by making it easy for them to get jobs, invest, and even get investment for the creative ideas they have.</p>
                         </Col>
                         
                    </Row>
                    <Container>
                         <h3 className="teamHead">Vision Statement</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                         <h3 className="teamHead">Mission Statement</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </Container>

                    <h2 className="teamHead">Meet our team</h2>
                    <Container className='meet_the_team'>
                    <Row className="justify-content-md-center">
                    {Object.values(team).map((val, i)=>
                    <Col className='team-container' key={i} md={3} xs={6}>
                         <Col key={i}>
                              <p><span id='abt-avatar'><Person color='white' margin={3} height={30} width={30}/></span></p>
                              <b>{val.name}</b>
                              <p className='team-position'>{val.position}</p>
                         </Col>     
                    </Col>

                    //   <th key={ind}>{(val) ? val:' '}</th>
                    )}  
                    </Row>
                    </Container>

               </Container>
          </div>
          )
     }
}

about.propTypes = {
     active: PropTypes.func.isRequired,
     not_active: PropTypes.func.isRequired
};
export default about;