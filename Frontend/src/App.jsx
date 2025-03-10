import LandingPage from "./LandingPage/LandingPage";
import Auth from "./Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./LandingPage/Footer";
import TeacherRegister from "./Auth/TeacherRegister";
import StudentRegister from "./Auth/StudentRegister";
import StudentLogin from "./Auth/StudentLogin";
import TeacherLogin from "./Auth/TeacherLogin";
import StudentProfile from './Student/StudentProfile'
import TeacherProfile from "./Teacher/TeacherProfile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/feedback" element={<h1>Feedback Page</h1>} />
          <Route path="/login/teacher" element={<TeacherLogin/>} />
          <Route path="/login/student" element={<StudentLogin/>} />
          <Route path="/signup/teacher" element={<TeacherRegister/>} />
          <Route path="/signup/student" element={<StudentRegister/>} />
          <Route path="/studentdashboard" element={<StudentProfile/>} />
          <Route path="/teacherdashboard" element={<TeacherProfile/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <LandingPage/>
  <Auth/> */}
    </>
  );
}

export default App;
