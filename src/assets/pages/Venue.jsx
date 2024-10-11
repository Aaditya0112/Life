const Venue  = () => {
    return(
        <>
        <div className="venue flex flex-col items-center justify-around lg:flex-row my-8">
            <div className="venue-content text-center">
                <h1 className="lgreen">Venue</h1>
                <p>NSE Auditorium,<br/>National Stock Exchange of India Ltd.,<br/>
Exchange Plaza, C-1, Block G,<br/> 
Bandra Kurla Complex,<br/>
Bandra (E), Mumbai – 400 051
</p>
            </div>
           <div className="map h-4/5">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.54600002124!2d72.86003346652583!3d19.059986344694682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8dd865932f5%3A0xde111e7daa319c82!2sNational%20Stock%20Exchange!5e0!3m2!1sen!2sin!4v1728550537481!5m2!1sen!2sin" title="NSE" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

           </div>

        </div>
        <div className="reach-NSE">
                    <div className="aboutt">
                        <h1 className="dblue">How to Reach Venue</h1>

                        <h4>Nearest Airport - Mumbai (6.7 kms)</h4>
                        <h4>Nearest Railway Station - Bandra </h4>
                        
                        {/* <h3>Domestic Train Travel</h3> */}
					{/* <p>Train service in India is provided by the Indian Railways and is the most popular form of public transportation. Passenger service in the Indian Railways is divided into several classes, namely, Air Conditioned I (First) class, Air Conditioned II (Two Tier) class, Air Conditioned III (3-tier) class, Air Conditioned Chair Car and Sleeper Class. The Rajdhani and the Shatabdi family of trains are widely regarded as the best trains in India. Train reservations can be made at one of the many Railway reservation counters all over India or over the internet using the Indian Railways e-ticket facility. See the Indian Railways website for further details. For those inexperienced in travelling by the Indian Railways, it is recommended that they travel by one of Air Conditioned I, Air Conditioned II or the Air Condit ioned Chair Car (for Shatabdi trains) classes.</p> */}
                    {/* <h3>How to Reach IIT Kanpur from railway station: </h3> */}
					{/* <p>IIT Kanpur is located at a distance of about 15 kilometers from the Kanpur Central Railway Station. Please hire Autorickshaw or taxi. Autorickshaw and taxi will be available in Kanpur Railway Station at Exit side of Plateform No. 1. Autorickshaws fare is about Rs. 250-300/- and taxi fare is between Rs 350 to Rs 500 from Central Station to IIT Kanpur Campus. It takes about 40 minutes to drive.</p> */}
                    </div>
                </div>

        
        </>
    );
}

export default Venue;