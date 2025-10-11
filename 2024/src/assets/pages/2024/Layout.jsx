import { Link, Outlet, useLocation} from "react-router-dom";

import { useState, useEffect , useMemo} from "react";

// import iitk_logo from '../images/iitk_logo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import life from '../../images/Life-logo.jpg'




const useTypewriter = (text, speed = 20) => {
    const [index, setIndex] = useState(0);
    const displayText = useMemo(() => text.slice(0, index), [index]);
    useEffect(() => {
      if (index >= text.length)
        return;
        
      const timeoutId = setTimeout(() => {
        setIndex(i => i + 1);
      }, speed);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [index, text, speed]);
  
    return displayText;
  };

const Layout = ({logos}) => {
    const location = useLocation();
    
    // Extract year from the path (e.g., "/2024" -> "2024")
    const getYearFromPath = () => {
        const pathSegments = location.pathname.split('/');
        const yearSegment = pathSegments.find(segment => /^\d{4}$/.test(segment));
        return yearSegment || '2024'; // Default to 2024 if no year found
    };

    const currentYear = getYearFromPath();
    
   
    return (

        <>
            {/* Header */}
            <div className="logos">
                {/* <div className="self"> */}
                <div className="life">
                        <img src={life} alt="LiFE" />
                    </div>

                    {logos.map((p, idx) => (
                        <div key={idx} className={p.className}>
                            <a href={p.href} target="_blank" rel="noopener noreferrer">
                                <img src={p.img} alt={p.alt} title={p.alt} />
                            </a>
                        </div>
                    ))}
                    
                    

                </div>


            {/* </div> */}

            {/* Navbar */}
            <h1 className="text-center text-2xl lg:text-4xl m-4" style={{color : '#010d82' }}>
        LiFE {currentYear} - {useTypewriter("Bharatiya Perspective on Sustainability", 50) }
        {/* <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("GeeksForGeeks")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}
            /> */}
    </h1>

            <Navbar expand="lg" className="bg-body-tertiary mb-2">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Link to={`/${currentYear}`} className="nav-link"  onClick={
                () => {
                    if(window.outerWidth < 768){
                        document.querySelector('.navbar-toggler').click();
                    }

                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[0].classList.add('activeTab');
                }
            }>Home</Link>
            <Link to={`/${currentYear}/about`} className="nav-link" onClick={
                () => {
                    if(window.outerWidth < 768){
                        document.querySelector('.navbar-toggler').click();
                    }

                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[1].classList.add('activeTab');
                    
                }
            }>About Us</Link>
            <Link to={`/${currentYear}/eventDetails`} className="nav-link" onClick={
                () => {
                    if(window.outerWidth < 768){
                        document.querySelector('.navbar-toggler').click();
                    }

                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[2].classList.add('activeTab');
                }
            }>Event Details</Link>
            <Link to={`/${currentYear}/speakers`} className="nav-link" onClick={
                () => {
                    if(window.outerWidth < 768){
                        document.querySelector('.navbar-toggler').click();
                    }

                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[3].classList.add('activeTab');
                }
            }>Speakers</Link>
            <Link to={`/${currentYear}/supporters`} className="nav-link" onClick={
                () => {
                    if(window.outerWidth < 768){
                        document.querySelector('.navbar-toggler').click();
                    }
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[4].classList.add('activeTab');
                    
                }
            }>Supporters</Link>    
            <Link to={`/${currentYear}/venue`} className="nav-link" onClick={
                () => {
                    if(window.outerWidth < 768){
                        document.querySelector('.navbar-toggler').click();
                    }
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[5].classList.add('activeTab');
                    
                }
            }>Venue</Link>   
            
            

            <Link to={`/${currentYear}/registration`} className="nav-link" onClick={
                () => {

                    if(window.outerWidth < 768){
                        document.querySelector('.navbar-toggler').click();
                    }

                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[6].classList.add('activeTab');
                }
            }>Registration</Link>
            <Link to={`/${currentYear}/committee`} className="nav-link" onClick={
                () => {
                    if(window.outerWidth < 768){
                        document.querySelector('.navbar-toggler').click();
                    }
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[7].classList.add('activeTab');
                    
                }
            }>Committee</Link>
            

            <Link to={`/${currentYear}/contact`} className="nav-link" onClick={
                () => {

                    if(window.outerWidth < 768){
                        document.querySelector('.navbar-toggler').click();
                    }
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[8].classList.add('activeTab');
                }
            }>Contact</Link>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/committee">Committee</Nav.Link>
            <Nav.Link href="/speakers">Speakers</Nav.Link>
            <Nav.Link href="/eventDetails">Event Details</Nav.Link>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Nav.Link href="/studentSupport">Student Travel Support</Nav.Link>
            <Nav.Link href="/accomodation">Accommodation</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>





            <Outlet/>

    <footer className="footer text-center text-lg absolute bottom-0 w-full py-3 bg-gradient-to-b from-white to-gray-400" style={{color : '#010d82'}}>
        &copy; 2025 LiFE. All Rights Reserved.
    </footer>
        </>
    )
};

export default Layout;
