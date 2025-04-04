import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Feedback from "./Feedback";
import Footer from "./Footer";
import StudentProfile from "../Student/StudentProfile";
import StudentPerDayAttend from "../Student/StudentPerDayAttend";

function LandingPage() {
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page5 />
      <Page4 />

      <Footer />
      <StudentProfile />
      <StudentPerDayAttend />

      <Feedback />
    </>
  );
}

export default LandingPage;
