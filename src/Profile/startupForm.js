import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

import {Button, Form, Col, Row} from 'react-bootstrap';
import {Info, ArrowLeft} from 'react-bootstrap-icons';

// Back button
import {} from 'react-bootstrap-icons';
class StartupForm extends React.Component {
     constructor(props) {
          super(props);
          this.state=({ 
               name: [],
               username: 'Dave Inc.',
               email: 'dave@example.com'
          })
     }

     handleChange = ({ target }) => {
          this.setState({ [target.name]: target.type === 'checkbox' ? target.checked : target.value });
     };

     // sendData = () => {
     //      this.props.goback();
     // }

render(){
     return(
          <div className='form shadow'>
               <Row>
                    <Col xs={1} >
                         <ArrowLeft className='icon-back' width={30} height={30} onClick={this.props.goback}/>
                    </Col>

                    <Col>
                         <h3 className="profile-head">Registration form for starturps</h3>
                    </Col>
               </Row>
               <Form>
               <Form.Group controlId="formBasicEmail">
               <Form.Label>Name of Startup</Form.Label>
               <Form.Control className='form-input' type="text" placeholder="Enter Startup's name" value={ this.state.username } />
               </Form.Group>

               <Form.Group controlId="formBasicEmail">
               <Form.Label>Email of Startup</Form.Label>
               <Form.Control className='form-input' type="email" placeholder="Enter Startup's email address" value={this.state.email}/>
               </Form.Group>

               <Form.Group controlId="formBasicEmail">
               <Form.Label>Location of Startup</Form.Label>
               <Form.Control className='form-input' type="text" placeholder="Enter Location" />
               <Form.Text className="text-muted">
                   <Info width={20} height={20}/>Startup has to be located in Nigeria
               </Form.Text>
               </Form.Group>

               <Form.Group>
               <Form.File id="exampleFormControlFile1" label="Startup's Logo" />
               </Form.Group>

               <Form.Group controlId="formBasicEmail">
               <Form.Label>Startup's website</Form.Label>
               <Form.Control className='form-input' type="url" placeholder="Enter the Startup's website or any related link" />
               </Form.Group>

               <Form.Group controlId="formBasicEmail">
               <Form.Label>Date founded</Form.Label>
               <Form.Control className='form-input' type="month" placeholder="Enter the year the startup was founded" />
               </Form.Group>

               <Form.Group as={Row}>
                   <Col sm='auto'> <Form.Label>Registered?</Form.Label></Col>
                   <Col sm='auto'>  <Form.Check type="radio" label="Yes" name="formHorizontalRadios" id="formHorizontalRadios1"  /></Col>
                   <Col sm='auto'> <Form.Check type="radio" label="No" name="formHorizontalRadios" id="formHorizontalRadios2" /></Col>
               </Form.Group>

               <Form.Group controlId="formBasicEmail">
               <Form.Label>Industry</Form.Label>
               <Form.Control className='form-input' type="text" placeholder="Enter the industry of the startup" />
               </Form.Group>


               <Form.Group>
               <Form.File id="exampleFormControlFile1" label="Startup's Logo" />
               </Form.Group>

               <Form.Group>
               <Form.Label>Business Model</Form.Label>
               <Form.Control as="select" >
               <option>B2C</option>
               <option>B2B</option>
               <option>C2C / P2P</option>
               <option>C2B</option>
               </Form.Control>
               </Form.Group>


               <Form.Group controlId="exampleForm.ControlTextarea1">
               <Form.Label>Brief description of Startup</Form.Label>
               <Form.Control className='form-input' as="textarea" rows={3} />
               </Form.Group>

               <span className='submit'>
               <Button variant="primary" type="submit">
               Submit
               </Button>
               </span>
               </Form>
          </div>
     )
}
}

export default StartupForm;