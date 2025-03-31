import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Page3() {
  return (
    <>
      <div
        className="container-fluid page3background"
        // style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          backgroundImage: "url('/photospage123/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "100vh", // Full viewport height
          color: "white" // Ensures text is readable on the background
        }}
      >
        <p>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </p>
        Technology is just a tool. In term of getting the kids working together
        and motiveting them, the teacher is the most important thing.
        <h5 className="pt-4">-Bill Gates</h5>
      </div>
    </>
  );
}

export default Page3;
