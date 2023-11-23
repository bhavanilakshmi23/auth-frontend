import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='navbar'>
      <Link to="/home" className="link1">CRM</Link>
          <Link to="/home" className="link2">Home</Link>
          <Link to="/service" className="link3">Services</Link>
      <Link to="/lead-management" className="link4">Leads</Link>
      <Link to="/sign-in" className="link5">SignOut</Link>
    </div>
  )
}

export default Navbar

