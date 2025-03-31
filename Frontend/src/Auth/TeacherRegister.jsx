import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function TeacherRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      branch: branch,
      number: number,
    };
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:8000/teachers/register",
        formData,
       { headers: { 'Content-Type': 'application/json' }}
      );
      console.log("Response:", response.data);
      alert("Registration successful!");
      navigate("/login/teacher");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message); // Shows "Email already exists"
      } else {
        console.log(error)
        alert("Something went wrong. Please try again.");
      }
    }
  };
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="regcontainerstd px-3 py-4 mt-0">
              <div className="regicon ">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h4 className="regstdheading ">Teacher Registration</h4>
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter you first name"
                    className="form-control rounded-5 mt-4 ps-4"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Enter you last name"
                    className="form-control rounded-5 mt-4 ps-4"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />

                  <input
                    type="email"
                    placeholder="Email.."
                    className="form-control rounded-5 mt-4 ps-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <select
                    name="branches"
                    className="form-control rounded-5 mt-4 ps-4"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    <option value="branches">Branches</option>
                    <option value="Non-technical branches">
                      Non-technical branches
                    </option>
                    <option value="Technical branches">
                      Technical branches
                    </option>
                  </select>
                  <input
                    type="number"
                    placeholder="Contact no."
                    className="form-control rounded-5 mt-4 ps-4"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-5 mt-4 ps-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {/* <input
                    type="file"
                    placeholder="upload you photo"
                    className="mt-3 ps-2"
                  /> */}

                  <div className="text-centre mt-2 pt-2 ">
                    <button type="submit" className="btn btn-outline-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <div className="col-sm-1"></div>
            </div>
          </div>

          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
}

export default TeacherRegister;
