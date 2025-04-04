// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const testimonials = [
//   {
//     name: "Mitul Golakiya",
//     position: "CEO",
//     company: "Infyom Technologies",
//     feedback:
//       "All in one Communication tool you need. We are not able to think of any other tool once we moved to UBS. It made our day-to-day communications and project management so easy.",
//     imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
//     bgColor: "#fdeedc",
//   },
//   {
//     name: "Alpesh Gediya",
//     position: "Chapter Lead",
//     company: "Telstra India",
//     feedback:
//       "I absolutely love how innovative and efficient this software has been. With a number of changes and upgrades coming our way, it has been a pleasure to understand and use this software.",
//     imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
//     bgColor: "#dceefb",
//   },
//   {
//     name: "Krunal Vaghasiya",
//     position: "CEO",
//     company: "Tatvam Cloud Solutions",
//     feedback:
//       "I think UBS is an exciting platform with a company that has forward-thinking and built around objectives. We have been using it for the last three months for our project management, and productivity has definitely been on a surge to growth.",
//     imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
//     bgColor: "#f8d7da",
//   },
//   {
//     name: "Jane Doe",
//     position: "Manager",
//     company: "Tech Solutions",
//     feedback:
//       "UBS has been a game-changer for our team. It has streamlined our processes and improved efficiency significantly.",
//     imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
//     bgColor: "#fdeedc",
//   },
//   {
//     name: "John Smith",
//     position: "CTO",
//     company: "Innovatech",
//     feedback:
//       "Using UBS has simplified our workflow, making collaboration seamless and effective.",
//     imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
//     bgColor: "#dceefb",
//   },
//   {
//     name: "Emily Johnson",
//     position: "Project Lead",
//     company: "CloudNet",
//     feedback:
//       "UBS provided us with a structured and efficient approach to project management. Highly recommended!",
//     imgSrc: "https://randomuser.me/api/portraits/women/6.jpg",
//     bgColor: "#f8d7da",
//   },
// ];

// const TestimonialsSlider = () => {
//   const [index, setIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(3);

//   // Responsive adjustments
//   React.useEffect(() => {
//     const updateVisibleCards = () => {
//       if (window.innerWidth <= 768) {
//         setVisibleCards(1);
//       } else if (window.innerWidth <= 992) {
//         setVisibleCards(2);
//       } else {
//         setVisibleCards(3);
//       }
//     };

//     updateVisibleCards();
//     window.addEventListener("resize", updateVisibleCards);
//     return () => window.removeEventListener("resize", updateVisibleCards);
//   }, []);

//   const nextSlide = () => {
//     setIndex(
//       (prevIndex) =>
//         (prevIndex + 1) % (testimonials.length - (visibleCards - 1))
//     );
//   };

//   const prevSlide = () => {
//     setIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + (testimonials.length - (visibleCards - 1))) %
//         (testimonials.length - (visibleCards - 1))
//     );
//   };

//   return (
//     <div className="container py-5" style={{ maxWidth: "1300px" }}>
//       <h2 className="text-center mb-3">What Our Clients Say</h2>
//       <p
//         className="p3"
//         id="p3"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: "1.5rem",
//           color: "#888",
//         }}
//       >
//         We Are Glad To Be A Reason For The Smiles We Put On Our Client’s Faces.
//       </p>
//       <div
//         className="d-flex justify-content-center overflow-hidden position-relative"
//         style={{ maxWidth: "100%" }}
//       >
//         <div
//           className="d-flex"
//           style={{
//             transition: "transform 0.5s ease",
//             transform: `translateX(-${index * (100 / visibleCards)}%)`,
//             width: `${(testimonials.length / visibleCards) * 100}%`,
//             gap: "1.5rem",
//           }}
//         >
//           {testimonials.map((testimonial, i) => (
//             <div
//               key={i}
//               className="p-3"
//               style={{
//                 minWidth: `${100 / visibleCards}%`,
//                 flex: `0 0 ${100 / visibleCards}%`,
//               }}
//             >
//               <div
//                 className="card p-3 d-flex flex-column align-items-center text-center"
//                 style={{
//                   backgroundColor: testimonial.bgColor,
//                   height: "100%",
//                   display: "flex",
//                 }}
//               >
//                 <img
//                   src={testimonial.imgSrc}
//                   alt={testimonial.name}
//                   className="rounded-circle mb-3"
//                   width="60"
//                   height="60"
//                 />
//                 <h5 className="mb-1">{testimonial.name}</h5>
//                 <small className="text-muted mb-2">
//                   {testimonial.company} | {testimonial.position}
//                 </small>
//                 <p className="mb-0 flex-grow-1">{testimonial.feedback}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           className="position-absolute start-0 translate-middle-y btn btn-light"
//           style={{ top: "50%", color: "black", zIndex: 10, left: "10px" }}
//           onClick={prevSlide}
//         >
//           &#9664;
//         </button>
//         <button
//           className="position-absolute end-0 translate-middle-y btn btn-light"
//           style={{ top: "50%", color: "black", zIndex: 10, right: "10px" }}
//           onClick={nextSlide}
//         >
//           &#9654;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSlider;



