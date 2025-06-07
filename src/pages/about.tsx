import React from 'react';
import Title from '../components/Title';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Blowerdryer from '../assets/graphics/blowerdryer_icon.png';
import EcoIcon from '../assets/graphics/eco_icon.png';
import ScissorsIcon from '../assets/graphics/scissors_icon.png';

function About() {
  return (
    <div style={{ position: 'relative' }}>
      <Title name="Hair & makeup" cursiveName="services" />

      {/* Symbols Section */}
      <Container className="py-5 text-white d-flex justify-content-center align-items-center" style={{ fontFamily: 'Quicksand, sans-serif' }}>
        <Row className="text-center text-md-start">
          <Col xs={12} md={4} className="mb-4 ">
            <Image src={Blowerdryer} alt="Blowerdryer" height="60" className="mb-3" style={{ filter: 'invert(1)' }}/>
            <h4 className="mt-3" style={{ fontFamily: 'Julius Sans One' }}>Expert Styling</h4>
            <p style={{ fontFamily: 'Quicksand' }}>
                From bouncy blowouts to polished editorial looks — I deliver high-end hair styling tailored to you.
            </p>
        </Col>
          <Col xs={12} md={4} className="mb-4">
            <Image src={EcoIcon} alt="Eco=friendly" height="60" className="mb-3" style={{ filter: 'invert(1)' }}/>
            <h4 className="mt-3" style={{ fontFamily: 'Julius Sans One' }}>Eco-Conscious Beauty</h4>
            <p style={{ fontFamily: 'Quicksand' }}>
                I use eco-friendly, cruelty-free products because your beauty routine should be kind to the planet.
            </p>
        </Col>
          <Col xs={12} md={4} className="mb-4">
            <Image src={ScissorsIcon} alt="Scissors" height="60" className="mb-3" style={{ filter: 'invert(1)' }}/>
            <h4 className="mt-3" style={{ fontFamily: 'Julius Sans One' }}>Precision Cutting</h4>
            <p style={{ fontFamily: 'Quicksand' }}>
            Specializing in women’s cuts that celebrate your natural texture, shape, and personal vibe.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
    );
};



export default About;
