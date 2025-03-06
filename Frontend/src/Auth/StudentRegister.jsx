import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function StudentRegister() {

  return (
    <>

      
      <div className="container-fluid py-5 ">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="regcontainerstd px-3 py-4mt-5">

              <div className='regicon mt-5 '>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h4 className="regstdheading ">Student registration</h4>
              <div className="row">
                <div className="col-sm-1"></div>
                 <div className="col-sm-10">
                  <input type="text"
                    placeholder="Enter you name"
                    className="form-control rounded-5 mt-3" />

                  <input type="text"
                    placeholder="Year/Semester"
                    className="form-control rounded-5 mt-3" />

                    <input type="email"
                    placeholder="Email.."
                    className="form-control rounded-5 mt-3" />

                  <input type="text"
                    placeholder="Branch"
                    className="form-control rounded-5 mt-3" />

                    <input type="number"
                    placeholder="Contact no."
                    className="form-control rounded-5 mt-3" />

                  <input type="password"
                    placeholder="Password"
                    className="form-control rounded-5 mt-3" />

                    <input type="password"
                    placeholder="Confirm-Password"
                    className="form-control rounded-5 mt-3" />

                    <input type="file"
                    placeholder="upload you photo"
                    className="mt-3"/>
                     <div className="text-centre mt-2 pt-2 ">
                    <button type="button" class="btn btn-outline-dark">Student Login</button>
                  </div>
                </div> 
                <div className="col-sm-1"></div>
              </div>
            </div>

            <div className="col-sm-2"></div>
          </div >
        </div>
      </div>
    </>
   )

}

      export default StudentRegister
