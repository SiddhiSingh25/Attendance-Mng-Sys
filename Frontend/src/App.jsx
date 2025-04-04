// import LandingPage from './LandingPage/LandingPage';
// // import Auth from './Auth/Auth';
// import Student from './Student/Student';

// function App() {
//   return (
//     <>
//   <LandingPage/>
//   {/* <Auth/> */}
//   <Student/>
//     </>
//   )
// }

// export default App


import Student from './Student/Student';
import LandingPage from "./LandingPage/LandingPage";
import Auth from "./Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

import TeacherRegister from "./Auth/TeacherRegister";
import StudentRegister from "./Auth/StudentRegister";
import StudentLogin from "./Auth/StudentLogin";
import TeacherLogin from "./Auth/TeacherLogin";
import StudentProfile from './Student/StudentProfile'
import TeacherProfile from "./Teacher/TeacherProfile";
import AttendanceDashboard from './Student/AttendanceDashboard';
function App() {
  return (
    <>
  {/* <LandingPage/>
  <Auth/>
  <Student/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/feedback" element={<h1>Feedback Page</h1>} />

          <Route path="/login/teacher" element={<TeacherRegister />} />
          <Route path="/login/student" element={<StudentRegister />} />
          <Route path="/signup/teacher" element={<StudentLogin />} />
          <Route path="/signup/student" element={<TeacherLogin />} />

          <Route path="/login/teacher" element={<TeacherLogin/>} />
          <Route path="/login/student" element={<StudentLogin/>} />
          <Route path="/signup/teacher" element={<TeacherRegister/>} />
          <Route path="/signup/student" element={<StudentRegister/>} />
          <Route path="/studentdashboard" element={<StudentProfile/>} />
          <Route path="/teacherdashboard" element={<TeacherProfile/>} />
          <Route path="/attendancedashboard" element={<AttendanceDashboard/>} />

        </Routes>
      </BrowserRouter>
      {/* <LandingPage/>
  <Auth/> */}
    </>
  );
}

export default App;
