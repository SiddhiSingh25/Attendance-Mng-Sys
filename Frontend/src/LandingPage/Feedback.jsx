import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFaceFrownOpen,
    faFaceGrinHearts,
    faFaceLaugh,
    faFaceSmile,
} 
from "@fortawesome/free-solid-svg-icons";
function Feedback() {
    return (
      <>
        <div className="container-fluid container-feed">
            <div className="col-sm-7 p-auto m-auto">
            <div className="subcontainer-feed">
                <div className="row feed mb-5"><h4>FeedBack</h4></div>
                <div className="row m-auto">
                    <div className="col-sm-12 mlemoji">
                        <div className="emoji">
                            <FontAwesomeIcon icon={faFaceFrownOpen} />
                        </div>
                        <div className="emoji">
                                <FontAwesomeIcon icon={faFaceSmile} />
                        </div>
                        <div className="emoji">
                            <FontAwesomeIcon icon={faFaceLaugh} />
                        </div>
                        <div className="emoji">
                            <FontAwesomeIcon icon={faFaceGrinHearts} />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <input type="text" placeholder="Username" className="inputbox inputhover"></input>
                        <input type="email" placeholder="Email" className="inputbox inputhover"></input>
                        <textarea placeholder="Your Opinion Here..."  className="inputbox inputhover pt-1"/>
                        <div className="row inputbox inputhover pt-2 uploadpro">
                            <div>Upload Profile< input type="file"/></div>
                            </div>
                        <input type="button" value="Submit" className="inputbox buttonfeed"/>
                    </div>
                </div>
            </div>
            </div>            
        </div>
    </>
)
}
export default Feedback;