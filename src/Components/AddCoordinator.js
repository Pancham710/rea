import React from 'react'
import './AddCoordinator.css'

function AddCoordinator() {
  return (
    <div>
        <center> 
            <div id="add_co_ordinator_card"> 
                <div id="heading">
                    <center> <h1> Add Co-Ordinator </h1> </center>
            </div>

            <div className="titles">
                <p> Name <span className="compulsory"> <sup> * </sup> </span> </p> 
                <input type="text" className="input_field" placeholder="Enter Name" />
            </div>

            <div className="titles">
                <p> Email <span className="compulsory"> <sup> * </sup> </span> </p> 
                <input type="text" className="input_field" placeholder="Enter Email" />
            </div>

            <div className="titles">
                <p> Username <span className="compulsory"> <sup> * </sup> </span> </p> 
                <input type="text" className="input_field" placeholder="Enter Username" />
            </div>

            <div className="titles">
                <p> Contact <span className="compulsory"> <sup> * </sup> </span> </p>
                <input type="text" className="input_field" placeholder="Enter Contact Number" />
            </div>

        <div className="titles">
            <p> Co-Ordinator For <span className="compulsory"> <sup> * </sup> </span> </p> 
            <select id="stream_select">
                <option value="Select Stream" color="#B2B3B6" disabled selected > Select Stream </option>
                <option value="Information Technology"> Information Technology </option>
                <option value="Computer Science"> Computer Science </option>
                <option value="Electrical"> Electrical </option>
                <option value="Mechanical"> Mechanical </option>
                <option value="Electronic and Tele-Communication"> Electronic and Tele-Communication </option>
            </select>
        </div>
        
        <br/> <br/> <br/>

        <center>
            <div className="buttons">
                <a href="/"> <button> Submit </button> </a>
            </div>
            <br/> <br/>
            <div className="buttons">
                <a href="/"> <button> Cancel </button> </a>
            </div>
        </center>

    </div>
</center>

    </div>
  )
}

export default AddCoordinator