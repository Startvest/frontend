import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckLg, ExclamationCircleFill, ExclamationTriangle  } from 'react-bootstrap-icons';
import {Alert, AlertContainer} from 'react-bs-notifier';

// Css
import './notification.css';

// Animation
import {Slide} from 'react-reveal';

export default function Notifyer({message, type, onDismissed, multiple}) {
  // const [alertTimeout] = useState(3000);
//   const [position] = useState('top-right');

// info, warning, danger, or success 
        setTimeout(() => {
          onDismissed(); //Clears the notification after 3 seconds
        },5000);

         function icon(){
          switch(type){
            default: return <CheckLg width={20} className='not-icon'/>;
            case 'success': return <CheckLg width={20} className='not-icon'/>;
            case 'danger': return <ExclamationCircleFill width={20} className='not-icon'/>;
            case 'warning': return <ExclamationTriangle width={20} className='not-icon'/>;
          }
        }

  return (
          <div>
              <AlertContainer>
                {/* If there are multiple messages, it loops them then show it */}
                {(multiple) ? 
                message.map((v,i) => 
                <Slide key={i} right>
                <Alert key={i} type={type} >{icon()} {String(v)}</Alert>
                </Slide>
                )
                : 
                <Slide right>
                <Alert type={type} >{icon()} {message}</Alert>
                </Slide>
                }
               
                </AlertContainer>
          </div>
  );
}