import React from 'react';
// import Card from '../components/Card' 
import CommitteeSection from "../components/CommiteeSection";
import CommitteeMembers from '../components/CommitteeMembers';

const Speakers = () => {
  const data = CommitteeMembers;

  return (
    <div className='flex flex-col'>
      <CommitteeSection id = '1' title = 'Speakers' info = {data.advisory}/>
      
      <p className=' mx-12 lg:mx-80 font-bold'><span className='text-red-500'>*</span> - Subject to Confirmation</p>

    </div>
  );
};

export default Speakers;