
import "../stylesheets/About.css"
import gev_intro from "../images/slide-one.mp4";
import igbc from "../images/IGBC-drone.png";
import iitk from "../images/slide2.jpg";
import nse from "../images/NSE.jpg";


const About = () => {
    return (
        <>
            <div className="heading lgreen">
                <h1>About Us</h1>
            </div>
            <div className="about">
                <h1 className="text-center dgreen">GEV - Govardhan Ecovillage</h1>
                <div className="about-Gev lg:flex gap-28 lg:mx-40 mx-8 items-center">
                    <div className="video_playback ">
                        <video className="rounded-2xl mb-4 " alt="GEV" src={gev_intro} autoPlay loop muted>

                        </video>
                    </div>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.682013292073!2d80.2322583149825!3d26.51242298331268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3f3b3b3b3b3b%3A0x1b1b1b1b1b1b1b1b!2sIIT%20Kanpur!5e0!3m2!1sen!2sin!4v1633663660733!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe> */}
                    <div className="aboutt">
                        <p className="text-justify">What do you do when the daily routine of life starts feeling like a chore and you’re driven to boredom by the monotony? You take a break of course! However, instead of spending your break on the wrong kind of binges, investing time in your health and wellness is the way to go. A wellness ashram is an ideal choice for those who want to escape the dreariness of everyday life and reconnect with themselves. Govardhan Ecovillage is one of the best wellness ashram in India, located a stone's throw away from Mumbai. . A place of natural harmony to release, refocus and recalibrate the self, Govardhan Ecovillage is the ideal spiritual pathway to discover the self.
                        <br /><br />
                        <a href="https://ecovillage.org.in/">Visit Homepage</a>
                        </p>
                    </div>

                </div>

                <div className="about-IGBC flex-col">
                    <h1 className="text-center dgreen">NSE - National Stock Exchange</h1>
                    <div className="aboutt lg:flex flex-row gap-16 items-center">
                        <p className="text-justify">
                        NSE (National Stock Exchange) is an institution of national importance with international stature. We are a trusted market infrastructure institution with high standards of corporate governance.

A homegrown brand with a global vision, NSE is counted as one of the world’s largest exchanges and a catalyst for driving India’s economic growth. NSE was the first exchange in India to implement electronic or screen-based trading which began its operations in 1994; a pioneer in technology which ensures the reliability and performance of its systems through a culture of innovation and investment in technology. NSE operates a market ecosystem to bring in transparency & efficiency.

Their robust state-of-the-art technology platform offers high levels of robustness, safety and resilience for trading and investment opportunities across all asset classes and for all categories of investors. NSE is focused on investor protection and disciplined development of the Indian capital market landscape.
                        <br /><br />
                        <a href="https://www.nseindia.com">Visit Homepage</a>
                        </p>
                        
                    <div className="img-nse w-full">
                        <img className="rounded-2xl" src= {nse} alt="NSE" />
                    </div>
                    </div>
                    
                </div>



                <div className="about-IITK">
                    <h1 className="text-center dgreen mb-4">Kotak School of Sustainability, IIT Kanpur</h1>
                    <div className="about-Gev lg:flex gap-28 lg:mx-40 mx-8 items-center">
                        <div className="img-iitk">
                            <img className="rounded-2xl" src={iitk} alt="IITK" />

                        </div>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.682013292073!2d80.2322583149825!3d26.51242298331268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3f3b3b3b3b3b%3A0x1b1b1b1b1b1b1b1b!2sIIT%20Kanpur!5e0!3m2!1sen!2sin!4v1633663660733!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe> */}
                        <div className="aboutt">
                            <p className="text-justify">The Kotak School of Sustainability at IIT Kanpur aims to excel in sustainability education, research and innovation, technology development, entrepreneurship, and outreach. The school will spearhead the development of holistic end-to-end technology solutions for sustainable development for a healthy planet and species. The vision of the School is to provide thought leadership and solutions towards sustainability actions and prepare future generations to lead the cause of sustainable development
                            <br /><br />
                            <a href="https://kss.iitk.ac.in/">Visit Homepage</a>
                            </p>
                        </div>

                    </div>

                </div>

                <div className="about-IGBC flex-col">
                    <h1 className="text-center dgreen">IGBC - Indian Green Building Council</h1>
                    <div className="aboutt lg:flex flex-row gap-16 items-center">

                        <p className=" text-justify"> The Indian Green Building Council (IGBC), part of the Confederation of Indian Industry (CII) was formed in the year 2001. The vision of the council is, "To enable a sustainable built environment for all and facilitate India to be one of the global leaders in the sustainable built environment by 2025".<br />The council offers a wide array of services which include developing new green building rating programmes, certification services and green building training programmes. The council also organises Green Building Congress, its annual flagship event on green buildings.<br />IGBC is India's Premier certification body, headquartered at Hyderabad. IGBC is the founding member of World Green Building Council discussing global issues at COP and similar global platforms.
                        <br /><br />
                        <a href="https://igbc.in/">Visit Homepage</a></p>
                        <div className="img ">
                            <img className="rounded-2xl" src={igbc} alt="IGBC" />
                        </div>
                    </div>

                </div>
                


            </div>



        </>

    )
}

export default About;