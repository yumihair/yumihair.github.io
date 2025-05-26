import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Menu() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <Nav.Link href="#book">Book</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>

            {/* Social media line */}
            <div className="d-flex gap-3 mt-2 mt-lg-0 ms-lg-auto social-links">
              <Nav.Link href="https://facebook.com" target="_blank">
                <span><FaFacebook /></span>
             </Nav.Link>
             <Nav.Link href="https://x.com" target="_blank">
                <span><FaXTwitter /></span>
             </Nav.Link>
             <Nav.Link href="https://instagram.com" target="_blank">
                <span><FaInstagram /></span>
             </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
