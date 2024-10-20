import Schedule from "../components/Schedule";


const EventDetails = () => {
    return (
        <div className="schedule m-5 text-2xl">
        <Schedule />
        <hr/>
        <p className=' mx-12 lg:mx-80 font-bold my-0'><span className='text-red-500'>*</span> Tentative Schedule</p>
        {/* <p className=' mx-12 lg:mx-80 font-bold'><span className='text-red-500'>*</span> Subject to Confirmation</p> */}

        </div>
    );
}
export default EventDetails;