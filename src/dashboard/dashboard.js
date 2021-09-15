import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

componentDidMount(){
     window.scrollTo(0, 0);
}

render() {
     return(
          <div>  
               <div className="teamHead">
               The dashboard 
               </div>
               <h3>Welcome</h3>
          </div>
     )
}}

export default Dashboard;