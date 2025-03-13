import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    name: "Mitul Golakiya",
    position: "CEO",
    company: "Infyom Technologies",
    feedback:
      "All in one Communication tool you need. We are not able to think of any other tool once we moved to UBS. It made our day-to-day communications and project management so easy.",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    bgColor: "#fdeedc",
  },
  {
    name: "Alpesh Gediya",
    position: "Chapter Lead",
    company: "Telstra India",
    feedback:
      "I absolutely love how innovative and efficient this software has been. With a number of changes and upgrades coming our way, it has been a pleasure to understand and use this software.",
    imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
    bgColor: "#dceefb",
  },
  {
    name: "Krunal Vaghasiya",
    position: "CEO",
    company: "Tatvam Cloud Solutions",
    feedback:
      "I think UBS is an exciting platform with a company that has forward-thinking and built around objectives. We have been using it for the last three months for our project management, and productivity has definitely been on a surge to growth.",
    imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    bgColor: "#f8d7da",
  },
  {
    name: "Jane Doe",
    position: "Manager",
    company: "Tech Solutions",
    feedback:
      "UBS has been a game-changer for our team. It has streamlined our processes and improved efficiency significantly.",
    imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    bgColor: "#fdeedc",
  },
  {
    name: "John Smith",
    position: "CTO",
    company: "Innovatech",
    feedback:
      "Using UBS has simplified our workflow, making collaboration seamless and effective.",
    imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    bgColor: "#dceefb",
  },
  {
    name: "Emily Johnson",
    position: "Project Lead",
    company: "CloudNet",
    feedback:
      "UBS provided us with a structured and efficient approach to project management. Highly recommended!",
    imgSrc: "https://randomuser.me/api/portraits/women/6.jpg",
    bgColor: "#f8d7da",
  },
];

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Responsive adjustments
  React.useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 992) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex + 1) % (testimonials.length - (visibleCards - 1))
    );
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + (testimonials.length - (visibleCards - 1))) %
        (testimonials.length - (visibleCards - 1))
    );
  };

  return (
    <div className="container py-5" style={{ maxWidth: "1300px" }}>
      <h2 className="text-center mb-3">What Our Clients Say</h2>
      <p
        className="p3"
        id="p3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          color: "#888",
        }}
      >
        We Are Glad To Be A Reason For The Smiles We Put On Our Client’s Faces.
      </p>
      <div
        className="d-flex justify-content-center overflow-hidden position-relative"
        style={{ maxWidth: "100%" }}
      >
        <div
          className="d-flex"
          style={{
            transition: "transform 0.5s ease",
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
            width: `${(testimonials.length / visibleCards) * 100}%`,
            gap: "1.5rem",
          }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="p-3"
              style={{
                minWidth: `${100 / visibleCards}%`,
                flex: `0 0 ${100 / visibleCards}%`,
              }}
            >
              <div
                className="card p-3 d-flex flex-column align-items-center text-center"
                style={{
                  backgroundColor: testimonial.bgColor,
                  height: "100%",
                  display: "flex",
                }}
              >
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  width="60"
                  height="60"
                />
                <h5 className="mb-1">{testimonial.name}</h5>
                <small className="text-muted mb-2">
                  {testimonial.company} | {testimonial.position}
                </small>
                <p className="mb-0 flex-grow-1">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="position-absolute start-0 translate-middle-y btn btn-light"
          style={{ top: "50%", color: "black", zIndex: 10, left: "10px" }}
          onClick={prevSlide}
        >
          &#9664;
        </button>
        <button
          className="position-absolute end-0 translate-middle-y btn btn-light"
          style={{ top: "50%", color: "black", zIndex: 10, right: "10px" }}
          onClick={nextSlide}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
