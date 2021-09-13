import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

import {Container, Row, Col, Form} from 'react-bootstrap';

import {X} from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

import VerifySVG from '../images/verify.svg';

// react code input 
import ReactCodeInput from 'react-verification-code-input';
function VerifyEmail({email, setVerify, close}){

     const [codes, setCodes] = useState({
          '1': '',
          '2': '',
          '3': '',
          '4': '',
     });

     const handleChange = (e)=>{
          e.preventDefault();
          setCodes((values) => ({
               ...values,
               [e.target.name]: e.target.value ,
          }));

          if(e.target.value !== ''){
               console.log(document.getElementById(String(e.target.id+1)))
               // console.log(document.getElementById(String(e.target.id+1)));
               if(document.getElementById(String(Number(e.target.id+1)))){
                    document.getElementById(String(Number(e.target.id+1))).focus();
                    console.log(e.target.id);
               }
               
          };
          }
         
     // const CODE_length = new
     return(
          <Container className='box_design shadow-sm'>
               <Row>
                    <Col > 
                    {/* <img src={VerifySVG} alt='Verify Email' className='vemail-logo'/> */}
                    </Col>
                    <Col xs={2}><X color={'#21295C'} height={40} width={40}/></Col>
               </Row>
               <div className='vemail-head'>Verify your email address</div>
               <div className='vemail-body'>
                    To ensure that the email provided is real and belongs to you, 
                    we have to verify. Please confirm by enetring the 4-digit code sent to <p className='vemail-link'>{email}</p>
               </div>

                    <Container className='vemail-codes' >
                    {/* <ReactCodeInput type='number'/> */}
                    <Row className='justify-content-center'>
                         {Object.values(codes).map((v,i)=> 
                         <Col lg={1} md={2} xs={3} key={i}>
                              <Form.Control id={Number(i+1)} name={i+1} value={v} onChange={handleChange} maxLength="1" type="number" />
                         </Col>
                         )}
                    </Row>
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
     close: PropTypes.func.isRequired

}
export default VerifyEmail;