import {React, useEffect} from 'react';

function Policy(){
     useEffect(() => {
          document.title = 'Terms and Conditions';
          window.scroll(0,0);
     }, [])
     return(
          <div>
               <div className="tagline">Our terms and conditions @StartVest</div>
          </div>
     )
}

export default Policy;