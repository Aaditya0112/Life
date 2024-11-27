import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

function Schedule() {
  return (
    <Timeline className='text-xl'>
            <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
        <span style={{ fontWeight: "bold" }} > 09:00 AM -  10:00 AM </span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ color: '#ff3456' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Registartion and Breakfast</TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          <span style={{ fontWeight: "bold" }} >10:00 AM - 12:00 PM</span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>
          <span style={{ fontWeight: "bold" }}>Prof. Ganti S Murthy</span> - <span style={{ fontSize: "smaller" }} >IIT Indore, National Coordinator – IKS </span><br/>
          <span style={{ fontWeight: "bold" }}>Shri Raman Kant</span> - <span style={{ fontSize: "smaller" }} >President, Bharatiya Nadi Parishad</span><br/>
          <span style={{ fontWeight: "bold" }}>HH Radhanath Swami</span> - <span style={{ fontSize: "smaller" }} >Spiritual leader, Teacher, Author, Activist </span> <br/>
          <span style={{ fontWeight: "bold" }} > Shri C.P Radha Krishnan</span> - <span style={{ fontSize: "smaller" }} >Governor of Maharashtra</span> <br/>   
          <span style={{ fontWeight: "bold" }}>Prof. Vardaraj Bapat</span> - <span style={{ fontSize: "smaller" }} >IIT Bombay, SJMSOM </span><br/>
          <span style={{ fontWeight: "bold" }}>Prof. Ganesh Ramakrishnan</span> - <span style={{ fontSize: "smaller" }} >Professor, IIT Bombay </span><br/>

        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          <span style={{ fontWeight: "bold" }} >12:00 PM - 12:10 PM</span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold", fontFamily: "Cooper" }} >Break</span></TimelineContent>

      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          <span style={{ fontWeight: "bold" }} >12:10 PM - 1:40 PM</span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>
        <span style={{ fontWeight: "bold" }}>Ar. Hiten Sethi</span> - <span style={{ fontSize: "smaller" }} >Founder, HSA </span>    <br/>     
        <span style={{ fontWeight: "bold" }}>Shri S Gurumurthy</span> - <span style={{ fontSize: "smaller" }} >CA, Corporate & Legal Advisor </span> <br/>
        <span style={{ fontWeight: "bold" }}>HG Gauranga Das</span> - <span style={{fontSize: "smaller" }} >Director, GEV </span>        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          <span style={{ fontWeight: "bold" }} >1:40 PM  - 1:50 PM
</span>        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />

        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Vote of thanks</TimelineContent>
      </TimelineItem>

    </Timeline>

//     <Timeline className='text-xl' >
      // <TimelineItem>
      //   <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
      //   <span style={{ fontWeight: "bold" }} > 09:00 AM -  10:00 AM </span>
      //   </TimelineOppositeContent>
      //   <TimelineSeparator>
      //     <TimelineDot sx={{ color: '#ff3456' }} />
      //     <TimelineConnector />
      //   </TimelineSeparator>
      //   <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Registartion and Breakfast</TimelineContent>
      // </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >10:00 AM - 10:10 AM</span>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Inauguration and Welcome</TimelineContent>
//       </TimelineItem>
      
      // <TimelineItem>
      // <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
      //     <span style={{ fontWeight: "bold" }} >10:10 AM - 10:30 AM</span>
      //   </TimelineOppositeContent>
      //   <TimelineSeparator>
      //     <TimelineDot />
      //     <TimelineConnector />
      //   </TimelineSeparator>
      //   <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold" }}>Prof. Ganti S Murthy</span> - <span style={{ fontSize: "smaller" }} >IIT Indore, National Coordinator – IKS </span></TimelineContent>
      // </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >10:30 AM - 10:50 AM</span>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold" }}>Mr. Rama Kant</span></TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >10:50 AM - 11:10 AM</span>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
        // <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>
        //   <span style={{ fontWeight: "bold" }}>HH Radhanath Swami</span> - <span style={{ fontSize: "smaller" }} >Spiritual leader, Teacher, Author, Activist </span>
        //   </TimelineContent>
//       </TimelineItem>

//       <TimelineItem>
//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >11:10 PM - 11:30 PM</span>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold" }} > Shri C.P Radha Krishnan</span> - <span style={{ fontSize: "smaller" }} >Governor of Maharashtra</span></TimelineContent>
//       </TimelineItem>

//       <TimelineItem>
//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >11:30 AM - 11:50 PM</span>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
        // <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold" }}>Prof. Vardaraj Bapat</span> - <span style={{ fontSize: "smaller" }} >IIT Bombay, SJMSOM </span></TimelineContent>
//       </TimelineItem>

//       <TimelineItem>
//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >11:50 AM - 12:00 PM</span>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold" }}>Prof. Ganesh Ramakrishnan</span></TimelineContent>

//       </TimelineItem>
      
      // <TimelineItem>
        
      //   <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
      //     <span style={{ fontWeight: "bold" }} >12:00 PM - 12:30 PM</span>
      //   </TimelineOppositeContent>
      //   <TimelineSeparator>
      //     <TimelineDot />
      //     <TimelineConnector />
      //   </TimelineSeparator>
      //   <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold", fontFamily: "Cooper" }} >Break</span></TimelineContent>

      // </TimelineItem>
//       <TimelineItem>


//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >12:30 PM - 12:50 PM</span>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold" }}>Ar. Hiten Sethi</span> - <span style={{ fontSize: "smaller" }} >Founder, HSA </span></TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >12:50 PM - 1:10 PM
// </span>        </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold" }}>Shri S Gurumurthy</span> - <span style={{ fontSize: "smaller" }} >CA, Corporate & Legal Advisor </span> </TimelineContent>
//       </TimelineItem> 
      
      
      
      
//       <TimelineItem>
//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >1:10 PM - 1:40 PM
//  </span>       </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold" }}>HG Gauranga Das</span> - <span style={{fontSize: "smaller" }} >Director, GEV </span> </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
//           <span style={{ fontWeight: "bold" }} >1:40 PM  - 1:50 PM
// </span>        </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />

//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Vote of thanks</TimelineContent>
//       </TimelineItem>
//     </Timeline>
  );
}

export default Schedule;