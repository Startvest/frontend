import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import {Container, Row, Col} from 'react-bootstrap';
import { Twitter, Github } from 'react-bootstrap-icons';

class footer extends React.Component {
     render(){
          return(
          <div className='footer'>
               <Container fluid>
               <Row className='footer-text'>
                    <Col  sm='auto'>Copyright &copy;  2021 Nile Google Developers Club, Abuja</Col>
                    <Col className='right'  sm='auto'>Contact us  <span><Twitter color='#9EB3C2' /></span>  <span>{<Github color='#9EB3C2 '/>}</span></Col>
               </Row>
               </Container>
              
          </div>
          )
     }
}
export default footer;