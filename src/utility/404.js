import React from 'react';
import "./404.css";
import {Back} from "react-bootstrap-icons";
import {Button} from "react-bootstrap";

function notFound(){
     return(
          <div className='f04-cont'>
               <div className='f04'>
               <h2>404</h2>
               <p>Oops, seems this page does not exist on Startvest, but you can check out our home page</p>
               <Button className='hm-btn'><Back height="25" width="25"/><a href="/">Home</a></Button>
               </div>
          </div>
     )
}

export default notFound;