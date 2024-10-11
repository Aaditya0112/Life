import React from 'react';
// import Card from '../components/Card' 
import CommitteeSection from "../components/CommiteeSection";
import CommitteeMembers from '../components/CommitteeMembers';

const Speakers = () => {
  const data = CommitteeMembers;

  return (
    <div>
      <CommitteeSection id = '1' title = 'Speakers' info = {data.advisory}/>

    </div>
  );
};

export default Speakers;