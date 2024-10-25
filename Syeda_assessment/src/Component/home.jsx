import React from 'react';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import hero from './vir_1.jpg';
import logo from './logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import caro1 from './caro2.jpg';
import caro2 from './caro2.webp';
import caro3 from './caro3.jpg';
import mail from './email.png';
import call from './phone-call.png';
import whatsapp from './whatsapp (1).png';
import Accordion from 'react-bootstrap/Accordion';
import { Navbar, Nav,NavDropdown  } from 'react-bootstrap';

const Home = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <>
    <div className='bg-light'>
    <div className="container">
          <header className="header header_med">
              <div className="header-left">
                  <img src={logo} alt="BusinAssist Logo" className="logo" />
                  <nav className="nav">
                      <li className='d-flex'><img src={mail} alt="BusinAssist Logo" className="icons" /><span className='p-1' ><li className='email_nav'>Email us:</li><li>info@BusinAssist.com</li></span></li>
                      <li className='d-flex'><img src={call} alt="BusinAssist Logo" className="icons" /><span className='p-1' ><li className='email_nav'>Call us:</li><li>+44 (0)3030401239</li></span></li>
                      <li className='d-flex'><img src={whatsapp} alt="BusinAssist Logo" className="icons" /><span className='p-1' ><li className='email_nav'>Whatsapp:</li><li>Message us on Whatsapp</li></span></li>
                  </nav>
              </div>
              
          </header>


          <Navbar className='' expand="lg">
          {/* <Navbar.Brand href="#home">My Brand</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="nav_bg"> 
        <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Back office Solution" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Company Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Communication" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Virtual Offices" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Customer Portal</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    

          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li classNamename="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
</div>
<div className="hero">
              <h1>UK Virtual Mobile Number at only £1.25 per week inc VAT</h1>
              <div className="hero-image">
                  <img src={hero} alt="UK Virtual Mobile Number" />
              </div>
          </div>
</div>
          
      
      <div className='container'>

              <div className="intro">
                  <h2>UK Virtual Mobile Number. It's a number for all!</h2>
                  <div className='row'>
                      <div className='col-lg-6-12 col-md-6 col-12 video_pad'>
                          <p className='para'>Want to have a UK number for your business? Want to make & receive calls anywhere in the world? With our best-in-class UK virtual mobile number service stay always connected and give your business a local presence. We are with you no matter where you are not in the country. Own a UK virtual mobile number today!</p>
                      </div>
                      <div className='col-lg-6 col-md-6 col-12 video_pad'>
                          <video className='video_width' controls>
                              <source src="/my_video.mp4" type="video/mp4" />
                          </video>



                      </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>

              </div>
          </div>
          <div className="container-fluid" style={{background:"#ccc"}}>
          <Carousel responsive={responsive}
      autoPlay={false}
      autoPlaySpeed={1800}
      infinite={true}
      arrows={true}>
      <div className='tech-image mt-2'>
       
      <img src={caro1} alt="Feature 1"  className='caro_img'/>

      </div>
      <div className='tech-image mt-2'>
       
      <img src={caro2} alt="Feature 1"  className='caro_img'/>
      </div>
      <div className='tech-image mt-2'>
       
      <img src={caro3} alt="Feature 1"  className='caro_img'/>
      </div>
      <div className='tech-image mt-2'>
        
      <img src={caro1} alt="Feature 1"  className='caro_img'/>
      </div>
      <div className='tech-image mt-2'>
        
      <img src={caro2} alt="Feature 1"  className='caro_img'/>
      </div>
     
     
    </Carousel>
    </div>
             <div className='container mt-5 p-3'>
              <p className='para_text'>Give us business a local presence and stay always connected with your clients with our UK virtual Mobile Number Find out more about our exclusive deals below and get your number now!</p>
             </div>
          <div style={{background:"#ccc"}} className='p-3'>
             <div className="container mt-4">
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-12 mt-1'>
                  <div className='rem_col'>
                    <h6 className='rem_header'>Recommended</h6>
                    <h4 className='text-center p-2'>UK Virtual Mobile Number standard Package</h4>
                    <div className='btn_submit'>
                      <button className='btn btn-dark'>Select</button></div>
                  </div>

                </div>
              
              <div className='col-lg-6 col-md-6 col-12 mt-1'>
              <div className='pre_box'>
                   
                    <h4 className='p-2'>UK Virtual Mobile Number Premium Package</h4>
                  </div>
                  <div className='pre_box2'>
                  <div className='btn_submit'>
                  <button className='btn btn-dark'>Select</button></div>
                    

                  </div>
              </div>

              </div>
              </div>
              </div>
          
          <div className='bg-light mt-3'>
          <div className="faq container">
              <h2 className='text-center'>Frequently Asked Questions</h2>
              <Accordion ActiveKey="0" className='mt-3'>
      <Accordion.Item eventKey="0" className='mt-2'>
        <Accordion.Header>1) Is it safe to use Virtual Mobile Number?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mt-2'>
        <Accordion.Header>2) Do I need to keep the app running in background to receive calls?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mt-2'>
        <Accordion.Header>3) Can I use this number for 2 step authentications via sms?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='mt-2'>
        <Accordion.Header>4) How much time does it takes for sms to be delivered to my email?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='mt-2'>
        <Accordion.Header>5) Is there an option to change my email for receiving voicemails?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className='mt-2'>
        <Accordion.Header>6) What is the cancellation policy?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div></div>
    <div className='container mt-3'>

    <p className='mt-3 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>

<p className='mt-3 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p></div>
              
          <div className='footer'>
          <footer className=" container mt-5">
              <div className="footer-content row">
                  <div className=" col-lg-3 col-md-6 col-12 footer-section">
                      <h4>Head Office</h4>
                      <p  style={{fontSize:"15px"}}>321-321 high Road, Chadwell heath Uk</p>
                      <h6>Email:</h6>
                      <p style={{fontSize:"15px"}}> info@businassist.com</p>
                      <h6>Phone:</h6>
                      <p style={{fontSize:"15px"}}> +44 1234 567 89</p>
                  </div>
                  <div className=" col-lg-3 col-md-6 col-12 footer-section">
                      <h4>Virtual Office Locations</h4>
                      <h6>London</h6>
                      <ul>
                        <li>East London</li>
                        <li>Centeral london</li>
                      </ul>
                      <h6>Scotland</h6>
                      <ul>
                        <li>Edinburgh</li>
                        <li>Glasgow</li>
                      </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 footer-section">
                  <h4>Back Offices Solution</h4>
                      <ul>
                        <li>Data Input </li>
                        <li>Document processing</li>
                        <li>Data Extration</li>
                        <li>Call Answering</li>
                        <li>Virtual Assisstants</li>
                        <li>Customer services</li>
                        <li>Chat and Calls</li>
                        <li>Email Services</li>
                      </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 footer-section">
                      <h4>Popular Pages</h4>
                      <ul>
                      <li>Book Office Solutions</li>
                      <li>Company Secretarial</li>
                      <li>Virtual Offices</li>
                      <li>Shard office</li>
                      <li>Contact Us</li>
                      <li>About Us</li>
                      <li>Blogs</li>
                      <li>Privacy policy</li>
                      </ul>
                  </div>
              </div>
              <div className="footer-bottom text-center">
                  <p>© 2023 BusinAssist All rights reserved</p>
              </div>
          </footer>
          </div></>
    
  );
}

export default Home;
