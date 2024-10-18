import "../stylesheets/Committee.css"
import iitk_logo from '../images/iitk_logo.png';
import nitw from "../images/NITW-logo.png"
import igbc from '../images/IGBC.jpg'
import iskcon from "../images/iskcon_logo.jpg"
import iitb from "../images/IITB_Logo.svg"

const Committee = () => { 
    return(<>
         <header>
        <h1 className="lgreen">Our Committee Members</h1>
        
    </header>

    <section class="committee">
    <div class="member flex flex-col items-center justify-center text-lg">
        <img className ="h-24 "src={iskcon} alt="ISKCON" />
            <h2 className="text-2xl">Shri Gauranga Das</h2>
            <p class="role">Director, Govardhan Ecovillage</p>
            <a className="no-underline font-semibold" href="https://gaurangadas.com/" target="_blank"> Homepage</a>

            
        </div>
        <div class="member flex flex-col items-center justify-center">
        <img className ="h-24 "src={igbc} alt="IGBC" />
            <h2 className="text-2xl">Mr. Anand Muthukrishnan</h2>
            <p class="role">Deputy Executive Director, IGBC</p>
            <a href='https://www.linkedin.com/in/amuthukrishnan/' target='_blank'><i style={{fontSize : '3rem', color :'#0a66c2', cursor:'pointer'
                }} class="fa fa-linkedin-square"></i></a>
        </div>
        <div class="member flex flex-col items-center justify-center">
            <img className ="h-24 "src={iitk_logo} alt="IITK Logo" />
            <h2 className="text-2xl">Prof. Amarendra Edpuganti</h2>
            <p class="role">IIT Kanpur</p>
            <a href='https://www.linkedin.com/in/amarendra-edpuganti-0800a995/' target='_blank'><i style={{fontSize : '3rem', color :'#0a66c2', cursor:'pointer'
                }} class="fa fa-linkedin-square"></i></a>
        </div>



        <div class="member flex flex-col items-center justify-center">
            <img className ="h-24 "src={iitk_logo} alt="IITK Logo" />
            <h2 className="text-2xl">Prof. Gururaj M V</h2>
            <p class="role">IIT Kanpur</p>
            <a href='https://www.linkedin.com/in/dr-guru-raj-14430723/' target='_blank'><i style={{fontSize : '3rem', color :'#0a66c2', cursor:'pointer'
                }} class="fa fa-linkedin-square"></i></a>
            
        </div>

        <div class="member flex flex-col items-center justify-center text-lg">
        <img className ="h-24 "src={nitw} alt="NITW Logo" />
            <h2 className="text-2xl">Prof. Hari Krishna Padavala</h2>
            <p class="role">NIT Warangal</p>
            <a className="no-underline font-semibold" href="https://erp.nitw.ac.in/ext/profile/ce-phari" target="_blank"> Homepage</a>
        </div>


        <div class="member flex flex-col items-center justify-center">
        <img className ="h-24 "src={iitb} alt="IITB" />
            <h2 className="text-2xl">Mr. Gajendra</h2>
            <p class="role">PhD scholar, IIT Bombay</p>
        </div>

        <div class="member flex flex-col items-center justify-center">
            
            <h2 className="text-2xl">Mr. Rahul Joshi</h2>
            <p class="role"></p>
        </div>
        <div class="member flex flex-col items-center justify-center">
            <img className ="h-24 "src={iitk_logo} alt="IITK Logo" />
            <h2 className="text-2xl">Arpan Gayen</h2>
            <p class="role">PhD Scholar, IIT Kanpur</p>
            <a href='' target='_blank'><i style={{fontSize : '3rem', color :'#0a66c2', cursor:'pointer'
                }} class="fa fa-linkedin-square"></i></a>
        </div>
        <div class="member flex flex-col items-center justify-center">
            <img className ="h-24"src={iitk_logo} alt="IITK Logo" />
            <h2 className="text-2xl">Aaditya Raj</h2>
            <p class="role">Student, IIT Kanpur</p>
            <a href='https://www.linkedin.com/in/aaditya-raj-a01982287/' target='_blank'><i style={{fontSize : '3rem', color :'#0a66c2', cursor:'pointer'
                }} class="fa fa-linkedin-square"></i></a>
        </div>

    </section>
        </>
    )
}
export default Committee;