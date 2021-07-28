import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {AlertList} from 'react-bs-notifier';


export default function Notifyer({head, message, type, onDismissed}) {
  const [alertTimeout] = useState(3000);
  const [position] = useState('top-right');

  const alerts = [{
     id: new Date().getTime(),
     type: type,
     headline: head,
     message: message,
}]
// info, warning, danger, or success 

  return (
    <div>
      <AlertList
				position={position}
				alerts={alerts}
				timeout={alertTimeout}
				dismissTitle="Close"
				onDismiss={onDismissed}
		/>
    </div>
  );
}