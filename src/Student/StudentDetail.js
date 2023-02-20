import React from 'react'

import './StudentDetail.css'

export default function StudentDetail() {
  return (
    
    <div className="StudentDetail">
        <div id="heading">
              <center> <h1> Student Login </h1> </center>
          </div>
        
          <div className='titles'>
              <p> Username <span className='compulsory'> <sup> * </sup> </span> </p> 
              <input type="text" className='input_field' placeholder="Enter Username" />
          </div>

          <div className='titles'>
              <p> Password <span className='compulsory'> <sup> * </sup> </span> </p>
              <input type="password" class="input_field" placeholder="Enter Password" />
          </div>

          <div class="container">
          
              <div class="element1">Element</div>
              
              <input type="text" className='input_field' placeholder="Enter Username" />
              
              <div class="element2">Element 2</div>
              <input type="text" className='input_field' placeholder="Enter Username" />
          </div>


          
      
    </div>
  )
}
