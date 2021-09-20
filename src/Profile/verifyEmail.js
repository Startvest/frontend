import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

import {Container, Row, Col, Form} from 'react-bootstrap';

import {X} from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

import VerifySVG from '../images/verify3.svg';


function VerifyEmail({email, setVerify, close, checkForm}){
     useEffect(() => {
          document.title = 'Verify your email';
     })
     const [codes, setCodes] = useState({
          '1': '',
          '2': '',
          '3': '',
          '4': '',
     });
    
     useEffect(() => {
          document.getElementById('1').focus();
     }, [])

     const handleChange = (e)=>{
          e.preventDefault();
          if(e.target.value.length <= 1){
               setCodes((values) => ({
                    ...values,
                    [e.target.name]: e.target.value ,
               }));
          }
          if(e.target.value !== ''){
               if(document.getElementById(String(Number(e.target.id)+1))){
                    document.getElementById(String(Number(e.target.id)+1)).focus();
               }
          };
     }

     const checkcomplete = (e) =>{
          // Verify is all the boxes have setValues
          if(codes['1']  && codes['2'] && codes['3'] && codes['4']){
               // Send a fetch request to the server
               // As a different function on its own, so resend can use it
               console.log(codes['1']  + codes['2'] + codes['3'] + codes['4']);
               setVerify();
               checkForm();         
           }
     }
 
     return(
          <Container className='box_design shadow'>
               <div className='d-flex justify-content-between ' >
               
               {/* This is an unauthodox method to cnter the svg Icon */}
               {/* Correct it later */}
               <div id='no_disp'><X onClick={close} color={'#21295C'}  height={30} width={30} /></div>
               
               <div className='flex-fill'> <img src={VerifySVG} alt='Verify Email' className='vemail-logo '/></div>
               
               <div ><X onClick={close} color={'#21295C'} height={30} width={30} /></div>
               </div>

               <div className='vemail-head'>Verify your email address</div>
               <div className='vemail-body'>
                    To ensure that the email provided is real and belongs to you, 
                    we have to verify. Please confirm by enetring the 4-digit code sent to <span className='vemail-link'>{email}</span>
               </div>

                    <Container className='vemail-codes' >
                  
                    <Row className='justify-content-center'>
                         {Object.values(codes).map((v,i)=> 
                         <Col lg={2} md={3} xs={3} key={i}>
                              <Form.Control className='vemail-input' id={Number(i+1)} name={i+1} value={v} onChange={handleChange} onKeyUp={checkcomplete} max={'1'} type="number" />
                         </Col>
                         )}
                    </Row>
                    </Container>
               
               <Container className='vemail-alt'>
               
                    It might take a minute to receive your email
                    <p>Haven't received it? <span className='vemail-resend'>Resend Code</span></p>
                   
               </Container>
              
          </Container>
     )
}
// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,

VerifyEmail.propTypes={
     email: PropTypes.string.isRequired,
     setVerify: PropTypes.func.isRequired,
     close: PropTypes.func.isRequired,
     checkForm: PropTypes.func.isRequired
}
export default VerifyEmail;