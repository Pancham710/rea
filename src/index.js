import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import CoordinatorLogin from './Components/CoordinatorLogin';
//import AdminLogin from './Components/AdminLogin';
// import CoordinatorDashboard from './Components/CoordinatorDashboard';
// import AdminDashboard from './Components/AdminDashboard';
//import AddCoordinator from './Components/AddCoordinator';
import StudentLogin from "./Student/StudentLogin";
import StudentRegister from "./Student/StudentRegister";
//import AlreadyApplied from "./Student/AreadyApplied"
// import StudentDetail from "./Student/StudentDetail";
//import StudentDashboard from "./Student/StudentDashboard";
//import ApplyCompanies from "./Student/ApplyCompanies";
//import TrackProgress from "./Student/TrackProgress";
// import PreviousQuestions from "./Student/PreviousQuestions";
import HomePage from "./Home/HomePage";
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
    {/* <StudentDetail />   */}
    {/* <ApplyCompanies/>  */}
    {/* <AlreadyApplied/> */}
    {/* <TrackProgress/> */}
    {/* <PreviousQuestions/> */}
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegister />} />
       </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
