import React, { useState } from 'react';
import { Container, Navbar, Nav, Collapse } from 'react-bootstrap';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from '../assets/images/logo.png';

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: open ? 'white' : 'transparent',
        transition: 'background-color 0.3s ease'
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">

        {/* Logo also acts as toggle on mobile */}
        <Navbar.Brand
          href="#home"
          onClick={() => setOpen(!open)}
          className="d-lg-none"
        >
          <img src={logo} alt="Logo" style={{ height: '40px', cursor: 'pointer' }} />
        </Navbar.Brand>

        {/* Desktop Logo */}
        <Navbar.Brand href="#home" className="d-none d-lg-block">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Navbar.Brand>

        {/* Hidden Toggle (still needed for accessibility and animation) */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setOpen(!open)}
          className="d-none"
        />

        <Collapse in={open}>
          <div id="basic-navbar-nav" className="w-100">
            <Nav className="text-center w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
              <Nav.Link href="#book">Book</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>

              <div className="d-flex gap-3 mt-3 mt-lg-0">
                <Nav.Link href="https://facebook.com" target="_blank">
                  <FaFacebook />
                </Nav.Link>
                <Nav.Link href="https://x.com" target="_blank">
                  <FaXTwitter />
                </Nav.Link>
                <Nav.Link href="https://instagram.com" target="_blank">
                  <FaInstagram />
                </Nav.Link>
              </div>
            </Nav>
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
