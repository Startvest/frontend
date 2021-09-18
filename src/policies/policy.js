import {React, useEffect} from 'react';

function Policy(){
     useEffect(() => {
          document.title = 'Private Policy';
          window.scroll(0,0);
     }, [])
     return(
          <div>
               <div className="tagline">Our Product Policy @StartVest</div>
          </div>
     )
}

export default Policy;