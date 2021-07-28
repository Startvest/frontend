import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// External notification
import Notifyer from '../utility/notification';


// Css File
import './dashboard.css';


class Dashboard extends React.Component {
     constructor(props) {
          super(props);
          this.state =({
               alert: false,
               position: 'top-right',
               notify: false,
               external: false
          })
     }



render() {
     return(
          <div>
               The dashboard 
               <div>
                    <button onClick={() => this.setState({external: true})}>Show the external notification</button>
                    {(this.state.external) ? <Notifyer message='This is the message, your password is incorrect' type='danger' onDismissed={() => this.setState({external: false})} />:null}
               </div>
          </div>
     )
}}

export default Dashboard;