import React from 'react';
import './profile.css';
import { Container, Row, Col, Form, Spinner, Button } from 'react-bootstrap';
import { Google  } from 'react-bootstrap-icons';

// The startup and investors form
import StartForm from './startupForm';
import InvestorForm from './investorForm';

// SVG Images used
// import TeamPic from '../images/team_3.svg';
import Login from '../images/login.svg';
import SignUp from '../images/sign_in.svg';

class profile extends React.Component {
     constructor (props) {
          super(props);
          this.state = ({
               user: [],
               authenticated: false,
               registered: false,//If the user is a new user
               //User is the current signed in user profile sent from the database

               // Login or signup
               signup: true,

               // st the default values of the radio buttons
               check2: true, //Making the radio of startup true
               check1: false
          });
     }

     handlecheckbox = ({target}) => {
          console.log(target.checked);
          if(target.name === 'check1'){
               this.setState({[target.name]: target.checked , check2: !target.checked});
          }else{
               this.setState({[target.name]: target.checked , check1: !target.checked});
          }
          
     };

     handleChange = ({ target }) => {
          this.setState({[target.name]: target.type === 'checkbox' ? target.checked : target.value });
     };


     //   Render the User Profile if exist or in session
     userProfile = () => {
          return (
               <div>
                    <h3>Welcome User</h3>
               </div>
          );
     };


     //   Render the login screen
     login = () => {
          return (
               <div>
                    <Container className='form '>
                         <Row className='form_box shadow-lg'>
                              <Col className='svgIcon' ><img src={ Login } className='svgIcon-image' height={300} width={300} alt="Team pic svg" /></Col>
                              <Col className='form_items'>
                                   <h2>Login</h2>
                                   <Form >
                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="formGridEmail">
                                                  <Form.Label>Email</Form.Label>
                                                  <Form.Control name='email' onChange={ this.handleChange } value={ this.state.email } className='shadow-sm textbox' type="email" placeholder="Enter email" />
                                             </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="formHorizontalPassword">
                                                  <Form.Label  > Password</Form.Label>
                                                  <Form.Control name='password' onChange={ this.handleChange } value={ this.state.password } className='shadow-sm textbox' type="password" placeholder="Password" />
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Group as={ Row } controlId="formHorizontalCheck">
                                             <Col>
                                                  <Form.Check name='check' onChange={ this.handleChange } value={ this.state.check } label="Remember me" checked={ this.state.check } />
                                             </Col>
                                             <Form.Label className='forgot'>Forgot Password?</Form.Label>
                                        </Form.Group>


                                        <Form.Group as={ Row }>
                                             <Col className='submit'>
                                                  <Button type="submit" >Login</Button>
                                             </Col>
                                        </Form.Group>
                                        { this.altLogin(false) }
                                   </Form>
                              </Col>
                         </Row>
                    </Container>
               </div>
          );
     };

     //   Render the signin screen
     Signin = () => {
          return (
               <div>
                    <Container className='form' fluid='md'>
                         <Row className='form_box shadow-lg'>
                              <Col className='svgIcon' md={6} sm={12}><img src={ SignUp } className='svgIcon-image' height={300} width={300}  alt="Team pic svg" /></Col>
                              <Col className='form_items' md={6} sm={12}>
                                   <h2>Sign Up</h2>
                                   <Form >
                                        <Form.Group as={ Row } className='user_type' >
                                             <Col > 
                                             <Form.Check
                                                       name='check1'
                                                       type="radio"
                                                       id="custom-switch"
                                                       label='Investor'
                                                       onChange={ this.handlecheckbox }
                                                       checked={ this.state.check1 }
                                                  />
                                             </Col>
                                             <Col > <Form.Check
                                                       name='check2'
                                                       type="radio"
                                                       id="custom-switch"
                                                       label='Startup'
                                                       onChange={ this.handlecheckbox }
                                                       checked={ this.state.check2 }
                                                  /></Col>
                                        </Form.Group>


                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="formHorizontalUsername">
                                                  <Form.Label  > {(this.state.check1)? 'Investor name' : 'Startup name'}</Form.Label>
                                                  <Form.Control name='username' onChange={ this.handleChange } value={ this.state.username } className='shadow-sm textbox' type="text" placeholder="Enter username" />
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="formGridEmail">
                                                  <Form.Label>Email</Form.Label>
                                                  <Form.Control name='email' onChange={ this.handleChange } value={ this.state.email } className='shadow-sm textbox' type="email" placeholder="Enter email" />
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="formHorizontalPassword">
                                                  <Form.Label  > Password</Form.Label>
                                                  <Form.Control name='password' onChange={ this.handleChange } value={ this.state.password } className='shadow-sm textbox' type="password" placeholder="Password" />
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Group as={ Row } controlId="formHorizontalCheck">
                                             <Col>
                                                  <Form.Check name='check' onChange={ this.handleChange } value={ this.state.check } label="Remember me" />
                                             </Col>
                                             <Form.Label className='forgot'>Forgot Password?</Form.Label>
                                        </Form.Group>

                                        <Form.Group as={ Row }>
                                             <Col className='submit'>
                                                  <Button type="submit" onClick={ () => {this.setState({ authenticated: true }); (this.state.check1)? this.setState({registered: false}): this.setState({registered: true})}}>Sign Up</Button>
                                             </Col>
                                        </Form.Group>

                                        { this.altLogin(true) }

                                   </Form>
                              </Col>
                         </Row>
                    </Container>
               </div>
          );
     };

     altLogin = (signup = false) => {
          return (
               <div>
                    <Form.Group as={ Row } controlId="formHorizontalAltLogin">
                         <Col >{ (signup) ? 'Sign up with: ' : 'Login with: ' }</Col>
                         <Col><div className='google-signin'><Google className='icons' />{ (signup) ? 'Google  ' : 'Google ' }</div></Col>
                    </Form.Group>


                    {(signup) ?
                         <Form.Group as={ Row }>
                              <Col>
                                   Already have an account? <span className='forgot' onClick={ () => { this.setState({ signup: false }); } }>Login</span>
                              </Col>
                         </Form.Group>
                         :
                         <Form.Group as={ Row }>
                              <Col >
                                   Don't have an account? <span className='forgot' onClick={ () => { this.setState({ signup: true }); } }>Sign up</span>
                              </Col>
                         </Form.Group>
                    }

               </div>
          );
     };

     // Render the 
     renderview() {
          switch (this.state.authenticated) {
               default: return <div><Spinner className="load" animation='border' color='#21295C' /></div>;
               case false: return (this.state.signup) ? this.Signin() : this.login();
               case true: return (this.state.registered) ? <StartForm  /> : <InvestorForm /> ; //this.userProfile()
          }
     }


     render() {
          return (
               <div className="profile">
                    {this.renderview() }
               </div>
          );
     }
}
export default profile;