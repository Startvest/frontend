// import React, { useState } from 'react';

export default async function ConnectDB(){
     const staging =  'https://startvest-staging.herokuapp.com/api/v1.0/';
     // const build = 'https://startvest.herokuapp.com/api/v1.0/';

     await fetch(`${staging}users/login/`, {
               method: 'POST', 
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify({"username": "Admin",
               "email": "startvest4@gmail.com",
               "password": "24vJiKSu42z8VD8"}),
               })
               .then(response => response.json())
               .then(data => {    
               localStorage.clear('token');
               localStorage.setItem('token', data.access_token);
               console.log('Server connected successfully');
               })
               .catch((error) => {
               console.error('Error:', error);
          });

          return localStorage.getItem('token');
     
     // https://startvest.herokuapp.com/api/v1.0/investors/
     // https://startvest-staging.herokuapp.com/api/v1.0/users/registration/
     // fetch(`${staging}users/registration/`, {
     //      method: 'POST', 
     //      headers: {
     //      'Content-Type': 'application/json',
     //      },
     //      body: JSON.stringify({
     //                "username": "Admin",
     //                "email": "startvest4@gmail.com",
     //                "password1": "24vJiKSu42z8VD8",
     //                "password2": "24vJiKSu42z8VD8"}),
     //      })
     //      .then(response => response.json())
     //      .then(data => {    
     //           console.log(data)  ; 
     //      localStorage.clear('token');
     //      localStorage.setItem('token', data.access_token);
     //      })
     //      .catch((error) => {
     //      console.error('Error:', error);
     // });



     // NOTE: BEFORE BUILDING THE UPDATE, FIND A solution TO 
     // SCROLL UP TO A PAGE TOP ANYTIME THE VIEW IS CHANGED E.G REGISTRATION FORM
     
}