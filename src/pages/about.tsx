import React from 'react';
import Title from '../components/Title';
import Photo from '../assets/images/about_photo_reize_small.png';

function About() {
  return (
    <div style={{ minHeight: '110vh', position: 'relative' }}>
      <Title name="Hair & makeup" cursiveName="services" />

      {/* Image container with cropping and overlay */}
      <div
        style={{
          height: '350px', // Adjust the height for desired crop
          overflow: 'hidden',
          position: 'relative',
          marginTop: '20px',
        }}
      >
        <img
          src={Photo}
          alt="balayage hair"
          style={{
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(1)', 
          }}
        />
        {/* Rose filter overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(214, 166, 163, 0.3)', // subtle rose
            pointerEvents: 'none',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
      <div style={{
        color: 'white',
        fontFamily: 'quicksand',
        margin: '20px',
        paddingBottom: '15%'
      }}>
        What's special about your product, service, or company? Use this space to highlight the things that set you apart from your competition, whether it's a special feature, a unique philosophy, or awards and recognition that you have received. 
      </div>
    </div>
  );
}

export default About;
