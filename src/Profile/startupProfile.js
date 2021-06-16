import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

const startup = {
     'slick': {
          'logo':false, 
          'name':'Slick Cloud', 
          'location': 'Kaduna, Nigeria',
          'est': '2020',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor neque, risus euismod cursus tellus, tellus viverra vel fusce. Etiam fermentum mattis enim sed.',
          'industry': 'Saas, Iaas',
          'job': {
               '1':{
                    'name': 'Field Technician at Slick Cloud',
                    'role': 'Technician',
                    'location': 'Lagos, Nigeria',
                    'salary': 'N500,000 monthly'
               }  
          },
          'website': 'https://slickcloud.io',
          'email': 'admin@slickcloud.com.ng',
          'number': '09076284736',
          'staff': 5,
          'model': 'B2C',
          'funding': 'Seed',
          'registered': false,
          'team':{
               '1':{
                    'name': 'Lorem Ipsum',
                    'position': 'CEO/Founder',
               },
               '2':{
                    'name': 'Lorem Ipsum',
                    'position': 'Marketing Strategist'
               },
               '3':{
                    'name': 'Lorem Ipsum',
                    'position': 'Senior Developer'
               }
          }
     }
}

const startProfile = () =>{
          return(
               <div>
                    <p>{startup.slick.name}</p>
               </div>
          )
}

export default startProfile;