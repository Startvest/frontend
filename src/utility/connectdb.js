// import React, { useState } from 'react';

export default function ConnectDB(){

     fetch('http://startvest-staging.herokuapp.com/api/v1.0/users/login/', {
               method: 'POST', 
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify({"username": "Hanif Adedotun",
               "email": "hanif.adedotun@gmail.com",
               "password": "24vJiKSu42z8VD8"}),
               })
               .then(response => response.json())
               .then(data => {         
               localStorage.clear('token');
               localStorage.setItem('token', data.access_token);
               })
               .catch((error) => {
               console.error('Error:', error);
          });

          return localStorage.getItem('token');
}