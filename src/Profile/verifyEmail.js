import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

import {Container} from 'react-bootstrap';

import PropTypes from 'prop-types';

function VerifyEmail({email, setVerify}){

     return(
          <Container className='box_design shadow-sm'>
               <h3>Verify your email address</h3>
               <p>An email has been sent to <span id='vemail-link'>{email}</span></p>
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
     setVerify: PropTypes.func.isRequired
}
export default VerifyEmail;