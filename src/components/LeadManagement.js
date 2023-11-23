import React, { useState } from 'react';

import Navbar from "./Navbar";
const LeadManagement = () => {
  const [leadStatus, setLeadStatus] = useState('new');

  const handleStatusChange = (newStatus) => {
    setLeadStatus(newStatus);
  };

  return (
      <div>
          <Navbar/>
      <h2 className='head'>Lead Status: {leadStatus}</h2>
       <div class="btn-group-vertical" role="group" aria-label="Basic example">
      <button onClick={() => handleStatusChange('new')} className="btn btn-primary" >New</button>
      <button onClick={() => handleStatusChange('contacted')} className="btn btn-primary">Contacted</button>
      <button onClick={() => handleStatusChange('lost')} className="btn btn-primary">Lost</button>
      <button onClick={() => handleStatusChange('qualified')} className="btn btn-primary">Qualified</button>
      <button onClick={() => handleStatusChange('canceled')} className="btn btn-primary">Canceled</button>
      <button onClick={() => handleStatusChange('confirmed')} className="btn btn-primary">Confirmed</button>
       </div>
   
    </div>
  );
};

export default LeadManagement;
