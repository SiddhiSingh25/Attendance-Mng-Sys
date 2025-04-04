import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TeacherLogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();

    const formData = {
      email : email,
      password : password
    };

    try {
      const response = await axios.post("http://localhost:8000/teachers/login", 
        formData,
      {
        headers : {'Content-Type' : "application/json"}
      } )
      console.log(response)
      alert("Login sucessfully")
      navigate("/teacherdashboard")
    } catch (error) {
      console.log(error)
      alert(" login Failed")
    }

  }
  return (
    <>
      <section>
        <div
          className="container-fluid stdlogincontainer "
          style={{ paddingBottom: "2rem", paddingTop: "3rem" }}
        >
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="subcontainerstd px-3 py-4 ">
                <div className="icon mt-5 text-primary">
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <h4 className="formstdheading ">Teacher login</h4>
                <div className="row">
                  <div className="col-sm-1"></div>
                  <form className="col-sm-10" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="Enter your Email-ID"
                      className="form-control rounded-5 mt-4 ps-4"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="************"
                      className="form-control rounded-5  mt-4 ps-4"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <input type="checkbox" className="check mt-4" />
                    Remember me
                    <div className="text-centre mt-2 pt-2 ">
                      <button type="submit" className="btn btn-outline-primary">
                        Teacher Login
                      </button>
                    </div>
                    <div className="col-sm-1"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-2"></div>
        </div>
      </section>
    </>
  );
}

export default TeacherLogin;
