
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Dashboard = () => {
   
    return (
        <>
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CRM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" classname='homepage'>Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
             <NavDropdown title="Leads" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contaced
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lost</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
               Canceled
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Qualifed
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Confirmed
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Service request" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Created</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Open
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Released</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
               Canceled
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
               In process
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Completed
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Container>
      </Navbar>
      </div>
     <br/>
     <div id="home" className="div">
  <div className="side1">
    <h2>Digital Marketing</h2>
    <h1>CRM</h1>
    <p>Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions
      with customers and potential customers</p>
    <button className="btn btn-primary">Get Started</button>
  </div>
  <div className="div">
    <img src="images.jpg" alt='crm.jpg' />
  </div>
</div>

     
    </>
  )
}

export default Dashboard
