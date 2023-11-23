import React from 'react'

import Navbar from "./Navbar";


const Home = () => {
   
    return (
      <>
        <Navbar/>
     <div id="home" >
  <div className="side1">
    <h2 className='head2'>Digital Marketing</h2>
              <h1 className='head1'>CRM</h1>
              <hr  className='hr'/>
    <p>Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions
      with customers and potential customers</p>
    <button className="btn btn-primary">Get Started</button>
  </div>
  <div className="img">
  
  </div>
</div>
    
    
</>
  )
}

export default Home

