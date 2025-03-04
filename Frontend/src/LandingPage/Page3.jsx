
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
const ResourceCards = () => {
  const resources = [
    {
      title: "Quick Attendance Management Features",
      description:
        "Pocket HRMS gives you & your employees the best experience through our attendance management system.",
      imgSrc:
        "https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/What-is-an-attendence-manangemnt-system.png",
      buttonText: "Check out other videos",
    },
    {
      title: "AI-Based Attendance System Guide and Overview",
      description:
        "The Revolutionize attendance tracking with Pocket HRMS’ AI-powered Attendance Management System.",
      imgSrc:
        "https://www.pockethrms.com/wp-content/uploads/2020/08/AI-based-Smart-Attendance-System-Blog-Banner-scaled.webp",
      buttonText: "Read More",
    },
    {
      title: "Pocket HRMS Attendance Management Solution limited",
      description:
        "Attendance & time tracking is the most crucial aspect for optimum employee management since it forms.",
      imgSrc:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?cs=srgb&dl=pexels-olly-3756679.jpg&fm=jpg",
      buttonText: "Read More",
    },
  ];

  return (

    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <h2 className="text-center mb-4" style={{ color: "#004080" }}>
        Resources for HR and People leaders
      </h2>
      <div className="container">
        <div className="row justify-content-center">
          {resources.map((resource, index) => (
            <div key={index} className="col-md-3 d-flex align-items-stretch">
              <div className="card shadow-sm p-3 mb-4 d-flex flex-column text-center">
                <h5
                  className="card-title mt-3 mb-3"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "#00264d",
                  }}
                >
                  {resource.title}
                </h5>
                <div className="position-relative d-flex justify-content-center">
                  <img
                    src={resource.imgSrc}
                    className="card-img-top"
                    alt={resource.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div
                  className="card-body d-flex flex-column flex-grow-1"
                  style={{ fontSize: "14px", color: "#00264d" }}
                >
                  <p className="card-text flex-grow-1">
                    {resource.description}
                  </p>
                  <a
                    href="#"
                    className="btn mt-auto"
                    style={{ backgroundColor: "#00264d", color: "#ffffff" }}
                  >
                    {resource.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
    <>
    <div className='page3background'>
      <p><FontAwesomeIcon icon={faQuoteLeft} /></p>
      Technology is just a tool. In term of getting the kids working together and motiveting them,
         the teacher is the most important thing.
         <h5 className='pt-4'>-Bill Gates</h5>
    </div>
    </>
  )
}
>>>>>>> 60a837438fc9173cb36267d1eee1bacdae2cff05

export default ResourceCards;
