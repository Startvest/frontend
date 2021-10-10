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

var summary = {
     'p1': `Starvest is an equity crowdfunding platform that allows people with creative ideas to register and get funded.
     We provide everyone the option to invest in startups, and we also give startups the platform to post job vacancies for job seekers.`,
     'p2': `Despite the fact that startup investment in Africa has expanded dramatically in recent years, African startups are still less well-funded than startups anywhere else in the globe especially at the pre-seed stage. Our main goal at StartVest is to use crowdsourcing to close the gap in underfunding of early stage entrepreneurs in Africa.`,
     'p3': `We want to provide everyone an opportunity to fulfill their dreams by making it simple for people to seek investment for their innovative ideas, find jobs, and invest in disruptive companies.`
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
                              {Object.values(summary).map((v,i) => 
                              <p>{v}</p>
                              )}
                         {/* <p>Starvest is an equity crowdfunding platform that allows people with innovative ideas to register and get funded, we give everyone the opportunity to invest in startups, We also give the platform for startups to post openings in their companies for job seekers.</p>
                         <p>The solution was inspired by the high prevalence of poverty and unemployment in Nigeria, despite the fact that the country is home to some of the world's most creative brains. The non-inclusive nature of the economy, as well as a high degree of nepotism, are to blame for this unpleasant reality.</p>
                         <p>At StartVest, we want to provide everyone an opportunity to fulfill their financial goals by making it simple for people to find jobs, invest, and even seek investment for their innovative ideas.</p> */}
                         </Col>
                         
                    </Row>
                    <Container>
                         <div className='teamHead-cont'>
                         <h3 className="teamHead">Mission Statement</h3>
                         <p>To be the platform that collaboratively build a safe network between startups and investors, to provide every job seeker  an opportunity to have their dream job by creating enabling environment in which ideas can become profit generating businesses as easily as possible.</p>
                         </div>

                         <div className='teamHead-cont'>
                         <h3 className="teamHead">Vision Statement</h3>
                         {/* <p>To be the bridge between an idea and a successful venture </p> */}
                         <p>To be the company that gives entrepreneurs the power and means to archive great success.</p>
                         </div>
                    </Container>

                    
                    <Container className='meet_the_team'>
                    <h2 className="teamHead">Meet our team</h2>
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