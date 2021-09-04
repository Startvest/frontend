import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';
import PropTypes from'prop-types';

import {Button, Form, Col, Row} from 'react-bootstrap';
import {Info} from 'react-bootstrap-icons';

// Back button
// import {} from 'react-bootstrap-icons';


// Import Notifications
import Notifyer from '../utility/notification';

function StartupForm({registered, user_data, req, proceed}){

     const user = JSON.parse(user_data).user;

     const [values, setValues] =  useState({
          'registered': true,
          'name':'',
          'email': user.email,
          'verified': false,
          'gallery': [],
          'snapshot': '',
          'company_size': 1,
          'location': '',
          'website': '',
          'logo': [],
          'team': [], //Team string
          'work_benefits': '', //An array of strings
          'pitch': [], //A video,
          'category': '', //Array of strings
          'business_model': 'B2C',
          'balance': 0,
          'year_established': 2021,
          'funding_stage': 'Pre-seed'
     });

     let years = [];
     (function (){
           // Create a dropdown of years from 1984
     let startYear = 1984;
     let endYear = new Date().getFullYear();
     
     for (let i=endYear; i>startYear; i--){
          years.push(i);
     }

     })();

         

      // Notification object
      const [notify, setNotify] = useState({
          err: false,
          message: '',
          type: '',
          multiple: false
     })    
    
    
     // const req = () =>{
     //      return(<span className='required'>*</span>)
     // }

     const handleChange = (e)=>{
          e.preventDefault();
          setValues((values) => ({
               ...values,
               [e.target.name]:e.target.type === 'checkbox' ? e.checked : e.target.value ,
          }));
     }

     const handleImage = (e) =>{
          // On file select (from the pop up)
        // Update the state
          setValues((values) => ({
               ...values,
               [e.target.name]: e.target.files[0]
          }));
     }

     const handleSubmit = (e) => {

          const formData = {
               "user":{
                    "user": {
                         "email": user.email, 
                    },
                    "is_investor":false,
                    "is_startup":true,
                    "name": values.name
               },
               "jobs":[],
               // "gallery": values.gallery || null, //An Array of Images less than 1mb
               "company_name": values.name,
               "snapshot": values.snapshot,
               "company_size": values.company_size,
               "location": values.location,
               "website": values.website,
               // "logo": values.logo || null,
               "registered": values.registered,
               "team" : [],
               "work_benefits": values.work_benefits.split(","), 
               // "pitch": values.pitch || null,
               "category": values.category.split(","),
               "business_model": values.business_model,
               "year_established": parseInt(values.year_established),
               "funding_stage": values.funding_stage
          }

          if(!formData.company_name || !formData.snapshot || !formData.location || !formData.website || !formData.category || !formData.business_model || !formData.year_established){
               setNotify({err:true, message:'One or more required fields are empty', type:'danger'})
          }else{
               // Forward thinking Startup looking to change the game of fintech
              
               // Create a startup
               const token = JSON.parse(user_data).access_token;
               
               const staging = 'https://startvest-staging.herokuapp.com/api/v1.0/';

               fetch(`${staging}startups/${String(user.pk)}/create`, {
                    method: 'POST', 
                    headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    
                    },
                    body: JSON.stringify(formData),
                    })
                    .then(res => res.json())
                    .then(data => { 
                         if(data.user){
                              console.log(data);
                              proceed();
                         }else{
                              setNotify({err:true, message:Object.values(data), type:'danger', multiple:true})
                         }
                        

                    }).catch((error) =>{
                         setNotify({err:true, message:Object.values(error), type:'danger', multiple:true})
                    });
          }


          e.preventDefault();

          // console.log(formData);
     }

   
     return(
          <div>
                {(notify.err) ? <Notifyer className='notifyer' message={notify.message} type={notify.type} multiple={notify.multiple} onDismissed={() => setNotify({err: false})} /> : null}
          <div className='form shadow'>
               <Row>
                    {/* <Col xs={1} >
                         <ArrowLeft className='icon-back' width={30} height={30} onClick={this.props.goback}/>
                    </Col> */}

                    <Col>
                         <h3 className="profile-head">Register your startup</h3>
                    </Col>
               </Row>
               <Form>

               <Form.Group controlId="startupName">
               <Form.Label>Name of Startup {req}</Form.Label>
               <Form.Control className='form-input' type="text" placeholder="Enter Startup's name" name='name' value={values.name} onChange={handleChange} />
               </Form.Group>


               <Form.Group controlId="startupEmail">
               <Form.Label>Email of Startup {req}</Form.Label>
               <Form.Control className='form-input' type="email" placeholder="Enter Startup's email address" value={values.email} onChange={handleChange}/>
               </Form.Group>

               <Form.Group controlId="startupEmail">
               <Form.Label>Brief description of the startup {req}</Form.Label>
               <Form.Control className='form-input' as="textarea" rows={2} name='snapshot' value={values.snapshot} onChange={handleChange} placeholder='Enter a brief description of the startup'/>
               </Form.Group>

               <Form.Group controlId="startupNumber">
               <Form.Label>Number of employees</Form.Label>
               <Form.Control className='form-input' type="number" placeholder="Enter your staff Strength" name='company_size' value={values.company_size} onChange={handleChange} />
               </Form.Group>

               
               <Form.Group controlId="startupLocation">
               <Form.Label>Location of Startup {req}</Form.Label>
               <Form.Control className='form-input' type="text" placeholder="Enter Location" name="location" value={values.location} onChange={handleChange}/>
               <Form.Text className="text-muted">
                   <Info width={20} height={20}/>Startup has to be located in Nigeria
               </Form.Text>
               </Form.Group>

               <Form.Group controlId="startupWebsite">
               <Form.Label>Website Address {req}</Form.Label>
               <Form.Control className='form-input' type="url" placeholder="https://example.com" pattern="http(s?)(:\/\/)((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)(\/[^\s]*)?"  name='website' value={values.website} onChange={handleChange} />
               </Form.Group>

               <Form.Group>
               <Form.File id="startuplogo" label="Startup's Logo" accept=".gif,.jpg,.jpeg,.png," name='logo' onChange={handleImage}/>
               </Form.Group>

               <Form.Group >
               <Form.File id="startupGallery" label="Gallery" accept=".gif,.jpg,.jpeg,.png," multiple name='gallery' onChange={handleImage}/>
               <Form.Text className="text-muted">
                   <Info width={20} height={20}/>Choose multiple image files, less than 2mb each
               </Form.Text>
               </Form.Group>

               <Form.Group controlId="startupBenefits">
               <Form.Label>Work Benefits</Form.Label>
               <Form.Control className='form-input' type="text" placeholder="Enter the benefits of employees seperated by a comma" name='work_benefits' value={values.work_benefits} onChange={handleChange} />
               </Form.Group>

               <Form.Group controlId="startupCreated">
               <Form.Label>Year founded</Form.Label>
               <Form.Control as="select" name='year_established' value={values.year_established} onChange={handleChange}>
               {years.map((y, i) => <option key={i}>{y}</option>)}
               </Form.Control>
               </Form.Group>


               <Form.Group>
               <Form.File id="startupPitch" label="Startup's pitch" accept=".webm ,.mpg, .mp2, .mpeg, .mpe, .mpv ,.ogg ,.mp4, .m4p, .m4v ,.avi ,.wmv ,.mov, .qt ·.flv, .mkv" name='pitch' onChange={handleImage}/>
               </Form.Group>

               <Form.Group controlId="startupIndustry">
               <Form.Label>Industry {req}</Form.Label>
               <Form.Control className='form-input' type="text" placeholder="Enter categories seperated by a comma" name='category' value={values.category} onChange={handleChange}/>
               </Form.Group>

               <Form.Group>
               <Form.Label>Business Model {req}</Form.Label>
               <Form.Control as="select" name='business_model' value={values.business_model} onChange={handleChange}>
               <option>B2C</option>
               <option>B2B</option>
               <option>C2C</option>
               <option>C2B</option>
               </Form.Control>
               </Form.Group>

               <Form.Group>
               <Form.Label>Funding Stage {req}</Form.Label>
               <Form.Control as="select" name='funding_stage' value={values.funding_stage} onChange={handleChange}>
               <option>Pre-seed</option>
               <option>Series A</option>
               <option>Series B</option>
               <option>Series C</option>
               </Form.Control>
               </Form.Group>


               <span className='submit'>
               <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
               </span>
               </Form>
          </div>
          </div>
     )

}

StartupForm.propTypes = {
     registered: PropTypes.bool, 
     user_data: PropTypes.object.isRequired,
     req: PropTypes.func, 
     proceed: PropTypes.func
}

export default StartupForm;