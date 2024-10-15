import "../stylesheets/registration.css";
import qr from "../images/formTestQR.png";

const Registration = () => {
    return (
        <div className="containAll flex flex-col justify-center items-center">
            <div className="heading">
                <h1 className="lgreen"> Registration Form </h1>
            </div>

            <div >
                    <ul >

                        {/* <li>
                        <span className="text-red-600  text-xl">*</span>IITK students and faculty are exempt from the registration fee.
                        </li> */}
                    </ul></div>

            <iframe className="g-form w-4/5 lg:w-3/5" src="https://docs.google.com/forms/d/e/1FAIpQLScOWD9Z7SkEJjQ6kVjPBwkaCvx4Mspc3m9GgMnjLhF-2RXk1A/viewform?usp=sharing"  frameborder="0" loading="lazy"></iframe>
            <div className="guidelines flex justify-around">
                {/* <div >
                    <ul >
                        <li>
                            <span className="text-red-600 text-xl">*</span>Partial travel support is available for the first 50 outstation student registrations.
                        </li>
                        <li>
                        <span className="text-red-600  text-xl">*</span>Limited seats are available in each category
                        </li>
                        <li>
                        <span className="text-red-600  text-xl">*</span>IITK students and faculty are exempt from the registration fee.
                        </li>
                    </ul></div> */}
            </div>


            <div className="form flex mx-2 gap-1 lg:gap-28 justify-around items-center lg:w-4/5
            ">
                <div className="form-link ">
                <a className="" href="https://docs.google.com/forms/d/e/1FAIpQLScOWD9Z7SkEJjQ6kVjPBwkaCvx4Mspc3m9GgMnjLhF-2RXk1A/viewform?usp=sharing" target="_blank"> Go to Google Form </a>
                </div>

                <h3 className="dblue">OR</h3>

                <div className="form-qr w-1/3 lg:w-1/4">
                    <h3>Scan QR Code</h3>
                    <img src={qr} alt="QR Code" />
                </div>
            </div>

            {/* <div className="heading">
        <h1> Registration Instructions </h1>
    </div> */}
            <script src="Registration.js"></script>
        </div>
    )
}

export default Registration;