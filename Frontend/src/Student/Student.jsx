import AttendanceDashboard from './AttendanceDashboard';
import StudentAttendByDay from './StudentAttendByDay';
import StudentAttendByMonth from './StudentAttendByMonth';
import StudentPerDayAttend from './StudentPerDayAttend';
import StudentProfile from './StudentProfile';

function Student() {

    return(
        <>
            <AttendanceDashboard/>
            <StudentAttendByDay/>
            <StudentAttendByMonth/>
            <StudentPerDayAttend/>
            <StudentProfile/>
        </>
    )
}

export default Student;