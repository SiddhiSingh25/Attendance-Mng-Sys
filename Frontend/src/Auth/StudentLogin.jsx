import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';


function StudentLogin() {

  return (
    <>

      <section>
        <div className="container-fluid stdlogincontainer ">
          <div className="row">
             <div className="col-sm-2"></div>
            <div className="col-sm-8">

              <div className="subcontainerstd px-3 py-4 ">
                <div className="icon mt-5 text-primary">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h4 className="formstdheading ">Student login</h4>
                <div className='row'>
                  <div className='col-sm-1'></div>
                  <div className='col-sm-10'>
                  <input type="email"
                  placeholder="Email....."
                  className="form-control rounded-5 mt-4"/>
                <input type="password"
                  placeholder="************"
                  className="form-control rounded-5 mt-4"
                            />
                <input type="checkbox" className="check mt-3"/>Remember me
                              
                  
                    <div className="text-centre mt-2 pt-2 ">
                    <button type="button" class="btn btn-outline-primary">Student Login</button>
                  </div>
                  <div className='col-sm-1'></div>
                
                </div>
                
              </div>
            </div>
          </div>
        </div>
      
      <div className="col-sm-2"></div> 
    </div>
    </section >

    </>
  )

}

export default StudentLogin
