import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faUser, faSchool, faUserTie, faCalendarDay, faStar, faLaptopCode, faHandHoldingHand } from '@fortawesome/free-solid-svg-icons'


function Page2() {

  return (
    <>
    <div className='container-fluid pt-5 px-5'>
      <div className='row '>
        <div className='col-sm-2 text-center bg1'>
            <div className='icon1'>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div>Student Register</div>
        </div>
        <div className='col-sm-2 text-center bg2'>
            <div className='icon2'>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>Teacher Register</div>
        </div>
        <div className='col-sm-2 text-center bg3'>
            <div className='icon3'>
              <FontAwesomeIcon icon={faSchool} />
            </div>
            <div>Student Login</div>
        </div>
        <div className='col-sm-2 text-center bg4'>
            <div className='icon4'>
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <div>Teacher Login</div>
        </div>
      </div>
      <div className='row '>
      <div className='col-sm-2 text-center bg4'>
            <div className='icon4'>
              <FontAwesomeIcon icon={faCalendarDay} />
            </div>
            <div>Schedule</div>
        </div>
        <div className='col-sm-2 text-center bg3'>
            <div className='icon3'>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>Review</div>
        </div>
        <div className='col-sm-2 text-center bg2'>
            <div className='icon2'>
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <div>About Developers</div>
        </div>
        <div className='col-sm-2 text-center bg1'>
            <div className='icon1'>
              <FontAwesomeIcon icon={faHandHoldingHand} />
            </div>
            <div>Help & Support</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page2
