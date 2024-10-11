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

    <Timeline className='text-xl' >
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          09:30 am -  10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ color: '#ff3456' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Breakfast and Registration</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          10:00 am - 10:20 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Ashish Chauhan - <span style={{ fontWeight: "bold", fontSize: "smaller" }} >Director of NSE </span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          10:20 am - 10:40 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Bhupender Yadav - <span style={{ fontWeight: "bold", fontSize: "smaller" }}>Minister of Environment, Forest and Climate Change</span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          10:40 am - 11:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>C.P Radha Krishnan - <span style={{ fontWeight: "bold", fontSize: "smaller" }} >Governor of Maharashtra</span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          11:00 am - 11:20 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Swaminathan Gurumurthy </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          11:20 am - 11:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Video on GEV</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          11:30 am - 12:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>HH Radhanath Swami</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          12:00 pm - 12:10 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}><span style={{ fontWeight: "bold", fontFamily: "Cooper" }} >Break</span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          12:10 pm - 12:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Prof. Vardaraj Bapat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          12:30 pm - 12:50 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Architect Sandeep Shikre</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          12:50 pm - 1:10 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Ganti Murthy</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          1:10 pm - 1:40 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>HH Gauranga Das - <span style={{ fontWeight: "bold", fontSize: "smaller" }} >Director, GEV </span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ py: '12px', px: 2, color: '#226b1e' }}>
          1:40 pm  - 2:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />

        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: '#010d82' }}>Vote of thanks</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Schedule;