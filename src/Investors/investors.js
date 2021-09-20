import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './investors.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Person, CircleFill} from 'react-bootstrap-icons';

import PropTypes from 'prop-types';

class investors extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
               investors: this.props.investors,
          })
     }
     
     componentDidMount() {
          this.props.active();
          document.title = 'Find top investors - Startvest'
          window.scrollTo(0, 0);
     }

     componentWillUnmount(){
          this.props.not_active();
     }

     render(){
          return(
          <div>
               <h1 className='investors-head'>Top Investors</h1>
               {/* <h1 className='investors-head'>{this.state.investors}</h1> */}
               <Container fluid>
                    <Row>
                    {Object.values(this.state.investors).map((val, ind) =>
                    <Col sm={4} className='investor-column' key={ind}>
                         <span id='inv-avatar' className='shadow'>{(val.profile_pic) ? <img src={val.profile_pic} alt='Investor profile'/> : <Person color='white'  height={60} width={60}/>} </span>
                         <h3 className='investor-name'>{val.name}</h3>
                         <p className='investor-industry'>{Object.values(val.interests).map((v,i) => <span key={i}>{v} <CircleFill className='icon-back' height={5} width={5}/>   </span>)} </p>
                         <p>{val.detail}</p>
                    </Col>
                    )}
                    </Row>
               </Container>
               
          </div>
          )
     }
}

investors.propTypes = {
     investors: PropTypes.array.isRequired,
     active: PropTypes.func.isRequired,
     not_active: PropTypes.func.isRequired
}
export default investors;