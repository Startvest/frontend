import React from 'react';
import './profile.css';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Spinner, Button, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

//Import the verify email screen
import VerifyEmail from './verifyEmail';

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
               emailVerify: false,
               state: 'signup',
               registered: false,//If the user is a new user
               is_startup: true,

               // Login or signup
               signup: false,

               // Form fields initialised here
                    // st the default values of the radio buttons
               check2: true, //Making the radio of startup true
               check1: false,
               username: '',
               email: '',
               password: '',
               check: '',

               // Disable multiple notificationns by default
               multiple:false,

               // Set the state of password in the login and signup fields
               show_pass: false,
          });
     }

     // override css file for loading bar
     override = css`
          display: block;
          margin: auto;
          `;

     componentDidMount(){
          document.title = 'Get started at StartVest'
          window.scrollTo(0, 0);
          this.mounted = true;
 
     // this.mounted is a way to ensure that 
     // there is no meomry leakasge for the self initialised function
      if (this.mounted) {
           (() =>{
          // Check if the user is still signed in, then gives the form  
          // Set loading spinner
          this.setState({state: 'load'});

          const token = localStorage.getItem('user_token');
          const staging = 'https://startvest-staging.herokuapp.com/api/v1.0/';

               fetch(`${staging}users/token/verify/`, {
                    method: 'POST', 
                    headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         "token": token,
                    }),
               })
                    .then(res => res.json())
                    .then(data => { 
                         
                         if(data.code === "token_not_valid"){
                              localStorage.removeItem('user_token')
                              localStorage.removeItem('is_startup');
                              localStorage.removeItem('registered');
                              localStorage.removeItem('user_data');

                              this.setState({state: 'signup'});
                         }else{
                              
                         // Stores the user data in the local storage
                         var sta_inv = (localStorage.getItem('is_startup').toLowerCase() === 'true') ? 'startups' : 'investors';
                         
                         this.setState({is_startup: (localStorage.getItem('is_startup').toLowerCase() === 'true'), user_data: localStorage.getItem('user_data')});

                         
                         // Get the registered field from the startup using a short fetch request
                         fetch(`${staging}${sta_inv}/${JSON.parse(localStorage.getItem('user_data')).user.pk}`,{
                              method: 'GET', 
                              headers:{
                                   Authorization: `Bearer ${token}`
                              }})
                         .then(response => response.json())
                         .then(startup => {
                              var registered = (localStorage.getItem('is_startup').toLowerCase() === 'true') ? startup.registered: startup.verified;
                              this.setState({state: 'auth', registered: registered}); 
                              
                         }).catch((error) => {this.setState({state: 'auth', registered: false}) });

                         
                         }
                    }).catch((error) =>{
                         console.log(error);

                         this.setState({state: 'signup'});
                    });
               
     })();
}
     
        
     }
     
     componentWillUnmount(){
          this.mounted = false;
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

     handlePassChange = () =>{
          this.setState({show_pass: !this.state.show_pass})
     }
 
      // Function to get data from the form and 
     // send a notification if any of them is empty
     checkSignForm = (e) =>{
          if (e){e.preventDefault()};

          // Set the login button to load
          this.setState({loading: true});

          let signupfields = {
               investor: this.state.check1, 
               startup: this.state.check2, 
               name: this.state.username,
               email: this.state.email,
               password: this.state.password,
               forgotpass: this.state.check
          }

         if(!signupfields.name || !signupfields.email || !signupfields.password){
          this.setState({error: true, errMessage:'One or more required fields are empty', type:'danger', loading:false})
       
          }else if(!this.state.emailVerify){
               window.scrollTo(0, 0);
               this.setState({loading: false, state: 'verifyEmail'});

               console.log(this.state.emailVerify);

          }else if(this.state.emailVerify){
                    const staging =  'https://startvest-staging.herokuapp.com/api/v1.0/';

                    fetch(`${staging}users/registration/`, {
                              method: 'POST', 
                              headers: {
                              'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                        "username": signupfields.name,
                                        "email": signupfields.email,
                                        "password1": signupfields.password,
                                        "password2": signupfields.password
                                   }),
                              })
                              .then(res => res.json())
                              .then(data => {    
                                   // console.log(data); 
                                   if(data.access_token){
                                        // Stores the token in the local storage
                                        localStorage.setItem('user_token', data.access_token);
                                        localStorage.setItem('user_data', JSON.stringify(data));

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
                                             this.setState({is_startup : data.is_startup, state:'auth', registered:data.verified, user_data: localStorage.getItem('user_data'), loading:false})

                                              // Stores the user data in the local storage
                                              localStorage.setItem('is_startup', data.is_startup);
                                              localStorage.setItem('registered', data.verified)
                                              
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
                              this.setState({error: true, errMessage:'Unable to sign you in, please try again later', type:'danger', loading:false})

                              // Deletes the token from local storage
                              localStorage.removeItem('user_token');
                         });


          }
     }

     checkloginForm = (e) =>{
          if (e){e.preventDefault()};

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
                                   if(data.access_token){
                                        // Stores the token in the local storage
                                   localStorage.setItem('user_token', data.access_token);
                                   localStorage.setItem('user_data', JSON.stringify(data));
                                        let id = data.user.pk;
                                        let token = data.access_token;

                                   fetch(`${staging}users/get_user_type/${id}`, {
                                        method: 'GET', 
                                        headers:{
                                             Authorization: `Bearer ${token}`
                                        }})
                                        .then(response => response.json())
                                        .then(data => {    
                                             
                                             // Notification bar
                                             this.setState({error: true, errMessage:'Logged in successfully!', type:'success'})
                                            
                                             // Set the data to the state First
                                             this.setState({is_startup : data.is_startup, user_data: localStorage.getItem('user_data')}) ;
                                             
                                             // Get the registered field from the startup using a short fetch request
                                             var sta_inv = (data.is_startup) ? 'startups' : 'investors';
                                             
                                             fetch(`${staging}${sta_inv}/${id}`,{
                                                  method: 'GET', 
                                                  headers:{
                                                       Authorization: `Bearer ${token}`
                                                  }})
                                             .then(response => response.json())
                                             .then(startup => {
                                                    
                                                  var registered = (data.is_startup) ? startup.registered: startup.verified;

                                                  this.setState({state: 'auth', registered: registered, loading:false});
                                                  // startup.verified
                                                  
                                             }).catch((error) => {this.setState({state: 'auth', registered: false, loading:false}) });

                                             // Stores the user data in the local storage
                                             localStorage.setItem('is_startup', data.is_startup);
                                             localStorage.setItem('registered', data.verified)

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
                              this.setState({error: true, errMessage:'Internet Disconnected!', type:'danger', loading:false});

                              // Deletes the token from local storage
                              localStorage.removeItem('user_token');
                         });
          }
     }

     // Astericks for required fields 
     required = () =>{
          return(<span className='required'>*</span>)
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
                                                  <Form.Label>Email {this.required()}</Form.Label>
                                                  <Form.Control name='email' autoComplete="email" onChange={ this.handleChange } value={ this.state.email } className='shadow-sm textbox' type="email" placeholder="Enter email" required/>
                                             </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="loginPassword">
                                                  <Form.Label  > Password {this.required()}</Form.Label>
                                                  <InputGroup>
                                                       <Form.Control name='password' autoComplete="current-password" onChange={ this.handleChange } value={ this.state.password } className='shadow-sm textbox' placeholder="Enter password" required type={(this.state.show_pass) ? 'text' : 'password'}/>
                                                  </InputGroup>
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
                                   <Form >
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
                                                  <Form.Label  > {(this.state.check1)? 'Investor name' : 'Startup name'} {this.required()}</Form.Label>
                                                  <Form.Control name='username' onChange={ this.handleChange } value={ this.state.username } className='shadow-sm textbox' type="text" placeholder={(this.state.check1)? 'Enter investor\'s name' : 'Enter Business name'} required/>
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="signEmail">
                                                  <Form.Label>Email {this.required()}</Form.Label>
                                                  <Form.Control name='email'  onChange={ this.handleChange } value={ this.state.email } className='shadow-sm textbox' type="email" placeholder="Enter email" required/>
                                             </Form.Group>
                                        </Form.Row>


                                        <Form.Row>
                                             <Form.Group as={ Col } controlId="signPassword">
                                                  <Form.Label  > Password {this.required()}</Form.Label>
                                                  <InputGroup>
                                                       <Form.Control name='password' onChange={ this.handleChange } value={ this.state.password } className='shadow-sm textbox'  type={(this.state.show_pass) ? 'text' : 'password'} placeholder="Enter password" required/>
                                                       <InputGroup.Text className='pass-eye shadow-sm' onClick={this.handlePassChange}> {(this.state.show_pass) ? <Eye color={'#21295C'} height={20} width={20}/> : <EyeSlash color={'#21295C'} height={20} width={20}/>} </InputGroup.Text>
                                                  </InputGroup>
                                                  <Form.Text id="passwordHelpBlock" muted>
                                                  Your password must be 8-20 characters long, contain letters and numbers, and
                                                  must not contain spaces, special characters, or emoji.
                                                  </Form.Text>

                                             </Form.Group>
                                        </Form.Row>

                                        {/* <Form.Row>
                                             <Form.Group as={ Col } controlId="signPassword2">
                                                  <Form.Label  > Confirm Password</Form.Label>
                                                  <Form.Control name='password2' autoComplete="new-password" onChange={ this.handleChange } value={ this.state.password2 } className='shadow-sm textbox' type="password" placeholder="Confirm password" required/>
                                             </Form.Group>
                                        </Form.Row> */}


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
                    {/* <Form.Group as={ Row } controlId="formHorizontalAltLogin">
                         <Col >{ (signup) ? 'Sign up with: ' : 'Login with: ' }</Col>
                         <Col><div className='google-signin'><Google className='icons' />{ (signup) ? 'Google  ' : 'Google ' }</div></Col>
                    </Form.Group> */}


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
          switch (this.state.state) {
               default: return <Container className="box_design shadow-sm"><Spinner className="load" animation='border' color='#21295C' /></Container>;
               case 'load': return <div><Spinner className="load" animation='border' color='#21295C' /></div>;
               case 'signup': return (this.state.signup) ? this.Signin() : this.login();
               case 'auth': return (this.state.registered) ? <Dashboard/> : (this.state.is_startup) ? <StartForm  user_data={this.state.user_data} registered={this.state.registered} req={this.required()} proceed={() => {this.setState({state: 'auth', registered: true})}}/> : <InvestorForm  is_startup={this.state.is_startup} req={this.required()}  user_data={this.state.user_data} registered={this.state.registered} proceed={() => {this.setState({state: 'auth', registered: true})}}/> ; 
               case 'verifyEmail': return  <VerifyEmail email={this.state.email} close={() => {this.setState({state: 'signup', signup: true, emailVerify:false})} } setVerify={() => this.setState({emailVerify:true, state: 'signup', signup: true, error:true, errMessage:'Verified Email Successfully', type:'success'})} checkForm={() => this.checkSignForm()}/>     
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

profile.propTypes = {
     active: PropTypes.func.isRequired,
     not_active: PropTypes.func.isRequired
}

export default profile;