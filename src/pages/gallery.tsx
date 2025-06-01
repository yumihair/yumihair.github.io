import Title from '../components/Title';
import React, { useEffect, useState, useRef } from 'react';
import BookButton from '../components/BookButton';
import './gallery.css';

import IMG1 from '../assets/images/Photos/RESIZE_1.jpg';
import IMG2 from '../assets/images/Photos/RESIZE_2.jpg';
import IMG3 from '../assets/images/Photos/RESIZE_3.jpg';
import IMG4 from '../assets/images/Photos/RESIZE_4.jpg';
import IMG5 from '../assets/images/Photos/RESIZE_5.jpg';
import IMG6 from '../assets/images/Photos/RESIZE_6.jpg';
import IMG7 from '../assets/images/Photos/RESIZE_7.jpg';
import IMG8 from '../assets/images/Photos/RESIZE_8.jpg';
import IMG9 from '../assets/images/Photos/RESIZE_9.jpg';
import IMG10 from '../assets/images/Photos/RESIZE_10.jpg';

const Gallery: React.FC = () => {
  const allImages = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10];
  const imagesPerSlide = 4;
  const totalSlides = Math.ceil(allImages.length / imagesPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  // Loop every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Get the current 4 images to show
  const startIndex = currentSlide * imagesPerSlide;
  const imagesToShow = allImages.slice(startIndex, startIndex + imagesPerSlide);

  // Fill remaining spots if fewer than 4 (to make full grid)
  while (imagesToShow.length < imagesPerSlide) {
    imagesToShow.push(...allImages.slice(0, imagesPerSlide - imagesToShow.length));
  }

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Title name="Gallery" cursiveName="hair" />
      <div style={{ 
                    fontFamily: 'quicksand',
                    margin: '30px 20px 10px 20px',
                    color: 'white'
                }}>
                    Check out my <a href="https://www.instagram.com/yummihair?igsh=dmp1aHJwdnQzYzdj"  
                target="_blank"
                rel="noopener noreferrer"
                style={{color: 'white', fontWeight: '700'}}>instagram</a> for the most recent hair updates and trends
                    that I've done.
                </div>
        <div className="video-wrapper" style={{
        marginTop: "30px"
      }}>
            <iframe
                src="https://player.vimeo.com/video/464877913?title=0&byline=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Embedded Vimeo Video"
            ></iframe>
        </div>
        
      <div className="grid-container slide-fade" ref={slideRef}>
        {imagesToShow.map((url, idx) => (
          <div key={idx} className="grid-item rose-overlay">
            <img src={url} alt={`Image ${idx + 1}`} />
          </div>
        ))}
      </div>
      <div style={{
        textAlign: "center",
        margin: "30px"
      }}>
        <BookButton name="Check out my instagram" link="https://www.instagram.com/yummihair?igsh=dmp1aHJwdnQzYzdj" />
      </div>
      
    </div>
  );
};

export default Gallery;
