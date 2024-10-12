import Carousel from 'react-bootstrap/Carousel';
import Timer from '../components/Timer';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.webp';
import slide3 from '../images/slide3.jpg';
import ComingSoon from "../pages/ComingSoon";
import life from "../images/Life-logo.jpg"
import gev from '../images/GEV.png';
import nselogo from '../images/NSE-logo.png'
import iitk_logo from '../images/iitk_logo.png';
import igbc from '../images/IGBC.jpg'
// import SponsorsImg from '../components/SponsorsImg';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Home = () => {

  const eventDate = new Date('2024-10-31T00:00:00Z');
  return (
    <>



      <div className="carouselplay">
        <Carousel>
          <Carousel.Item interval={4000}>
            <img src={slide1} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img src={slide2} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img src={slide3} alt="" />
          </Carousel.Item>
        </Carousel>

        {/*<div class="carousel slide"><div class="carousel-indicators"><button type="button" data-bs-target="" aria-label="Slide 1" aria-current="true" class="active"></button><button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"></button><button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false"></button></div><div class="carousel-inner"><div interval="5000" class="active carousel-item"><img src="/pera-react-final/static/media/slide1.762c2c3e5c60cf51cff3.jpg" alt=""></div><div interval="5000" class="carousel-item"><img src="/pera-react-final/static/media/slide2.2faacea92ce0fa7b247c.jpg" alt=""></div><div interval="5000" class="carousel-item"><img src="/pera-react-final/static/media/slide3.9daa59e750abcd0a69f5.jpg" alt=""></div></div><a class="carousel-control-prev" role="button" tabindex="0" href="#" style="
    background: black;
    opacity: 1;
"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a></div> */}
        <div className="cap ">

          <h1 className='text-lg lg:text-4xl'>
            LiFE 2024 <br /> Lifestyle for Environment <br /> <span className="dblue text-semibold"> "Bharatiya Perspective on Sustainability"</span><br /><span className='text-sm lg:text-xl'>27th Nov, Wed, 10 AM - 2 PM, NSE Auditorium, Mumbai </span>
          </h1>
        </div>
      </div>


      <VerticalTimeline layout='1-column-right'>


        <VerticalTimelineElement
          className="vertical-timeline-element--work  "
          date="Venue: National Stock Exchange Auditorium, Mumbai"
          iconStyle={{ color: '#fff' }}


        >
          <h3 className="vertical-timeline-element-title">Event Date</h3>

          <p>
            27<sup>th</sup> November, 2024
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work  "

          iconStyle={{ color: '#fff' }}


        >
          <h3 className="vertical-timeline-element-title">Registration Begins</h3>

          <p>
            15<sup>th</sup> October, 2024
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work  "

          iconStyle={{ color: '#fff' }}


        >
          <h3 className="vertical-timeline-element-title">Registration Closes</h3>

          <p>
            31<sup>st</sup> October, 2024
          </p>

        </VerticalTimelineElement>


      </VerticalTimeline>

      {/* PERA Sponsors */}

      <div className="pera-sponsors flex flex-col">
        <div className="org">
          <p><h1 className='text-center dgreen'>LiFE 2024</h1></p>
        </div>
        <span className='text-center text-lg font-semibold'>Organized BY </span>

        <div className="supporters-logos">
          <div className="gev">
            <a href="https://ecovillage.org.in/" target="_blank"><img src={gev} alt="GEV-Logo" /></a>
          </div>
          

        </div>
        
        <span className='text-center text-lg font-semibold'>In association with </span>

        <div className="supporters-logos">
          <div className="nse-logo">
            <a href="https://www.nseindia.com" target="_blank"><img src={nselogo} alt="LiFE" /></a>
          </div>
          <div className="inst-logo">
            <a href="https://iitk.ac.in" target="_blank"><img src={iitk_logo} alt="IITK Logo" /></a>
          </div>

          <div className="igbc">
            <a href="https://igbc.in/" target="_blank"><img src={igbc} alt="IGBC-Logo" /></a>
          </div>
        </div>

        <span className='text-center text-lg font-semibold'>Supported By </span>

        <div className="supporters-logos">
          {/* <div className="nse-logo">
              <a href="https://www.nseindia.com" target="_blank"><img src={nselogo} alt="LiFE" /></a>
              </div>
              <div className="inst-logo">
                  <a href="https://iitk.ac.in" target="_blank"><img src={iitk_logo} alt="IITK Logo" /></a>
              </div>

              <div className="igbc">
              <a href="https://igbc.in/" target="_blank"><img src={igbc} alt="PERA-Logo" /></a>
              </div> */}
        </div>

        <div className="skills" id="skills">
          {/* {
            SponsorsImg.map((sponsor) => {
              return (
                <div className="card" key={sponsor.id}>
                  <img src={sponsor.image} alt="" />
                </div>
              )
            }
            )} */}


        </div>
      </div>
      <div className="about-pera">
        <span className="heading lgreen">
          <h1>Themes</h1>
        </span>
        
          <p >
            Sustainability is at the core of Indian civilization – the world’s most ancient continuous living culture
and tradition. Our scriptures espouse a life in full harmony with nature. Our ancestors advocate
custodianship, prudent use, and conservation of natural resources. Present day challenges demand
that we recall our approach towards natural resources to ensure a better, sustainable future for our
future generations. Experts will share their views on how to participate in the mission, create models,
and put them in practice for a sustainable living – individually and collectively.
          </p>
           {/* <!-- <iframe height="480" width="500" src="https://www.youtube.com/embed/PL3Odw-k8W4 ">
    </iframe> --> */}
      </div>

      <div className="countdown">
        <Timer eventDate={eventDate} />
      </div>


    </>
  )
}

export default Home;