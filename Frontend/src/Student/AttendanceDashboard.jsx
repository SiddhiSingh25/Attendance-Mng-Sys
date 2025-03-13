// // export default AttendanceDashboard;
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import './student.css';

// Define a StudentProfile component
const StudentProfile = ({ student, updateAttendance }) => {
    return (
        <div className='row colscontainer' key={student.name}>
            <div className='col-sm-1 colsicon'>
                <img className='imgAD' src={student.photo} alt={student.name} />
            </div>
            <div className='col-sm-8 pt-3'>{student.name}</div>
            <div className='col-sm-1 containerAPL'>
                <button
                    className={student.status === "present" ? "greenButton" : "commonButton"}
                    onClick={() => updateAttendance(student, "present")}
                >
                    P
                </button>
            </div>
            <div className='col-sm-1 containerAPL'>
                <button
                    className={student.status === "absent" ? "redButton" : "commonButton"}
                    onClick={() => updateAttendance(student, "absent")}
                >
                    A
                </button>
            </div>
            <div className='col-sm-1 containerAPL'>
                <button
                    className={student.status === "leave" ? "yellowButton" : "commonButton"}
                    onClick={() => updateAttendance(student, "leave")}
                >
                    L
                </button>
            </div>
        </div>
    );
};

function AttendanceDashboard() {
    // Define student profiles as objects
    const [students, setStudents] = useState([
        { name: "Zara Khan", photo: "AttendDashboardimg/zara.png", status: null },
        { name: "Abhishek Yadav", photo: "AttendDashboardimg/abhishek.png", status: null },
        { name: "Priya Singh", photo: "AttendDashboardimg/priya.jpg", status: null },
        { name: "Kunal Verma", photo: "AttendDashboardimg/kunal.jpg", status: null },
        { name: "Arjun Mehta", photo: "AttendDashboardimg/arjun.jpg", status: null },
        { name: "Bhavna Patel", photo: "AttendDashboardimg/bhavna.jpg", status: null },
        { name: "Rohit Sharma", photo: "AttendDashboardimg/rohit.jpg", status: null }
    ]);

    // Sort students alphabetically when the component mounts
    useEffect(() => {
        const sortedStudents = [...students].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setStudents(sortedStudents);
    }, []);

    // Function to update attendance status
    const updateAttendance = (student, status) => {
        const updatedStudents = students.map((s) =>
            s.name === student.name ? { ...s, status } : s
        );
        setStudents(updatedStudents);
    };

    return (
        <div className='containermain'>
             <div className='row pb-3'>
            <p className='headingattend'> Attendance</p>
           
        </div>
        <div className='row'>
            <div className='col-sm-3'>
                <select>
                    <option>Select Branch</option>
                    <option>Information Technology</option>
                    <option>Electronics</option>
                    <option>PGDCA</option>
                </select>
            </div>
            <div className='col-sm-3'>
                <select >
                    <option>Select Year</option>
                    <option>First Year</option>
                    <option>Second Year</option>
                    <option>Third Year</option>
                </select>
            </div>
            <div className='col-sm-3'>
                <select >
                    <option>Select Subject</option>
                    <option>Applid Mathematics I</option>
                    <option>Applid Mathematics II</option>
                    <option>Applid Mathematics III</option>
                    <option>Applid Physics I</option>
                    <option>Applid Physics II</option>
                    <option>Applid Chemistry</option>
                    <option>Big Data</option>
                    <option>Cloud Computing</option>
                    <option>C Programming</option>
                    <option>Data Structur Using C</option>
                    <option>Object Orianted Programming Using JAVA</option>
                    <option>Python</option>
                    <option>Android</option>
                </select>
            </div>
            <div className='col-sm-3'>
                <button type="button" class="btn btn-primary buttonAD">Take Attendance</button>
            </div>
        </div>
            <div className='subcontainer'>
                {students.reduce((acc, student, index) => {
                    const currentInitial = student.name[0].toUpperCase();
                    const prevInitial = index > 0 ? students[index - 1].name[0].toUpperCase() : null;

                    if (currentInitial !== prevInitial) {
                        acc.push(
                            <h5 key={currentInitial} className="alphabetIndicator">
                                {currentInitial}
                            </h5>
                        );
                    }

                    acc.push(
                        <StudentProfile
                            key={student.name}
                            student={student}
                            updateAttendance={updateAttendance}
                        />
                    );
                    return acc;
                }, [])}
            </div>
        </div>
    );
}

export default AttendanceDashboard;
