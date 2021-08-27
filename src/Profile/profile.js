import React from 'react';
import './profile.css';
import { Container, Row, Col, Form, Spinner, Button } from 'react-bootstrap';
import { Google  } from 'react-bootstrap-icons';

// The startup and investors form
import StartForm from './startupForm';
import InvestorForm from './investorForm';

// Loading animation
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

// SVG Images used
// import TeamPic from '../images/team_3.svg';
import Login from '../images/login.svg';
import SignUp from '../images/sign_in.svg';

// Import Notifications
import Notifyer from '../utility/notification';

// Import Dashboard
import Dashboard from '../dashboard/dashboard';
class profile extends React.Component {
     constructor (props) {
          super(props);
          this.state = ({
               user: [],
               authenticated: false,
               registered: false,//If the user is a new user
               is_startup: true,

               // Login or signup
               signup: false,

               // st the default values of the radio buttons
               check2: true, //Making the radio of startup true
               check1: false,

               // Disable multiple notificationns by default
               multiple:false,
          });
     }
     // override css file for loading bar
     override = css`
          display: block;
          margin: auto;
          `;
     componentDidMount(){
          window.scrollTo(0, 0);

     // Check if the current user is signed in 
     // Then deletes the token and user data stored in the local storage if not found
          if(localStorage.getItem('user_token') !== null){

                // Stores the user data in the local storage
                this.setState({is_startup: localStorage.getItem('is_startup'), authenticated:true, registered: false});

               // Thes are highlighted until the dashboard has been designed so a startup can get the appropriate information when called
               // localStorage.getItem('registered')
               //  localStorage.getItem('user_data', [{'results':'Coming Soon'}]);
          }else{
               localStorage.removeItem('user_token')
               localStorage.removeItem('is_startup');
                localStorage.removeItem('registered');
                localStorage.removeItem('user_data');
          }

          console.log(localStorage.getItem('user_token'))
     }
     

     handlecheckbox = ({target}) => {
          if(target.name === 'check1'){
               this.setState({[target.name]: target.checked , check2: !target.checked});
          }else{
               this.setState({[target.name]: target.checked , check1: !target.checked});
          }
          
     };

