import React from "react";
function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="footer-container">
          <div className="icon-sec">
            <i
              class="fa-brands fa-facebook"
              style={{ color: "white", fontSize: "3rem" }}
            ></i>
            <i
              class="fa-brands fa-instagram"
              id="icon"
              style={{ color: "white", fontSize: "3rem" }}
            ></i>
            <i
              class="fa-brands fa-linkedin"
              style={{ color: "white", fontSize: "3rem" }}
            ></i>
            <i
              class="fa-brands fa-youtube"
              style={{ color: "white", fontSize: "3rem" }}
            ></i>
            <i
              class="fa-brands fa-google "
              style={{ color: "white", fontSize: "3rem" }}
            ></i>
          </div>
          <div className="content-sec">
            <p>Home</p>
            <p>News</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Our Team</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
