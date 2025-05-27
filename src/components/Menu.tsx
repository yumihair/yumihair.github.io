import React, { useState } from 'react';
import { Navbar, Nav, Container, Collapse } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPinterestP } from 'react-icons/fa';

import logo from '../assets/images/logo.png'; // Adjust the path to your logo

function Menu() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(!expanded);
  const closeMenu = () => setExpanded(false);

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Logo toggle button */}
        <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </div>

        {/* Social Icons on the Right */}
        <div className="social-icons d-flex align-items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterestP /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>

        {/* Fullscreen Mobile Nav */}
        <Collapse in={expanded}>
          <div className="mobile-nav-overlay">
            <div className="text-end w-100">
              <button className="btn btn-link text-dark fs-1" onClick={closeMenu}>
                &times;
              </button>
            </div>
            <Nav className="flex-column text-center" style={{
                fontFamily: 'LeJourSerif'
            }}>
              <Nav.Link href="#book" onClick={closeMenu}>Book</Nav.Link>
              <Nav.Link href="#services" onClick={closeMenu}>Services</Nav.Link>
              <Nav.Link href="#shop" onClick={closeMenu}>Shop</Nav.Link>
              <Nav.Link href="#gallery" onClick={closeMenu}>Gallery</Nav.Link>
              <Nav.Link href="#contact" onClick={closeMenu}>Contact</Nav.Link>
              <Nav.Link href="#faq" onClick={closeMenu}>FAQ</Nav.Link>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterestP /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              </div>
            </Nav>
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