import React from "react";

const Timetable = () => {
  return (
    <div className="p-4 timetable-container ">
      <h2 className="text-xl font-bold mb-4 text-center">GGP, Ballia - Time Table (Even Sem 2024-25)</h2>
      <div className="overflow-x-auto row1-time">
        <table className="table-auto border-collapse border border-gray-500 w-full">
          <thead>
            <tr className="bg-gray-200 col1-days">
              <th className="border border-gray-500 px-4 py-2">Day</th>
              <th className="border border-gray-500 px-4 py-2">Branch</th>
              <th className="border border-gray-500 px-4 py-2">10:00 AM - 10:50 AM | 10:50 AM - 11:40 AM</th>
              
              <th className="border border-gray-500 px-4 py-2">11:40 AM - 12:30 PM | 12:30 PM - 1:20 PM</th>
              
              <th className="border border-gray-500 px-4 py-2">1:20 PM - 1:40 PM </th>
              <th className="border border-gray-500 px-4 py-2">1:40 PM - 2:30 PM| 2:30 PM - 3:20 PM</th>
              
              <th className="border border-gray-500 px-4 py-2">3:20 PM - 4:10 PM | 4:00 PM - 5:00 PM</th>
            </tr>
          </thead>
          <tbody>
          <tr>
               <td className="border border-gray-500 px-4 py-2 days tablehover" rowSpan="6">MONDAY</td>
              <td className="border border-gray-500 px-4 py-2">EX-2</td>
              <td className="border border-gray-500 px-4 py-2">CS-II (TH) RH </td>
               <td className="border border-gray-500 px-4 py-2">NFTL(TH) IP</td>
              <td className="border border-gray-500 px-4 py-2" rowspan="18">LUNCH</td>
              <td className="border border-gray-500 px-4 py-2">IET(Lab) nm</td>
              <td className="border border-gray-500 px-4 py-2">PCE (TH) AK</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-2</td>
              <td className="border border-gray-500 px-4 py-2">OS(TH) JAK</td>
              <td className="border border-gray-500 px-4 py-2">ECDM(Lab) ST</td> 
              <td className="border border-gray-500 px-4 py-2">DBMS(lab) VKV</td>
              <td className="border border-gray-500 px-4 py-2">UHV(Lab) RH | SCA</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">EX-F</td>
              <td className="border border-gray-500 px-4 py-2">µController & ES (TH) NM</td>
              <td className="border border-gray-500 px-4 py-2">Wireless & Mobile CS(TH) AK</td>
              
              <td className="border border-gray-500 px-4 py-2">µwave Engg(Lab) IP</td>
              <td className="border border-gray-500 px-4 py-2">SCA</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-F</td>
              <td className="border border-gray-500 px-4 py-2">Big data(lab) VK</td>
              <td className="border border-gray-500 px-4 py-2">Android (TH) SM</td>
              
              <td className="border border-gray-500 px-4 py-2">SCA</td>
              <td className="border border-gray-500 px-4 py-2">Android (lab) SM</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-1</td>
              <td className="border border-gray-500 px-4 py-2">OS(TH) JAK</td>
              <td className="border border-gray-500 px-4 py-2">WDT(Lab) AK</td>
             
              <td className="border border-gray-500 px-4 py-2">DBMS(Lab) VKV</td>
              <td className="border border-gray-500 px-4 py-2">DS Using Python(Lab) VK</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-F</td>
              <td className="border border-gray-500 px-4 py-2">Big Data(Lab) vk</td>
              <td className="border border-gray-500 px-4 py-2">LIB</td>
             
              <td className="border border-gray-500 px-4 py-2">ISISTL(TH) as</td>
              <td className="border border-gray-500 px-4 py-2">EVS(TH) PY | LIB</td>
            </tr>

            <tr>
              <td className="border border-gray-500 px-4 py-2 days" rowSpan="6"> TUESDAY</td>
              <td className="border border-gray-500 px-4 py-2">EX-2</td>
              <td className="border border-gray-500 px-4 py-2">IET(TH) NM</td>
               <td className="border border-gray-500 px-4 py-2">EIM(Lab) AK</td>
              <td className="border border-gray-500 px-4 py-2">PCE(Lab) AK</td>
              <td className="border border-gray-500 px-4 py-2">EC(Lab) AR</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-2</td>
              <td className="border border-gray-500 px-4 py-2">OOP Using java () STHMY</td>
              <td className="border border-gray-500 px-4 py-2">DBMS(TH) VK</td>
              <td className="border border-gray-500 px-4 py-2">CS-II(TH) RH</td>
              <td className="border border-gray-500 px-4 py-2">OS(LAB) JAK</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">EX-F</td>
              <td className="border border-gray-500 px-4 py-2">Wireless & Mobile CS(LAB) AK</td>
              <td className="border border-gray-500 px-4 py-2">Control System(TH) IP</td>
              <td className="border border-gray-500 px-4 py-2">µController & ES (TH) NM</td>
              <td className="border border-gray-500 px-4 py-2">µwave Engg(Lab) IP</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-F</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(TH) ST </td>
              <td className="border border-gray-500 px-4 py-2">Big data(Lab) VK</td>
              <td className="border border-gray-500 px-4 py-2">Android (Lab) SM</td>
              <td className="border border-gray-500 px-4 py-2">IMED(TH)AS</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-1</td>
              <td className="border border-gray-500 px-4 py-2">WDT(TH) AS </td>
              <td className="border border-gray-500 px-4 py-2">DBMS(TH) VKV</td>
              <td className="border border-gray-500 px-4 py-2">SE(TH) AR</td>
              <td className="border border-gray-500 px-4 py-2">OS(Lab) JAK </td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-F</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(lab) ST</td>
              <td className="border border-gray-500 px-4 py-2"> Big Data(Lab) VKV</td>
              <td className="border border-gray-500 px-4 py-2">ISITL(Lab) AS</td>
              <td className="border border-gray-500 px-4 py-2">SCA</td>
            </tr>

            <tr>
              <td className="border border-gray-500 px-4 py-2 days" rowSpan="6">WEDNESDAY</td>
              <td className="border border-gray-500 px-4 py-2">EX-2</td>
              <td className="border border-gray-500 px-4 py-2">CS-II (Lab) RH</td>
               <td className="border border-gray-500 px-4 py-2">SCA (Principal sir)</td>
              <td className="border border-gray-500 px-4 py-2">EIM(Lab) AK</td>
              <td className="border border-gray-500 px-4 py-2">EC(TH) AR | SCA(Principal sir)</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-2</td>
              <td className="border border-gray-500 px-4 py-2">OOP Using java lab (SM)</td>
              <td className="border border-gray-500 px-4 py-2">DBMS(lab) VKV | EC(TH) AR</td>
              <td className="border border-gray-500 px-4 py-2">OOP Using java lab (SM)</td>
              <td className="border border-gray-500 px-4 py-2">CS-II (Lab) RH</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">EX-F</td>
              <td className="border border-gray-500 px-4 py-2">Wireless & Mobile CS(LAB) AK </td>
              <td className="border border-gray-500 px-4 py-2">µController & ES (TH) NM</td>
              <td className="border border-gray-500 px-4 py-2" colspan="2">PROJECT(LAB)  NM</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-F</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(lab) ST</td>
              <td className="border border-gray-500 px-4 py-2"> Big data(lab) VK</td>
              <td className="border border-gray-500 px-4 py-2">PROJECT(LAB) VKV</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-1</td>
              <td className="border border-gray-500 px-4 py-2">SE(Lab) AR</td>
              <td className="border border-gray-500 px-4 py-2">DBMS(TH) VKV | DS Using Python(TH) VKV</td>
              <td className="border border-gray-500 px-4 py-2">WDT(TH) AS</td>
              <td className="border border-gray-500 px-4 py-2">SCA</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-F</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(lab) ST</td>
              <td className="border border-gray-500 px-4 py-2">Big Data(Lab) vk</td>
              <td className="border border-gray-500 px-4 py-2" colspan="2" >PROJECT (LAB) VKV</td>
            </tr>

            <tr>
              <td className="border border-gray-500 px-4 py-2 days" rowSpan="6">Thursday</td>
              <td className="border border-gray-500 px-4 py-2">EX-2</td>
              <td className="border border-gray-500 px-4 py-2">PCE (TH) AK</td>
               <td className="border border-gray-500 px-4 py-2">CS-II (TH) RH</td>
              <td className="border border-gray-500 px-4 py-2" rowspan="36">LUNCH</td>
              <td className="border border-gray-500 px-4 py-2">NFTL(TH) IP</td>
              <td className="border border-gray-500 px-4 py-2">SCA (Principal sir)</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-2</td>
              <td className="border border-gray-500 px-4 py-2">CS-II (TH) RH</td>
              <td className="border border-gray-500 px-4 py-2">OOP Using java lab (SM)</td>
              {/* <td className="border border-gray-500 px-4 py-2" >LUNCH</td> */}
              <td className="border border-gray-500 px-4 py-2">DBMS(lab) VKV</td>
              <td className="border border-gray-500 px-4 py-2">EC(LAB) AR</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">EX-F</td>
              <td className="border border-gray-500 px-4 py-2">\u00b5Controller & ES (TH) NM</td>
              <td className="border border-gray-500 px-4 py-2">Control system(LAB)</td>
              {/* <td className="border border-gray-500 px-4 py-2" >LUNCH</td> */}
              <td className="border border-gray-500 px-4 py-2">\u00b5Controller & ES (lab) NM</td>
              <td className="border border-gray-500 px-4 py-2">Wireless & Mobile CS(LAB) AK</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-F</td>
              <td className="border border-gray-500 px-4 py-2">Big data(lab) VK</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(lab) ST</td>
              {/* <td className="border border-gray-500 px-4 py-2" >LUNCH</td> */}
              <td className="border border-gray-500 px-4 py-2">Android (lab) SM</td>
              <td className="border border-gray-500 px-4 py-2">IMED(TH)  AS | SCA</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-1</td>
              <td className="border border-gray-500 px-4 py-2">OS(Lab) JAK | DBMS(Lab) VKV</td>
              <td className="border border-gray-500 px-4 py-2">LIB</td>
              {/* <td className="border border-gray-500 px-4 py-2" >LUNCH</td> */}
              <td className="border border-gray-500 px-4 py-2">DBMS(Lab) VKV</td>
              <td className="border border-gray-500 px-4 py-2">DS Using Python(Lab) VK</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-F</td>
              <td className="border border-gray-500 px-4 py-2">Big Data(Lab) vk</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(lab) ST</td>
              {/* <td className="border border-gray-500 px-4 py-2" >LUNCH</td> */}
              <td className="border border-gray-500 px-4 py-2">ISISTL(TH) as</td>
              <td className="border border-gray-500 px-4 py-2">EVS(TH) PV | LIB</td>
            </tr>

            <tr>
              <td className="border border-gray-500 px-4 py-2 days" rowSpan="6">Friday</td>
              <td className="border border-gray-500 px-4 py-2">EX-2</td>
              <td className="border border-gray-500 px-4 py-2">IET(TH) NM</td>
               <td className="border border-gray-500 px-4 py-2">EIM(Lab) AK</td>
              <td className="border border-gray-500 px-4 py-2">NFTL(TH) IP</td>
              <td className="border border-gray-500 px-4 py-2">EC(TH) AR</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-2</td>
              <td className="border border-gray-500 px-4 py-2">OS(TH) JAK</td>
              <td className="border border-gray-500 px-4 py-2">OOP Using java (Lab) SMY</td>
              <td className="border border-gray-500 px-4 py-2">ECDM(Lab) ST</td>
              <td className="border border-gray-500 px-4 py-2">OS(LAB) JAK</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">EX-F</td>
              <td className="border border-gray-500 px-4 py-2">Wireless & Mobile CS(LAB) AK</td>
              <td className="border border-gray-500 px-4 py-2">\u00b5waveEngg(TH) IP</td>
              <td className="border border-gray-500 px-5 py-2 " colspan="2">PROJECT(LAB) NM</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-F</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(lab) ST </td>
              <td className="border border-gray-500 px-4 py-2">Big data(lab) VK</td>
              <td className="border border-gray-500 px-5 py-2" colspan="2">PROJECT(LAB) VKV</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-1</td>
              <td className="border border-gray-500 px-4 py-2">OS(TH) JAK </td>
              <td className="border border-gray-500 px-4 py-2">SE(TH) AR</td>
              <td className="border border-gray-500 px-4 py-2">DS Using Python(LAB) VKV</td>
              <td className="border border-gray-500 px-4 py-2">OS(Lab) JAK </td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-F</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(lab) ST</td>
              <td className="border border-gray-500 px-4 py-2"> Big Data(Lab) vk</td>
              <td className="border border-gray-500 px-4 py-2"colspan="2">PROJECT(LAB) VKV</td>
            </tr>

            <tr>
              <td className="border border-gray-500 px-4 py-2 days" rowSpan="6">Saturday</td>
              <td className="border border-gray-500 px-4 py-2">EX-2</td>
              <td className="border border-gray-500 px-4 py-2">CS-II (Lab) RH</td>
               <td className="border border-gray-500 px-4 py-2">SCA (Principal sir)</td>
              <td className="border border-gray-500 px-4 py-2">EIM(Lab) AK</td>
              <td className="border border-gray-500 px-4 py-2">EC(TH) AR | SCA(Principal sir)</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-2</td>
              <td className="border border-gray-500 px-4 py-2">OOP Using java lab (SM)</td>
              <td className="border border-gray-500 px-4 py-2">DBMS(lab) VKV | EC(TH) AR</td>
              <td className="border border-gray-500 px-4 py-2">OOP Using java lab (SM)</td>
              <td className="border border-gray-500 px-4 py-2">CS-II (Lab) RH</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">EX-F</td>
              <td className="border border-gray-500 px-4 py-2">Wireless & Mobile CS(LAB) AK </td>
              <td className="border border-gray-500 px-4 py-2">\u00b5Controller & ES (TH) NM</td>
              <td className="border border-gray-500 px-4 py-2" colspan="2">PROJECT(LAB)  NM</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">IT-F</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(lab) ST</td>
              <td className="border border-gray-500 px-4 py-2"> Big data(lab) VK</td>
              <td className="border border-gray-500 px-4 py-2">PROJECT(LAB) VKV</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-1</td>
              <td className="border border-gray-500 px-4 py-2">SE(Lab) AR</td>
              <td className="border border-gray-500 px-4 py-2">DBMS(TH) VKV | DS Using Python(TH) VKV</td>
              <td className="border border-gray-500 px-4 py-2">WDT(TH) AS</td>
              <td className="border border-gray-500 px-4 py-2">SCA</td>
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">PG-F</td>
              <td className="border border-gray-500 px-4 py-2">Cloud computing(lab) ST</td>
              <td className="border border-gray-500 px-4 py-2">Big Data(Lab) vk</td>
              <td className="border border-gray-500 px-4 py-2" colspan="2" >PROJECT (LAB) VKV</td>
            </tr>
            {/* Add more rows for Friday and Saturday as per the timetable */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;