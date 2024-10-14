import igbc from '../images/IGBC.png'
import iitk_logo from "../images/iitk_logo.png"
import nselogo from '../images/NSE-logo.png'
import SupportersLogo from '../components/SupportersLogo'
import goi from "../images/Government_of_India_logo.png"
import moefcc from "../images/moefcc-logo.jpg"
import gom from "../images/Seal_of_Maharashtra.svg.webp"

const Supporters = () => {
    return (
        <>
        <div className="Venue_Partner">
                <h1 className="lgreen text-center m-4">Venue Partner</h1>
                <div className="supporters-logos">

                    {SupportersLogo.Venue.map((item) => (
                        <div className={item.title}>
                            <a href={item.webpage} target="_blank"><img src={item.img} alt={item.title} /></a>
                        </div>
                    ))}

                </div>
            </div>
            <div className="Associate_Supporters">
                <h1 className="lgreen text-center m-4">Associate Partners</h1>
                <div className="supporters-logos">

                    {SupportersLogo.Associate.map((item) => (
                        <div className={item.title}>
                            <a href={item.webpage} target="_blank"><img src={item.img} alt={item.title} /></a>
                        </div>
                    ))}

                </div>
            </div>
            <div className="Supporters">
                <h1 className="lgreen text-center m-4">Supported by</h1>
                <div className="supporters-logos">
          <div className="goi">
            <div className="goi-sub flex">
              <img src={goi} alt="Govt.of India" />
              <img src={moefcc} alt="MOEFCC" />
            </div>
            <h5 className='text-center'>Ministry of Environment,<br/>
            Forest & Climate Change</h5>

          </div>

          <div className="gom">
          <div className="gom-sub flex items-center gap-2">
              <img src={gom} alt="Govt.of Maharashtra" />
              <h5 className='font-bold'>Government of <br/>
              Maharashtra</h5>
            </div>
            <h5 className='text-center'>Ministry of Urban Development | Forest <br/>
            Department | Department of Water Resources</h5>
          </div>
        </div>
                <div className="supporters-logos">
                {SupportersLogo.Supporters_1.map((item) => {
            if (item.title == "IIT Bombay" || item.title == "IIT Indore" || item.title == "NIT Warangal") {
              return(<div className={item.title}>
              <a href={item.webpage} target="_blank"><img src={item.img} alt={item.title} /></a>
              <h5>{item.title}</h5>
            </div>)
            }else{
              return(
                <div className={item.title}>
              <a href={item.webpage} target="_blank"><img src={item.img} alt={item.title} /></a>
              
            </div>
              )
            }}
            
          )}

                </div>
                <div className="supporters-logos">
                    {SupportersLogo.Supporters_2.map((item) => (
                        <div className={item.title}>
                            <a href={item.webpage} target="_blank"><img src={item.img} alt={item.title} /></a>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Supporters;