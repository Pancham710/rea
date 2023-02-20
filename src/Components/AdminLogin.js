import React from 'react'
import './AdminLogin.css'

function AdminLogin() {
  return (
    <div className="AdminLogin">
      <center>
        <div id="heading">
              <center> <h1> Admin Login </h1> </center>
          </div>

          <div className='titles'>
              <p> Username <span className='compulsory'> <sup> * </sup> </span> </p> 
              <input type="text" className='input_field' placeholder="Enter Username" />
          </div>

          <div className='titles'>
              <p> Password <span className='compulsory'> <sup> * </sup> </span> </p>
              <input type="text" class="input_field" placeholder="Enter Password" />
          </div>
          
          <div className='titles'>
              <p> <button id="show_password"> Show Password </button> </p>
          </div>
          <br />
          <center>
              <div className='buttons'>
                  <a href="/"> <button> Login </button> </a>
              </div>
              <br /> <br />
              <div className='buttons'>
                  <a href="/"> <button> Cancel </button> </a>
              </div>
            </center>
        </center>
    </div>
  )
}

export default AdminLogin