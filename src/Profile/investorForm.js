import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

import {Button, Form,} from 'react-bootstrap';
// import {Info} from 'react-bootstrap-icons';

const InvestorForm = ()=>{
     return(
          <div className='form shadow'>
               <h3 className="profile-head">Registration form for Investors</h3>
               <Form>

               <Form.Group controlId="Investorname">
               <Form.Label>Name of Investor</Form.Label>
               <Form.Control className='form-input' type="text" placeholder="Enter Investor's name" />
               </Form.Group>

               <Form.Group controlId="Investoremail">
               <Form.Label>E-mail of Investor</Form.Label>
               <Form.Control className='form-input' type="email" placeholder="Enter Investor's email" />
               </Form.Group>

               <Form.Group controlId="Industries">
               <Form.Label>Industries</Form.Label>
               <Form.Control className='form-input' type="text" placeholder="Enter Industries" />
               </Form.Group>


               <Form.Group controlId="exampleForm.ControlTextarea1">
               <Form.Label>Brief description of Investor</Form.Label>
               <Form.Control className='form-input' as="textarea" rows={2} />
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

export default InvestorForm;