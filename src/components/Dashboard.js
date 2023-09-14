
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
            <Nav.Link href="#home">Home</Nav.Link>
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

     
    </>
  )
}

export default Dashboard
