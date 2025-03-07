import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function TeacherRegister() {

  return (
    <>


      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="regcontainerstd px-3 py-4 mt-0">

              <div className='regicon '>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h4 className="regstdheading ">Teacher Registration</h4>
              <div className="row">
                
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <input type="text"
                    placeholder="Enter you name"
                    className="form-control rounded-5 mt-4 ps-4" />



                  <input type="email"
                    placeholder="Email.."
                    className="form-control rounded-5 mt-4 ps-4" />


                  <select name="branches" className="form-control rounded-5 mt-4 ps-4">
                    <option value="branches" >Branches</option>
                    <option value="non-technical branches">Non-technical branches</option>
                    <option value="technical branches">Technical branches</option>
                  </select>
                  <input type="number"
                    placeholder="Contact no."
                    className="form-control rounded-5 mt-4 ps-4" />
                
                
                  <input type="password"
                    placeholder="Password"
                    className="form-control rounded-5 mt-4 ps-4" />

                  <input type="password"
                    placeholder="Confirm-Password"
                    className="form-control rounded-5 mt-4 ps-4" />

                  <input type="file"
                    placeholder="upload you photo"
                    className="mt-3 ps-2" />
                
                <div className="text-centre mt-2 pt-2 ">
                  <button type="button" class="btn btn-outline-dark">Submit</button>
                </div>
              </div>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>

          <div className="col-sm-2"></div>
        </div >
      </div>
      
    
    </>
   )

}

export default TeacherRegister

