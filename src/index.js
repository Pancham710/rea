import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import CoordinatorLogin from './Components/CoordinatorLogin';
//import AdminLogin from './Components/AdminLogin';
// import CoordinatorDashboard from './Components/CoordinatorDashboard';
// import AdminDashboard from './Components/AdminDashboard';
//import AddCoordinator from './Components/AddCoordinator';
//import StudentLogin from './Student/StudentLogin';
//import StudentRegister from './Student/StudentRegister';
import "bootstrap/dist/css/bootstrap.min.css";
import StudentDetail from "./Student/StudentDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <CoordinatorLogin />  */}
    {/* <br /> */}
    {/* <AdminLogin />  */}
    {/* <br/> */}
    {/* <CoordinatorDashboard /> */}
    {/* <AdminDashboard /> */}
    {/* <AddCoordinator /> */}
    {/* <StudentLogin /> */}
    {/* <StudentRegister/>  */}
    <StudentDetail />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
