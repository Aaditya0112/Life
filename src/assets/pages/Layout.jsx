import { Link, Outlet} from "react-router-dom";

import { useState } from "react";

import iitk_logo from '../images/iitk_logo.png';
import gev from '../images/GEV.png';
import igbc from '../images/IGBC.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import life from '../images/Life-logo.jpg'
import nselogo from '../images/NSE-logo.png'

const Layout = () => {

    const [pathname, setPathname] = useState(window.location.pathname);
   
    return (

        <>
            {/* Header */}
            <div className="logos">
                {/* <div className="self"> */}
                <div className="life">
                        <img src={life} alt="LiFE" />
                    </div>
                    
                    <div className="gev">
                    <a href = "https://ecovillage.org.in/" target="_blank"><img src={gev} alt = "GEV-Logo" /></a>
                    </div>
                    <div className="nse-logo">
                    <a href = "https://ecovillage.org.in/" target="_blank"><img src={nselogo} alt="LiFE" /></a>
                    </div>
                    <div className="inst-logo">
                        <a href = "https://iitk.ac.in" target="_blank"><img src={iitk_logo} alt="IITK Logo" /></a>
                    </div>

                    <div className="igbc">
                    <a href = "https://igbc.in/" target="_blank"><img src={igbc} alt= "IGBC-Logo" /></a>
                    </div>
                    
                    

                </div>


            {/* </div> */}

            {/* Navbar */}
            <h1 className="text-center text-2xl lg:text-4xl m-4" style={{color : '#010d82' }}>
        LiFE 2024 - Bharatiya Perspective on Sustainability
    </h1>

            <Navbar expand="lg" className="bg-body-tertiary mb-2">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Link to="/" className="nav-link"  onClick={
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
            <Link to="/about" className="nav-link" onClick={
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
            <Link to="/eventDetails" className="nav-link" onClick={
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
            <Link to="/speakers" className="nav-link" onClick={
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
            <Link to="/supporters" className="nav-link" onClick={
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
            <Link to="/venue" className="nav-link" onClick={
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
            
            

            <Link to="/registration" className="nav-link" onClick={
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
            <Link to="/committee" className="nav-link" onClick={
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
            

            <Link to="/contact" className="nav-link" onClick={
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
        &copy; 2024 LiFE. All Rights Reserved.
    </footer>
        </>
    )
};

export default Layout;
