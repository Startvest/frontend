import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './investors.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Person} from 'react-bootstrap-icons';


const investor={
     '1': {
          'name': 'PWZ Ventures',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Cloud Computing, Networking'
     },
     '2': {
          'name': 'Tony Elumelu Foundation',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Fintech, MSE, Female Entrepreneurs'
     },
     '3': {
          'name': 'Angel Tech Inc',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Networking, IT, Manufacturing'
     },
     '4': {
          'name': 'Y Combinator',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Networking, IT, Manufacturing'
     },
     '5': {
          'name': 'Dangote foundation',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Insuretech, IT, Manufacturing'
     },
     '6': {
          'name': 'Carrington Atlantic',
          'details': 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Porttito neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Fintech, MSE, Female Entrepreneurs'
     },
}
class investors extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
               investors: this.props.investors,
          })
     }
     
     async componentDidMount() {
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
                         <span id='avatar' className='shadow'><Person color='white'  height={60} width={60}/></span>
                         <h3 className='investor-name'>{'name'}</h3>
                         <p className='investor-industry'>{Object.values(val.interests).map((v,i) => v,)}</p>
                         <p>{val.details}</p>
                    </Col>
                    )}
                    </Row>
               </Container>
               
          </div>
          )
     }
}
export default investors;