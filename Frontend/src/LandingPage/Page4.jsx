import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Page4 = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <h2
        className="text-center mb-4"
        style={{
          color: "#004080",
          paddingBottom: "2rem",
        }}
      >
        Smart & Efficient Attendance Management
      </h2>
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ gap: "2rem", alignItems: "center", margin: "0" }}
        >
          {/* Card 1 */}
          <div className="col-md-3 d-flex align-items-stretch">
            <div className="card shadow-sm p-3 mb-4 d-flex flex-column text-center">
              <h5
                className="card-title mt-3 mb-3"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#00264d",
                }}
              >
                1️⃣ Smart Attendance Features
              </h5>
              <div className="position-relative d-flex justify-content-center">
                <img
                  src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/What-is-an-attendence-manangemnt-system.png"
                  className="card-img-top"
                  alt="Smart Attendance Features"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
              <div
                className="card-body d-flex flex-column flex-grow-1"
                style={{
                  fontSize: "14px",
                  color: "#00264d",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <p
                  className="card-text flex-grow-1"
                  style={{ paddingLeft: ".5rem", paddingRight: ".5rem" }}
                >
                  Effortlessly manage student attendance with a seamless and
                  efficient system. Ensure accurate records and easy access for
                  both students and faculty.
                </p>
                <a
                  href="#"
                  className="btn1 mt-auto"
                  style={{
                    backgroundColor: "#00264d",
                    color: "#ffffff",
                    height: "2.5rem",
                    borderRadius: "4px",
                    paddingTop: ".5rem",
                    textDecoration: "none",
                  }}
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 d-flex align-items-stretch">
            <div className="card shadow-sm p-3 mb-4 d-flex flex-column text-center">
              <h5
                className="card-title mt-3 mb-3"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#00264d",
                }}
              >
                2️⃣ AI-Powered Attendance Insights
              </h5>
              <div className="position-relative d-flex justify-content-center">
                <img
                  src="https://www.pockethrms.com/wp-content/uploads/2020/08/AI-based-Smart-Attendance-System-Blog-Banner-scaled.webp"
                  className="card-img-top"
                  alt="AI-Powered Attendance Insights"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
              <div
                className="card-body d-flex flex-column flex-grow-1"
                style={{
                  fontSize: "14px",
                  color: "#00264d",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <p
                  className="card-text flex-grow-1"
                  style={{ paddingLeft: ".5rem", paddingRight: ".5rem" }}
                >
                  Revolutionize attendance tracking with AI-driven analytics.
                  Gain real-time insights, reduce manual efforts, and improve
                  overall attendance management.
                </p>
                <a
                  href="#"
                  className="btn1 mt-auto"
                  style={{
                    backgroundColor: "#00264d",
                    color: "#ffffff",
                    height: "2.5rem",
                    borderRadius: "4px",
                    paddingTop: ".5rem",
                    textDecoration: "none",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 d-flex align-items-stretch">
            <div className="card shadow-sm p-3 mb-4 d-flex flex-column text-center">
              <h5
                className="card-title mt-3 mb-3"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#00264d",
                }}
              >
                3️⃣ College Attendance Management Solution
              </h5>
              <div className="position-relative d-flex justify-content-center">
                <img
                  src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?cs=srgb&dl=pexels-olly-3756679.jpg&fm=jpg"
                  className="card-img-top"
                  alt="College Attendance Management Solution"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
              <div
                className="card-body d-flex flex-column flex-grow-1"
                style={{
                  fontSize: "14px",
                  color: "#00264d",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <p
                  className="card-text flex-grow-1"
                  style={{ paddingLeft: ".5rem", paddingRight: ".5rem" }}
                >
                  A comprehensive solution designed for colleges to streamline
                  attendance tracking, generate reports, and enhance classroom
                  productivity.
                </p>
                <a
                  href="#"
                  className="btn1 mt-auto"
                  style={{
                    backgroundColor: "#00264d",
                    color: "#ffffff",
                    height: "2.5rem",
                    borderRadius: "4px",
                    paddingTop: ".5rem",
                    textDecoration: "none",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