     handleChange = ({ target }) => {
          this.setState({[target.name]: target.type === 'checkbox' ? target.checked : target.value });
     };


 
      // Function to get data from the form and 
     // send a notification if any of them is empty
     checkSignForm = (e) =>{
          e.preventDefault();

          // Set the login button to load
          this.setState({loading: true});

          let signupfields = {
               investor: this.state.check1, 
               startup: this.state.check2, 
               name: this.state.username,
               email: this.state.email,
               password1: this.state.password1,
               password2: this.state.password2,
               forgotpass: this.state.check
          }
         if(!signupfields.name || !signupfields.email || !signupfields.password1 || !signupfields.password2){
          this.setState({error: true, errMessage:'One or more required fields are empty', type:'danger', loading:false})
       
          }else{
                    const staging =  'https://startvest-staging.herokuapp.com/api/v1.0/';

                    fetch(`${staging}users/registration/`, {
                              method: 'POST', 
                              headers: {
                              'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                        "username": signupfields.name,
                                        "email": signupfields.email,
                                        "password1": signupfields.password1,
                                        "password2": signupfields.password2
                                   }),
                              })
                              .then(res => res.json())
                              .then(data => {    
                                   // console.log(data); 
                                   if(data.access_token){
           
                                        // Stores the token in the local storage
                                        localStorage.setItem('user_token', data.access_token);

                                   fetch(`${staging}users/create_user_type/${data.user.pk}`, {
                                        method: 'POST', 
                                        headers: {
                                        Authorization: `Bearer ${data.access_token}`,
                                        'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                                  "name": signupfields.name,
                                                  "is_investor": signupfields.investor,
                                                  "is_startup": signupfields.startup,
                                                  }),
                                        })
                                        .then(response => response.json())
                                        .then(data => {    
                                             console.log(data); 
                                             // Show notification message
                                             this.setState({error: true, errMessage:'Signed up successfully!', type:'success'})

                                             // Change View
                                             this.setState({is_startup : data.is_startup, authenticated:true, registered:data.verified, loading:false})

                                              // Stores the user data in the local storage
                                              localStorage.setItem('is_startup', data.is_startup);
                                              localStorage.setItem('registered', data.verified)
                                              localStorage.setItem('user_data', [{'results':'Coming Soon'}]);
                                        })
                                        .catch((error) => {
                                        console.error('Error:', error);
                                        this.setState({error: true, errMessage:'Unable to assign status, Server Error', type:'danger', loading:false})
                                       
                                        // Deletes the token from local storage
                                        localStorage.removeItem('user_token');
                                   });
                              }else{
                                   this.setState({error: true, errMessage: Object.values(data), type:'danger', multiple:true, loading:false});
                                   // Deletes the token from local storage
                                   localStorage.removeItem('user_token');
                              }
                              })
                              .catch((error) => {
                              console.error('Error:', error);
                              // this.setState({error: true, errMessage:Object.values(error).map((v,i) => v), type:'danger'})
                              this.setState({error: true, errMessage:'Unable to sign you in', type:'danger', loading:false})

                              // Deletes the token from local storage
                              localStorage.removeItem('user_token');
                         });


          }
     }

     checkloginForm = (e) =>{
          e.preventDefault();

          // Set the login button to load
          this.setState({loading: true});

          let loginFields={
               email: this.state.email,
               password: this.state.password
          }

          if(!loginFields.email || !loginFields.password){
               this.setState({error: true ,errMessage:'One or more required fields are empty', type:'danger', loading: false})

          }else{
               const staging =  'https://startvest-staging.herokuapp.com/api/v1.0/';

                    fetch(`${staging}users/login/`, {
                              method: 'POST', 
                              headers: {
                              'Content-Type': 'application/json',

                              },
                              body: JSON.stringify({
                                        "username": loginFields.name,
                                        "email": loginFields.email,
                                        "password": loginFields.password,}),
                              })
                              .then(response => response.json())
                              .then(data => {    

                                   // Stores the token in the local storage
                                   localStorage.setItem('user_token', data.access_token);

                                   if(data.access_token){

                                   fetch(`${staging}users/get_user_type/${data.user.pk}`, {
                                        method: 'GET', 
                                        headers:{
                                             Authorization: `Bearer ${data.access_token}`
                                        }})
                                        .then(response => response.json())
                                        .then(data => {    
                                             
                                             // Notification bar
                                             this.setState({error: true, errMessage:'Logged in successfully!', type:'success'})

                                             // Change view
                                             this.setState({is_startup : data.is_startup, authenticated:true, registered: data.verified, loading:false}) 
                                            
                                             // Stores the user data in the local storage
                                            

                                             localStorage.setItem('is_startup', data.is_startup);
                                             localStorage.setItem('registered', data.verified)
                                             localStorage.setItem('user_data', [{'results':'Coming Soon'}]);
                                        })
                                        .catch((error) => {
                                        console.error('Error:', error);
                                        this.setState({error: true, errMessage:'Unable to get status, Server Error', type:'danger', loading:false})

                                        // Deletes the token from local storage
                                        localStorage.removeItem('user_token');
                                   });
                              }else{
                                   this.setState({error: true, errMessage: Object.values(data), type:'danger', multiple:true, loading:false});

                                   // Deletes the token from local storage
                                   localStorage.removeItem('user_token');
                              }
                              })
                              .catch((error) => {
                              console.error('Error:', error);
                              this.setState({error: true, errMessage:'Check your login details and try again', type:'danger', loading:false});

                              // Deletes the token from local storage
                              localStorage.removeItem('user_token');
                         });
          }
     }

     //   Render the login screen
     login = () => {
          return (
               <div>
                    <Container className='form '>
                         <Row className='form_box shadow-lg'>
                              <Col className='svgIcon' ><img src={ Login } className='svgIcon-image' height={300} width={300} alt="Team pic svg" /></Col>
                              <Col className='form_items'>
                                   <h2>Login</h2>
                                   <Form autoComplete='on'>
                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="loginEmail">
                                                  <Form.Label>Email</Form.Label>
                                                  <Form.Control name='email' autoComplete="email" onChange={ this.handleChange } value={ this.state.email } className='shadow-sm textbox' type="email" placeholder="Enter email" required/>
                                             </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="loginPassword">
                                                  <Form.Label  > Password</Form.Label>
                                                  <Form.Control name='password' autoComplete="current-password" onChange={ this.handleChange } value={ this.state.password } className='shadow-sm textbox' type="password" placeholder="Password" required/>
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Group as={ Row } controlId="loginCheck">
                                             <Col>
                                                  <Form.Check name='check' onChange={ this.handleChange } value={ this.state.check } label="Remember me" checked={ this.state.check } />
                                             </Col>
                                             <Form.Label className='forgot'>Forgot Password?</Form.Label>
                                        </Form.Group>



                                        <Form.Group as={ Row }>
                                             <Col className='submit'>
                                                  <Button type="submit" onClick={ this.checkloginForm }> {(this.state.loading) ? <SyncLoader color={'#21295C'} loading={this.state.loading} css={this.override} size={7} margin={5} speedMultiplier={0.8} /> : 'Login'} </Button>
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
                                   <Form autoComplete='on'>
                                        <Form.Group as={ Row } className='user_type' >
                                             <Col > 
                                             <Form.Check
                                                       name='check1'
                                                       type="radio"
                                                       id="custom-switch1"
                                                       label='Investor'
                                                       onChange={ this.handlecheckbox }
                                                       checked={ this.state.check1 }
                                                  />
                                             </Col>
                                             <Col > <Form.Check
                                                       name='check2'
                                                       type="radio"
                                                       id="custom-switch2"
                                                       label='Startup'
                                                       onChange={ this.handlecheckbox }
                                                       checked={ this.state.check2 }
                                                  /></Col>
                                        </Form.Group>


                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="SignUsername">
                                                  <Form.Label  > {(this.state.check1)? 'Investor name' : 'Startup name'}</Form.Label>
                                                  <Form.Control name='username' autoComplete="username" onChange={ this.handleChange } value={ this.state.username } className='shadow-sm textbox' type="text" placeholder={(this.state.check1)? 'Enter investor\'s name' : 'Enter Business name'} required/>
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="signEmail">
                                                  <Form.Label>Email</Form.Label>
                                                  <Form.Control name='email' autoComplete="email" onChange={ this.handleChange } value={ this.state.email } className='shadow-sm textbox' type="email" placeholder="Enter email" required/>
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="signPassword">
                                                  <Form.Label  > Password</Form.Label>
                                                  <Form.Control name='password1' autoComplete="new-password" onChange={ this.handleChange } value={ this.state.password1 } className='shadow-sm textbox' type="password" placeholder="Enter password" required/>
                                                  <Form.Text id="passwordHelpBlock" muted>
                                                  Your password must be 8-20 characters long, contain letters and numbers, and
                                                  must not contain spaces, special characters, or emoji.
                                                  </Form.Text>

                                             </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="signPassword2">
                                                  <Form.Label  > Confirm Password</Form.Label>
                                                  <Form.Control name='password2' autoComplete="new-password" onChange={ this.handleChange } value={ this.state.password2 } className='shadow-sm textbox' type="password" placeholder="Confirm password" required/>
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Group as={ Row } controlId="signCheck">
                                             <Col>
                                                  <Form.Check name='check' onChange={ this.handleChange } value={ this.state.check } label="Remember me" />
                                             </Col>
                                             <Form.Label className='forgot'>Forgot Password?</Form.Label>
                                        </Form.Group>

                                        <Form.Group as={ Row }>
                                             <Col className='submit'>
                                                  <Button type="submit" onClick={this.checkSignForm}> {(this.state.loading) ? <SyncLoader color={'#21295C'} loading={this.state.loading} css={this.override} size={7} margin={5} speedMultiplier={0.8} /> : 'Sign Up'}</Button>
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
               case true: return (this.state.registered) ? <Dashboard/> : (this.state.is_startup) ? <StartForm  goback={() => this.setState({authenticated: false})}/> : <InvestorForm  goback={() => this.setState({authenticated: false})}/> ; 
               //this.dashboard()
          }
     }


     render() {
          return (
               <div className="profile">
                    {(this.state.error) ? <Notifyer message={this.state.errMessage} type={this.state.type} multiple={this.state.multiple} onDismissed={() => this.setState({error: false})} />:null}
                    {this.renderview() }
                    {this.state.live}
               </div>
          );
     }
}
export default profile;