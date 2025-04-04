import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './teacher.css';

const TeacherProfile = () => {
  // Teacher information as an object
  const teacherInfo = {
    name: 'Teacher Name',
    role: 'IT Lecturer',
    contact: '+91 0000000000',
    email: 'xyz@gmail.com',
    image: 'AttendDashboardimg/zara.png',
    subjects: [
      { id: 1,
         name: 'Subject1',
         branches: ['IT', 'Electronics','PGDCA'],
        semesters: ['First Semester', 'Second Semester','Third Semester', 'Fourth Semester','Fifth Semester', 'Sixth Semester'] },
      { id: 2, 
        name: 'Subject2', 
        branches: ['IT', 'Electronics','PGDCA'], 
        semesters: ['First Semester', 'Second Semester','Third Semester', 'Fourth Semester','Fifth Semester', 'Sixth Semester'] },
      { id: 3, 
        name: 'Subject3', 
        branches: ['IT', 'Electronics','PGDCA'],
        semesters: ['First Semester', 'Second Semester','Third Semester', 'Fourth Semester','Fifth Semester', 'Sixth Semester'] },
      { id: 4, 
        name: 'Subject4', 
        branches: ['IT', 'Electronics','PGDCA'], 
        semesters: ['First Semester', 'Second Semester','Third Semester', 'Fourth Semester','Fifth Semester', 'Sixth Semester'] },
    ],
  };

  return (
    <>
      <div className='row teacher_container TPbackground'>
        <div className='col-sm-3 leftcontainer'>
          <div>
            <img src={teacherInfo.image} className="imgteacherpro" alt="Teacher" height="80%" width="35%" />
          </div>
          <div className='teacher_name'>{teacherInfo.name}</div>
          <div className='lechturer mb-5'>{teacherInfo.role}</div>
          <div className='lechturer'>Contact No. {teacherInfo.contact}</div>
          <div className='lechturer'>Email Id : {teacherInfo.email}</div>
        </div>
        <div className='col-sm-9'>
          <div className="page2-sec">
            {teacherInfo.subjects.map((subject) => (
              <div key={subject.id} className="row containerpage2 TPmarginbottom">
                <div className="container-fulid">
                  <div className="sec-1">
                    <div className="subject sub1">{subject.name}</div>
                    <div>
                      <select className="selectbranch sub2">
                        <option value="">Select Branch</option>
                        {subject.branches.map((branch, index) => (
                          <option key={index} value={branch}>{branch}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="sec-2">
                    <div>
                      <select className="selectsemester sub3 divselectsem">
                        <option value="">Select Semester</option>
                        {subject.semesters.map((semester, index) => (
                          <option key={index} value={semester}>{semester}</option>
                        ))}
                      </select>
                    </div>
                    <div className='divtakeattend'>
                      <button type="button" className="btn buttonTeacherPro sub4">Take Attendance</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;