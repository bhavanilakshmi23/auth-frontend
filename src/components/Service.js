import React, { useState } from 'react';
import Navbar from "./Navbar";

const Service = () => {
  const [serviceStatus, setServiceStatus] = useState('new');

  const handleStatusChange = (newStatus) => {
    setServiceStatus(newStatus);
  };

  return (
      <div>
          <Navbar/>
      <h2 className='head'>ServiceStatus: {serviceStatus}</h2>
<div class="btn-group-vertical" role="group" aria-label="Basic example">
      <button onClick={() => handleStatusChange('Created')} className="btn btn-primary">Created</button>
      <button onClick={() => handleStatusChange('Released')} className="btn btn-primary">Released</button>
      <button onClick={() => handleStatusChange('Open')} className="btn btn-primary">Open</button>
      <button onClick={() => handleStatusChange('In process')} className="btn btn-primary">In process</button>
      <button onClick={() => handleStatusChange('Canceled')} className="btn btn-primary">Canceled</button>
      <button onClick={() => handleStatusChange('Completed')} className="btn btn-primary">Completed</button>
</div>
    </div>
  );
};

export default Service;
