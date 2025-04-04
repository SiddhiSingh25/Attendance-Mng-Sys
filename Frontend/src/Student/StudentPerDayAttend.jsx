import React, { useState } from "react";
import { ProgressBar, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAward } from "react-icons/fa6";
// for students progress section
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
} from "date-fns";
import "bootstrap/dist/css/bootstrap.min.css";
const students = [
  { number: "01", name: "Daxton Farmer", id: "2020-4535", progress: 91 },
  { number: "02", name: "Todd Dye", id: "2017-4718", progress: 91 },
  { number: "03", name: "Julia Willis", id: "2017-4723", progress: 90 },
];
//for calender section
const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 11 }, (_, i) => 2025 + i);

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const currentDate = new Date(selectedYear, selectedMonth, 1);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start, end });
  const firstDayIndex = getDay(start);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Side - Class Days */}
        <div
          className="col-md-6 d-flex align-items-flex-start justify-content-space-evenly border-end w-100%"
          style={{}}
        >
          <div
            className="main"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              gap: "2rem",
            }}
          >
            <div
              className="main-1 p-4 shadow-lg rounded-4 border-0" // class days -27 days
              style={{
                paddingTop: "2rem",
                width: "100%",
                // backgroundColor: "#f5f5f5",
                borderRadius: "1rem",
              }}
            >
              <div
                className="text-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  gap: "5rem",
                }}
              >
                <div
                  className="h1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3>Class Days</h3>
                  <p style={{ fontSize: ".8rem", color: "#aaa" }}>
                    Class Days for Monthly
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "2rem",
                    color: "#457de6",
                    fontWeight: "500",
                  }}
                >
                  23 Days
                </p>
              </div>
            </div>
            {/* student progress baar section */}
            <div
              className="main-2 p-4 shadow-lg rounded-4 border-0"
              style={{
                width: "100%",
                border: "2px solid #aaa",
                borderRadius: "1rem",
              }}
            >
              <div className="container mt-4">
                <div className="attendance-card">
                  <div className="sec-1 d-flex align-items-center justy-content-center">
                    <h4 className="title" style={{}}>
                      Top Attendance Students
                    </h4>
                    <button
                      className="filter-button"
                      style={{
                        border: "2px solid #aaa",
                        borderRadius: "1rem",
                      }}
                    >
                      &#128269; Filter
                    </button>
                  </div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id}>
                          <div
                            className="td1 d-flex align-items-center justify-content-center"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "1rem",
                            }}
                          >
                            <td>{student.number}</td>
                            <td>
                              {/* <i
                                class="fa-solid fa-award"
                                style={{
                                  color: "pink !important",
                                }}
                              ></i> */}
                              <FaAward
                                style={{ color: "pink", fontSize: "2rem" }}
                              />
                            </td>
                          </div>
                          <td>{student.name}</td>
                          <td>{student.id}</td>
                          <td className="progress-cell">
                            <ProgressBar
                              now={student.progress}
                              label={`${student.progress}%`}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Calendar UI */}
        <div className="col-md-6 d-flex align-items-center justify-content-center p-4 shadow-lg rounded-4 border-0">
          <div className="text-center">
            <div className="d-flex gap-3 justify-content-center mb-3">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  {months[selectedMonth]}
                </button>
                <ul className="dropdown-menu">
                  {months.map((month, index) => (
                    <li key={index}>
                      <button
                        className="dropdown-item"
                        onClick={() => handleMonthChange(index)}
                      >
                        {month}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  {selectedYear}
                </button>
                <ul className="dropdown-menu">
                  {years.map((year) => (
                    <li key={year}>
                      <button
                        className="dropdown-item"
                        onClick={() => handleYearChange(year)}
                      >
                        {year}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="calendar-container p-3 border rounded shadow"
              style={{ backgroundColor: "#ffe6e6", width: "400px" }}
            >
              <h5 className="fw-bold">Calendar</h5>
              <h6 className="text-muted">
                {months[selectedMonth]} {selectedYear}
              </h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    {daysOfWeek.map((day) => (
                      <th key={day}>{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from(
                    { length: Math.ceil((days.length + firstDayIndex) / 7) },
                    (_, rowIndex) => (
                      <tr key={rowIndex}>
                        {Array.from({ length: 7 }, (_, colIndex) => {
                          const dayIndex =
                            rowIndex * 7 + colIndex - firstDayIndex;
                          return (
                            <td
                              key={colIndex}
                              className="calendar-cell"
                              style={{ cursor: "pointer", fontWeight: "500" }}
                            >
                              {dayIndex >= 0 && dayIndex < days.length
                                ? format(days[dayIndex], "d")
                                : ""}
                            </td>
                          );
                        })}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <style>
              {`
                .calendar-cell:hover {
                  background-color: red !important;
                  color: white !important;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
