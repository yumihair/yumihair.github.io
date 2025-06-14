import React, { useState } from 'react';
import { Navbar, Nav, Container, Collapse } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPinterestP } from 'react-icons/fa';

import logo from '../assets/images/logo.png'; // Adjust the path to your logo

function Menu() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(!expanded);
  const closeMenu = () => setExpanded(false);

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar" style={{backgroundColor: '#d9a6a1', opacity: '0.9'}}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Logo toggle button */}
        <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </div>

        {/* Social Icons on the Right */}
        <div className="social-icons d-flex align-items-center gap-3">
          <a href="https://www.facebook.com/profile.php?id=100069476236163" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://pin.it/5xt1niZ6I" target="_blank" rel="noreferrer"><FaPinterestP /></a>
          <a href="https://www.instagram.com/yummihair?igsh=dmp1aHJwdnQzYzdj" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>

        {/* Fullscreen Mobile Nav */}
        <Collapse in={expanded}>
          <div className="mobile-nav-overlay" style={{opacity: '0.8'}}>
            <div className="text-end w-100">
              <button className="btn btn-link text-dark fs-1" onClick={closeMenu}>
                &times;
              </button>
            </div>
            <Nav className="flex-column text-center" style={{
                fontFamily: 'LeJourSerif'
            }}>
              <Nav.Link href="#services" onClick={closeMenu}>Book</Nav.Link>
              <Nav.Link href="#about" onClick={closeMenu}>Services</Nav.Link>
              <Nav.Link href="#shop" onClick={closeMenu}>Shop</Nav.Link>
              <Nav.Link href="#gallery" onClick={closeMenu}>Gallery</Nav.Link>
              <Nav.Link href="#contact" onClick={closeMenu}>Contact</Nav.Link>
              <Nav.Link href="#faqs" onClick={closeMenu}>FAQ</Nav.Link>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <a href="https://www.facebook.com/profile.php?id=100069476236163" target="_blank" rel="noreferrer"><FaFacebook /></a>
                <a href="https://pin.it/5xt1niZ6I" target="_blank" rel="noreferrer"><FaPinterestP /></a>
                <a href="https://www.instagram.com/yummihair?igsh=dmp1aHJwdnQzYzdj" target="_blank" rel="noreferrer"><FaInstagram /></a>
              </div>
            </Nav>
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
