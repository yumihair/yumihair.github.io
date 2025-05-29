import Title from '../components/Title';
import React from 'react';
import './gallery.css';
import IMG1 from '../assets/images/Photos/RESIZE_1.jpg';
import IMG2 from '../assets/images/Photos/RESIZE_2.jpg';
import IMG3 from '../assets/images/Photos/RESIZE_3.jpg';
import IMG4 from '../assets/images/Photos/RESIZE_4.jpg';

const Gallery: React.FC = () => {
  const imageUrls = [IMG1, IMG2, IMG3, IMG4]; // Now local paths

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Title name="Gallery" cursiveName="hair" />

      <div className="grid-container">
        {imageUrls.map((url, idx) => (
          <div key={idx} className="grid-item">
            <img src={url} alt={`Image ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
