import Carousel from 'react-bootstrap/Carousel';
// import Timer from '../../components/Timer';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.webp';
import slide3 from '../../images/slide3.jpg';

import SupportersLogo from '../../components/SupportersLogo.jsx';


// import SponsorsImg from '../components/SponsorsImg';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Themes from '../../components/Themes.jsx';

function getMonthName(monthNumber) {
  const date = new Date(2000, monthNumber - 1, 1); // Any year, month-1, day 1
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
}

const Home = ({day, month, year, startTime, endTime, weekDay, venue}) => {
  const monthName = getMonthName(month);
  const eventDate = new Date(`${year}-${month}-${day}T00:00:00Z`);
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
            LiFE {year} <br /> Lifestyle for Environment <br /> <span className="dblue text-semibold"> "Bharatiya Perspective on Sustainability"</span><br /><span className='text-sm lg:text-xl'>{day}th {monthName}, {weekDay}, {startTime} - {endTime}, {venue} </span>
          </h1>
        </div>
      </div>


      <VerticalTimeline layout='1-column-right'>


        <VerticalTimelineElement
          className="vertical-timeline-element--work  "
          date={`Venue: ${venue}`}
          iconStyle={{ color: '#fff' }}


        >
          <h3 className="vertical-timeline-element-title">Event Date</h3>

          <p>
            {day}<sup>th</sup> {monthName}, {year}
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
            20<sup>th</sup> November, 2024
          </p>

        </VerticalTimelineElement>


      </VerticalTimeline>

      {/* PERA Sponsors */}

      <div className="life-sponsors flex flex-col justify-center items-center">
        <div className="org">
          <p><h1 className='text-center dgreen'>LiFE {year}</h1></p>
        </div>
        <span className='text-center text-lg font-bold my-2'>Organized by </span>

        <div className="supporters-logos">

          {SupportersLogo.Organiser.map((item) => (
            <div className={item.title}>
              <a href={item.webpage} target="_blank"><img src={item.img} alt={item.title} /></a>
            </div>
          ))}

        </div>
        

        <span className='text-center text-lg font-bold my-2'>In association with </span>

        <div className="supporters-logos">
        {SupportersLogo.Associate.map((item) => (
            <div className={item.title + ' rounded '}>
              <a href={item.webpage} target="_blank"><img className="h-32"src={item.img} alt={item.title} /></a>
            </div>
          ))}
        </div>
        <span className='text-center text-lg font-bold my-2'>Venue Partner </span>

        <div className="supporters-logos">
        {SupportersLogo.Venue.map((item) => (
            <div className={item.title}>
              <a href={item.webpage} target="_blank"><img className="h-28" src={item.img} alt={item.title} /></a>
            </div>
          ))}
        </div>

        {/* <span className='text-center text-lg font-bold my-2'>Supported By </span> */}
        
        {/* <div className="supporters-logos">
          <div className="goi w-full  lg:w-auto">
            <div className="goi-sub flex ">
              <img className="h-16 lg:h-24" src={goi} alt="Govt.of India" />
              <img className="h-16 lg:h-24" src={moefcc} alt="MOEFCC" />
            </div>
            <h5 className='text-center text-sm lg:text-xl'>Ministry of Environment,<br/>
            Forest & Climate Change</h5>

          </div>

          <div className="gom">
          <div className="gom-sub flex items-center gap-2">
              <img className="h-16 lg:h-24" src={gom} alt="Govt.of Maharashtra" />
              <h5 className='font-bold text-center text-sm lg:text-xl'>Government of <br/>
              Maharashtra</h5>
            </div>
            <h5 className='text-center text-sm lg:text-xl '>Ministry of Urban Development | Forest<br/>
            Department | Department of Water Resources</h5>
          </div>
        </div>

        <div className="supporters-logos lg:w-4/5 s lg:flex align-center m-10 grid-cols-3 lg:grid-cols-5 ga-0">
          {SupportersLogo.Supporters_1.map((item) => {
            if (item.title === "IIT Bombay" || item.title === "IIT Indore" || item.title === "NIT Warangal") {
              return (<div className={item.title}>
                <a href={item.webpage} target="_blank"><img className="h-20 lg:h-24" src={item.img} alt={item.title} /></a>
                <h5 className='text-center text-xs lg:text-xl'>{item.title}</h5>
              </div>)
            } else {
              return (
                <div className={item.title}>
                  <a href={item.webpage} target="_blank"><img className="h-20 lg:h-24" src={item.img} alt={item.title} /></a>

                </div>
              )
            }
          }

          )}
          {SupportersLogo.Supporters_2.map((item) => (
            <div className={item.title}>
              <a href={item.webpage} target="_blank"><img src={item.img} alt={item.title} /></a>
            </div>
          ))}

        </div> */}
        {/* <div className="supporters-logos ga-0">
          {SupportersLogo.Supporters_2.map((item) => (
            <div className={item.title}>
              <a href={item.webpage} target="_blank"><img src={item.img} alt={item.title} /></a>
            </div>
          ))}
        </div> */}

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
          <h1>Core Themes</h1></span>

        {/* <ThemesList/> */}
        <Themes/>


      </div>

      {/* <div className="countdown">
        <Timer eventDate={eventDate} />
      </div> */}


    </>
  )
}

export default Home;