import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page1() {

  const backgroundStyle = {
    backgroundImage: `url('/photospage123/background.png')`, // Update the path based on your file structure
    backgroundSize: 'cover', // Adjust this to fit the image as desired
    backgroundPosition: 'center',
    height: '100vh', // Full viewport height
    width: '100%',   // Full width
  };

  return (
    <>
    <div className="container-fluid bg py-5 px-5 heropage" style={backgroundStyle} >
        <div class="row my-0">
              <div className="col-sm-6 text-center">
                  <h2 className='heading'>Welcome to Our Attendance Management System</h2>
                  <p className="subheading">Effortlessly track teacher and student attendance with our automated system. Save time, reduce errors, and enhance the academic experience.</p>
              </div>
                <div className='col-sm-6'>
                  <img src="photospage123\girltakinglaptop.png" className="card-img photo" alt="..." height="80%" width="35%"/>
                </div>
        </div>
    </div>
    </>
  )
}

export default Page1
