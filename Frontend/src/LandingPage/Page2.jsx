import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUser,
  faSchool,
  faUserTie,
  faCalendarDay,
  faStar,
  faLaptopCode,
  faHandHoldingHand,
} from "@fortawesome/free-solid-svg-icons";

function Page2() {
  return (
    <>
      <div className="row containerpage2">
        <div className="container-fulid">
          <div className="bg1">
            <div className="icon1">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            Student Register{" "}
          </div>
          <div className="bg2">
            <div className="icon2">
              <FontAwesomeIcon icon={faUser} />
            </div>
            Teacher Register
          </div>
          <div className="bg3">
            <div className="icon3">
              <FontAwesomeIcon icon={faSchool} />
            </div>
            Student Login
          </div>
          <div className="box bg4">
            <div className="icon4">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            Teacher Login
          </div>
        </div>
      </div>
      <div className="row containerpage2 pb-5">
        <div className="container-fulid">
          <div className="bg1">
            <div className="icon1">
              <FontAwesomeIcon icon={faCalendarDay} />
            </div>
            Schedule
          </div>
          <div className="bg2">
            <div className="icon2">
              <FontAwesomeIcon icon={faStar} />
            </div>
            Review
          </div>
          <div className="bg3">
            <div className="icon3">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            About Developers
          </div>
          <div className="bg4">
            <div className="icon4">
              <FontAwesomeIcon icon={faHandHoldingHand} />
            </div>
            Help & Support
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2;
