import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typewriter } from "react-simple-typewriter";

function Page1() {
  return (
    <>
      <div className="container-fluid bg py-5 px-5 heropage">
        <div class="row my-0">
          <div className="col-sm-6 text-center">
            <h2
              className="heading"
              style={{
                fontSize: "2rem",
              }}
            >
              Welcome to Attendance Management System!{" "}
              <span class="text-blue-500"></span>
              <div className="h-36">
                <Typewriter
                  words={[
                    "Automate Attendance with Ease!",
                    "Smart Attendance, Smarter Management! ",
                    "Touch. Verify. Attend. Simple & Secure! ",
                  ]}
                  autoStart={true} // Automatically start typing
                  loop={false} // No looping
                  deleteSpeed={Infinity} // Prevent erasing by setting delete speed to infinity
                  escapeHTML={false} // Allow HTML rendering in strings
                  cursor=""
                />
              </div>
            </h2>
            <p className="subheading ">
              Effortlessly track teacher and student attendance with our
              automated system. Save time, reduce errors, and enhance the
              academic experience.
            </p>{" "}
            <Button
              variant="primary"
              className="page1-btn"
              style={{ backgroundColor: "#0059bd" }}
            >
              Get Started
            </Button>
          </div>

          <div className="col-sm-6">
            <div className="image-container">
              <img
                src="photospage123/girltakinglaptop.png"
                className="photo"
                alt="Girl using laptop"
                width="80%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
