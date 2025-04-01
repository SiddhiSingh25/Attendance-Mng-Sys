import React from "react";
import { Card, Button, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function StudentProfile() {
  return (
    <>
      <div
        className="student-detail"
        style={{
          paddingTop: "3rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          className="p-4 shadow-lg rounded-4 border-0 "
          style={{
            width: "85%",
          }}
        >
          <div className="d-flex justify-content-between align-items-start">
            {/* Left Section: Profile & Details */}
            <div className="d-flex">
              <img
                src="data:image/jpeg;base64,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"
                alt="Student"
                className="rounded-circle me-3"
                width="80"
                height="80"
              />
              <div>
                <h5 className="fw-bold mb-1">Caleb White</h5>
                <p className="text-muted mb-1">
                  <strong>ID:</strong> 2021-0001
                </p>
                <p className="text-muted mb-1">
                  <strong>Number:</strong> (555) 123-4567
                </p>
                <p className="text-muted mb-1">
                  <strong>Email:</strong> caleb.white@gmail.com
                </p>
                <p className="text-muted">
                  <strong>Address:</strong> 123 Elm Street
                </p>
              </div>
            </div>

            {/* Right Section: Dropdown & Button */}
            <div className="d-flex align-items-center">
              <Button
                variant="primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "3rem",
                  width: "12rem",
                  borderRadius: "3rem",
                  backgroundColor: "#457de6",
                }}
              >
                <i class="fa-solid fa-circle-down" id="download"></i>
                Download Info
              </Button>
            </div>
          </div>
          <style>
            {`
             #download{
                font-size:1rem !important;
                border:none !important;
             }
            `}
          </style>
          {/* Attendance Summary */}
          <div className="d-flex justify-content-around text-center mt-4">
            <div
              style={{
                backgroundColor: "#f5f5f5",
                width: "20%",
                borderRadius: "1rem",
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <i className="bi bi-calendar-check text-primary fs-4 align-items-center justify-content-center d-flex"></i>
              </div>
              <div
                style={{
                  paddingTop: "1rem",
                }}
              >
                <p className="mb-0 fw-bold">13 Days</p>
                <p className="text-muted small">Total Attendance</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                width: "20%",
                borderRadius: "1rem",
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <i className="bi bi-clock-history text-success fs-4"></i>
              </div>
              <div
                style={{
                  paddingTop: "1rem",
                }}
              >
                <p className="mb-0 fw-bold">7 Days</p>
                <p className="text-muted small">Late Attendance</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                width: "20%",
                borderRadius: "1rem",
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <i className="bi bi-exclamation-triangle text-warning fs-4"></i>
              </div>
              <div
                style={{
                  paddingTop: "1rem",
                }}
              >
                <p className="mb-0 fw-bold">1 Day</p>
                <p className="text-muted small">Undertime Attendance</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                width: "20%",
                borderRadius: "1rem",
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                {" "}
                <i className="bi bi-x-circle text-danger fs-4"></i>
              </div>
              <div
                style={{
                  paddingTop: "1rem",
                }}
              >
                <p className="mb-0 fw-bold">2 Days</p>
                <p className="text-muted small">Total Absent</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
export default StudentProfile;
