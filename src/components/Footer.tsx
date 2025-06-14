import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import rose_branch from '../assets/graphics/branch_rosecolor.svg';

const Footer = () => {
  return (
    <>
    <img
        src={rose_branch}
        alt="branch outline"
        style={{
          maxWidth: '14rem',
          position: 'absolute',
          left: '-75px',
          zIndex: '0',
          rotate: '119deg',
          overflow: 'hidden',
        }}
      />
        <footer style={{
      backgroundColor: '#695650',
      color: 'white',
      padding: '2rem 1rem',
      fontFamily: 'quicksand',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '1rem', zIndex: '100' }}>
        ONE17 Hair Studios<br />
        7315 W Warm Springs Rd. Las Vegas, NV 89113<br />
        <a href="mailto:Yummihairlv@gmail.com" style={{ color: '#fff' }}>Yummihairlv@gmail.com</a><br />
        <a href="tel:2067660469" style={{ color: '#fff' }}>206-766-0469</a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', fontSize: '1.4rem' }}>
        <a href="https://www.facebook.com/profile.php?id=100069476236163" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/yummihair?igsh=dmp1aHJwdnQzYzdj" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <FaInstagram />
        </a>
        <a href="https://pin.it/5xt1niZ6I" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <FaPinterestP />
        </a>
      </div>
    </footer>
    </>
    
  );
};

export default Footer;
