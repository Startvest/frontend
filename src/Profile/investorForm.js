import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';
import PropTypes from 'prop-types';

import {Button, Form, Col, Row} from 'react-bootstrap';

// Import Notifications
import Notifyer from '../utility/notification';

function InvestorForm ({proceed, user_data, registered}){

     const user = JSON.parse(user_data).user;
     
     const [values, setValues] =  useState({
          'registered': registered || false,
          'name':'',
          'interests':[],
          'verified': false,
          'profile_picture': [],
          'detail': ''
     });

     // Notification object
     const [notify, setNotify] = useState({
          err: false,
          message: '',
          type: '',
          multiple: false
     })

     const handleChange = (e)=>{
          e.preventDefault();
          setValues((values) => ({
               ...values,
               [e.target.name]:e.target.type === 'checkbox' ? e.checked : e.target.value ,
          }));
     };


     const handleImgae = (e) =>{
          // On file select (from the pop up)
        // Update the state
          setValues((values) => ({
               ...values,
               profile_picture: e.target.files[0]
          }));
     }
    
     const handleSubmit = (e) => {
          e.preventDefault();
          if(!values.name || !values.detail || !values.profile_picture){
               setNotify({err:true, message:'Fill in empty inputs', type:'danger'})

          }else if(values.profile_picture.size/1024/1024 > 1){ //If the Image size is greater than 1mb, give an error
               setNotify({err:true, message:'The file limit has been exceeded', type:'danger'})

          }else{
               const formData = {
                    "user" : {
                         "user":{
                              "email": user.email
                          },
                          "is_investor": true,
                          "is_startup": false,
                          "name": values.name
                    },
                    "registered_business": true,               
                    "interests": values.interests.split(','),
                    "verified": false,
                    "name":  values.name,
                    // "profile_pic": values.profile_picture,
                    "detail": values.detail
                    // I would like dedicated founders who are looking to solve real world problems
                    // "Technology","E-commerce", "BlocChian", "Artificial Intelligence"
               }

               const token = JSON.parse(user_data).access_token;
               
               const staging = 'https://startvest-staging.herokuapp.com/api/v1.0/';
              
               fetch(`${staging}investors/${user.pk}/create`, {
                    method: 'POST', 
                    headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    
                    },
                    body: JSON.stringify(formData),
                    })
                    .then(res => res.json())
                    .then(data => { 
                         console.log(data);
                         proceed();

                    }).catch((error) =>{
                         setNotify({err:true, message:Object.values(error), type:'danger', multiple:true})
                    });
               
          }
          
     }
	


     return(
          <div>
                {(notify.err) ? <Notifyer className='notifyer' message={notify.message} type={notify.type} multiple={notify.multiple} onDismissed={() => setNotify({err: false})} /> : null}
          <div className='form shadow'>
               <Row>
                    {/* <Col xs={1} >
                         <ArrowLeft className='icon-back' width={30} height={30} onClick={goback}/>
                    </Col> */}

                    <Col>
                    <h3 className="profile-head">Register as an Investor</h3>
                    </Col>
               </Row>
               
               <Form>

               <Form.Group controlId="Investorname">
               <Form.Label>Full name</Form.Label>
               <Form.Control className='form-input' name='name' value={values.name} onChange={handleChange} type="text" placeholder="Enter Investor's name" autoComplete='name'/>
               </Form.Group>

            
               <Form.Group controlId="Industries">
               <Form.Label>Category of target Startups</Form.Label>
               <Form.Control className='form-input' type="text" name='interests' value={values.interests} onChange={handleChange} placeholder="Industries seperated by a comma" />
               </Form.Group>


               <Form.Group controlId="exampleForm.ControlTextarea1">
               <Form.Label>Brief description of Investor</Form.Label>
               <Form.Control className='form-input' as="textarea" rows={2} name='detail' value={values.detail} onChange={handleChange}/>
               </Form.Group>

               {/* <Form.Group controlId="ProfilePic">
               <Form.Label>Your Profile Picture</Form.Label>
               <Form.File id="exampleFormControlFile1"  type='file' accept=".gif,.jpg,.jpeg,.png," onChange={handleImgae}/>
               </Form.Group> */}

               <span className='submit'>
               <Button variant="primary" type="submit" onClick={handleSubmit}>
               Submit
               </Button>
               </span>

               </Form>
          </div>
          </div>
     )
}

InvestorForm.propTypes ={
     proceed: PropTypes.func.isRequired, 
     user_data: PropTypes.object.isRequired, 
     registered: PropTypes.bool
}

export default InvestorForm;