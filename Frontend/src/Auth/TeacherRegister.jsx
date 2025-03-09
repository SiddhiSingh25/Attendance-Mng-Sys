import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function TeacherRegister() {
<<<<<<< HEAD
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [number, setNumber] = useState("");
  return (
    <>
      <div className="container-fluid py-5">
=======
  return (
    <>
      <div className="container-fluid py-5" style={{ paddingTop: "3rem" }}>
>>>>>>> d3f3a75b4aa421a127a48bf63e64570989a306ef
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="regcontainerstd px-3 py-4 mt-0">
              <div className="regicon ">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h4 className="regstdheading ">Teacher Registration</h4>
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter you name"
                    className="form-control rounded-5 mt-4 ps-4"
                  />

                  <input
                    type="email"
                    placeholder="Email.."
                    className="form-control rounded-5 mt-4 ps-4"
                  />

                  <select
                    name="branches"
                    className="form-control rounded-5 mt-4 ps-4"
                  >
                    <option value="branches">Branches</option>
                    <option value="non-technical branches">
                      Non-technical branches
                    </option>
                    <option value="technical branches">
                      Technical branches
                    </option>
                  </select>
                  <input
                    type="number"
                    placeholder="Contact no."
                    className="form-control rounded-5 mt-4 ps-4"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-5 mt-4 ps-4"
                  />

                  <input
<<<<<<< HEAD
=======
                    type="password"
                    placeholder="Confirm-Password"
                    className="form-control rounded-5 mt-4 ps-4"
                  />

                  <input
>>>>>>> d3f3a75b4aa421a127a48bf63e64570989a306ef
                    type="file"
                    placeholder="upload you photo"
                    className="mt-3 ps-2"
                  />

                  <div className="text-centre mt-2 pt-2 ">
                    <button type="button" class="btn btn-outline-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
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
