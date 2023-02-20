import React from 'react'
import './AdminDashboard.css'

function AdminDashboard() {
  return (
    <div>
        <div id="heading">
            <center> <h1> MCOE Training And Placement Cell <br /> Admin Dashboard </h1> </center>
            <button> Logout </button>
        </div>

        <br/> <br/>

        <div className="dashboard_cards">
            <div className="cards">
                <br/> <br/>
                <p> View Student Details </p>
            </div>

            <div className="cards">
                <br/> <br/> <br/>
                <p> Add Co-Ordinator </p>
            </div>

            <div className="cards">
                <br/> <br/>
                <p> Add Company Details </p>
            </div>

        </div>

        <br/> <br/>
        <div className="dashboard_cards">
            <div className="cards">
                <br/> <br/>
                <p> View Company Details </p>
            </div>

            <div className="cards">
                <br/> <br/> <br/>
                <p> View Queries </p>
            </div>

            <div class="cards">
                <br/> <br/>
                <p> View Selected / Placed Students </p>
            </div>

        </div>

        <br/> <br/>

        <div className="dashboard_cards">
            <div className="cards">
                <br/> <br/> <br/>
                <p> Update Question Bank </p>
            </div>

        </div>


    </div>
  )
}

export default AdminDashboard