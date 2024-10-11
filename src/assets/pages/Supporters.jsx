import igbc from '../images/IGBC.png'
import iitk_logo from "../images/iitk_logo.png"
import nselogo from '../images/NSE-logo.png'

const Supporters = () => {
    return (
        <>
            <div className="Associate_Supporters">
                <h1 className="lgreen text-center m-4">Associate Partners</h1>
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
            </div>
            <div className="Associate_Supporters">
                <h1 className="lgreen text-center m-4">Supported BY</h1>
                
            </div>
        </>
    )
}

export default Supporters;