import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentLogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/users/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Sucessfully loged in");
      navigate("/studentdashboard");
    } catch (error) {
      console.log(error);
      alert("Login failed:", error.response?.data || error.message);
    }
  };
  return (
    <>
      <section>
        <div className="container-fluid stdlogincontainer ">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="subcontainerstd px-3 py-3 ">
                <div className="icon mt-3 text-primary">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h4 className="formstdheading ">Student Login</h4>
                <form onSubmit={handleSubmit} className="row">
                  <div className="col-sm-1"></div>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      placeholder="Email....."
                      className="form-control rounded-5 mt-4 ps-4"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="************"
                      className="form-control rounded-5 mt-4 ps-4"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="checkbox" className="check mt-4" />
                    Remember me
                    <div className="text-centre mt-2 pt-2 ">
                      <button type="submit" class="btn btn-outline-primary">
                        Student Login
                      </button>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-sm-2"></div>
        </div>
      </section>
    </>
  );
}

export default StudentLogin;
