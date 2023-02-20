import React from 'react'
import './CoordinatorDashboard.css'

function CoordinatorDashboard() {
  return (
    <div>
        <div id='heading'>
        <center> <h1> MCOE Training And Placement Cell <br /> Co-Ordinator Dashboard </h1> </center>
        <button id='logout_button'> Logout </button>
        </div>

        <br /> <br />

        <div className="dashboard_cards">
            <div className="cards">
                <br/> <br/> <br/>
                <p> Change Password </p>
            </div>

            <div className="cards">
                <br/> <br/> <br/>
                <p> Verify Students </p>
            </div>

            <div className="cards">
                <br/> <br/> <br/>
                <p> Verify Marks </p>
            </div>

        </div>

    </div>
  )
}

export default CoordinatorDashboard