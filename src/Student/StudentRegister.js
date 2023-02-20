import React from 'react'
import './StudentRegister.css'

export default function StudentRegister() {
  return (
    
    <div className="StudentRegister">
      
      <center>
       
        <div id="heading">
              <center> <h1> Student Registration </h1> </center>
          </div>

          <div className='titles'>
              <p> Name <span className='compulsory'> <sup> * </sup> </span> </p> 
              <input type="text" className='input_field' placeholder="Enter student name" />
          </div>

          <div className='titles'>
              <p> Email-id <span className='compulsory'> <sup> * </sup> </span> </p> 
              <input type="email" className='input_field' placeholder="Enter email id " />
          </div>

          


          <div className='titles'>
              <p> Create Password <span className='compulsory'> <sup> * </sup> </span> </p>
              <input type="password" class="input_field" placeholder="Enter Password" />
          </div>
          <div className='titles'>
              <p> <button id="show_password"> Show Password </button> </p>
          </div>

          <div className='titles'>
              <p> Re-enter Password <span className='compulsory'> <sup> * </sup> </span> </p> 
              <input type="password" className='input_field' placeholder="Enter Password again " />
          </div>

          



          
          
          <div className='titles'>
              <p> <button id="show_password"> Show Password </button> </p>
          </div>
          <br />
          <center>
              <div className='buttons'>
                  <a href="/"> <button> Register </button> </a>
              </div>
              <br /> <br />
              <div className='buttons'>
                  <a href="/"> <button> Cancel </button> </a>
              </div>
              <br></br>
            </center>
        </center>
       
      
    </div>
  )
}

