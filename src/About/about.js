import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import {Container, Row, Col} from 'react-bootstrap';
import TeamPic from '../images/team_3.svg';
import { Person, Linkedin, Github } from 'react-bootstrap-icons';

// Images of members
import Hanif from '../images/devs/hanif2.png';
import Briggs from '../images/devs/briggs.jpg';
import David from '../images/devs/david.jpg';
import Fortune from '../images/devs/fortune.jpg';
import Steven from '../images/devs/steven.jpg';

// Format of team members [avatarurl, name, position] 
var team = {
     'member1': {
          'image':Briggs, 
          'name':'Okorite Briggs', 
          'position':'Backened Developer & ML',
          'links': ['https://www.linkedin.com/in/tamunokorite-briggs-731551211/','https://github.com/Tamunokorite']
     },
     'member2': {
          'image':Hanif, 
          'name':'Hanif Adedotun', 
          'position':'Frontend Developer, Graphics Designer & ML',
          'links': ['https://www.linkedin.com/in/hanif-adedotun/','https://github.com/Hanif-adedotun']
     },
     'member3': {
          'image':David, 
          'name':'David Utee Usiere', 
          'position':'Frontend Developer & Scribe',
          'links': ['','https://github.com/Utee203']
     },
     'member4': {
          'image':Fortune, 
          'name':'Fortune Aliebiesu', 
          'position':'Frontend Developer',
          'links': ['https://www.linkedin.com/in/fortune-alebiosu-6954b3207/','https://github.com/fortune710']
     },
     'member5': {
          'image':Steven, 
          'name':'Steven Iguza', 
          'position':'Documentation & Content creator',
          'links': ['https://www.linkedin.com/in/iguza-steven-a6ba04214/','']
     },
     'member6': {
          'image':false, 
          'name':'Zikora Ogbuagu', 
          'position':'Backend Developer',
          'links': ['','https://github.com/zikorano']
     }
}

var summary = {
     'p1': `StartVest is an equity crowdfunding platform that allows people with creative ideas to register and get funded.
     We provide everyone the option to invest in startups, and we also give startups the platform to post job vacancies for job seekers.`,
     'p2': `Despite the fact that startup investment in Africa has expanded dramatically in recent years, African startups are still less well-funded than startups anywhere else in the globe especially at the pre-seed stage. Our main goal at StartVest is to use crowdsourcing to close the gap in underfunding of early stage entrepreneurs in Africa.`,
     'p3': `We want to provide everyone an opportunity to fulfill their dreams by making it simple for people to seek investment for their innovative ideas, find jobs, and invest in disruptive companies.`,
     'p4': `Join us in changing how startups are funded!`
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
                         <p>To be the platform that facilitates the creation of a secure network
between entrepreneurs and investors, to foster an atmosphere in
which ideas can be readily transformed into profitable businesses.</p>
                         </div>

                         <div className='teamHead-cont'>
                         <h3 className="teamHead">Vision Statement</h3>
                         <p>To be the initial point of contact for anyone interested in investing in Africa's startup ecosystem.</p>
                         </div>
                    </Container>

                    
                    <Container className='meet_the_team'>
                    <h2 className="teamHead">Meet our team</h2>
                    <Row className="justify-content-md-center">
                    {Object.values(team).map((val, i)=>
                    <Col className='team-container' key={i} md={4} xs={12}>
                         <Col key={i}>
                              <p><span id='abt-avatar'>
                                  {(val.image) ? 
                                  <img src={val.image} className='abt-image'/>
                                  :<Person color='white' margin={3} height={30} width={30}/>} 
                                   </span></p>
                              <b>{val.name}</b>
                              <p className='team-position'>{val.position}</p>
                              <p><a href={val.links[0]} target='_blank'><Linkedin  className='team-link' color='#21295C' margin={5} height={20} width={20}/></a>  <a href={val.links[1]} target='_blank'><Github  className='team-link' color='#21295C' margin={5} height={20} width={20}/></a></p>
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