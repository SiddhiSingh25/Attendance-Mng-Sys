import LandingPage from "./LandingPage/LandingPage";
import Auth from "./Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

import TeacherRegister from "./Auth/TeacherRegister";
import StudentRegister from "./Auth/StudentRegister";
import StudentLogin from "./Auth/StudentLogin";
import TeacherLogin from "./Auth/TeacherLogin";

function App() {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
      {/* <LandingPage/>
  <Auth/> */}
    </>
  );
}

export default App;
