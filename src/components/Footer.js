import React from 'react'
import { TbPaw } from 'react-icons/tb'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


//create a footer, the paw prints were just too cute
const Footer = () => {
    return (
      <Container>
      <Navbar bg="dark" variant="dark" expand="lg" fixed='bottom' 
      style={{color: 'white'}}>
          <TbPaw />
            <Nav className="mx-auto">
              <Navbar.Brand>Make a Reservation for caffeine and cuddles!</Navbar.Brand>
            </Nav>
          <TbPaw />
        </Navbar>
        </Container>
)}

export default Footer;