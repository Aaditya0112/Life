import Accordion from 'react-bootstrap/Accordion';
import '../stylesheets/sbc.css';
// import MemberCard from '../components/MemeberCard';
// import Members from '../components/Members';


function SBC() {
    return (
        <>
        <div className="currentMemberBox flex flex-col items-center">
            <h1 className='text-center'>Current Members</h1>
            <div className="member-card w-4/5 flex flex-col lg:w-2/5 items-center justify-center rounded-xl  lg:flex-row  shadow-xl p-2 m-8 ">
            <div className="line flex member-card__image h-56 w-56 lg:mr-6 rounded-full border-8" >
                {/* <img src={gmv} alt="Prof"/> */}
            </div>
            <div className="member-card__info text-center">
                <h2>Dr. Gururaj M V <a href='https://www.linkedin.com/in/dr-guru-raj-14430723/?originalSubdomain=in' target='_blank'><i style={{fontSize : '24px', color :'#0a66c2', cursor:'pointer'
                }} class="fa fa-linkedin-square"></i></a></h2>
                <div className="designation font-bold text-xl cyan-400">
                    <h3 className='text-black text-lg leading-4'> Assistant Professor, IIT Kanpur</h3>
                    <span>Branch Chapter Advisor</span>

                    
                </div>
                <p className="mailId m-0">
                <a href="mailto:gururajmv@iitk.ac.in">gururajmv@iitk.ac.in</a>
                </p>
                <button className='hoverBlack m-1 p-1 rounded border-2 border-red-400 text-red w-fit ' > <a href="https://home.iitk.ac.in/~gururajmv/" target='_blank' rel="noreferrer" style={{textDecoration:"None", color:"#ff1981"}}>Homepage</a></button>
            </div>

        </div>
            {/* <MemberCard name = "Dr. Guru Raj" designation = "Assistant Professor, IIT Kanpur" mailId = "gururajmv@iitk.ac.in" img={gmv}/> */}
            <div className="flex flex-col itemscenter lg:grid md:grid w-fit grid-cols-2 justify-items-center">
            {/* {Members.map((member) => <MemberCard name = {member.name} designation={member.designation} mailId = {member.mailId} img={member.img} linkedIn={member.linkedIn}/>)} */}
            </div>
        </div>


        </>
        
    );
}

export default SBC;