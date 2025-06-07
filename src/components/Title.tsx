import React,  { useEffect, useRef, useState } from 'react';
import '../assets/fonts/fonts.css';
import './fadein.css';

interface TitleProps {
    name: string;
    cursiveName: string;
}

const Title: React.FC<TitleProps> = ({ name, cursiveName }) => {
      const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // remove if you want it to animate every time
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

    return(
        <div ref={titleRef}>
      <div className={`fade-in-right ${isVisible ? 'visible' : ''}`}
      style={{
        animationDelay: '0.3s',
        fontFamily: 'LeJourSerif',
        textTransform: 'uppercase',
        fontSize: '3.8rem',
        color: 'white',
        margin: '5px 30% 5px 20px',
        lineHeight: '1'
      }}>
        {name}
      </div>

      <div className={`fade-in-right ${isVisible ? 'visible' : ''}`}  style={{
        animationDelay: '0.5s',
        fontSize: '5rem',
        fontFamily: 'Pinyon Script',
        color: 'white',
        margin: '-71px 100px 0px'
      }}>
        {cursiveName}
      </div>

      <div className={`fade-in-right ${isVisible ? 'visible' : ''}`}  style={{
        animationDelay: '0.3s',
        marginTop: '0px',
        height: '2px',
        backgroundColor: '#fff',
        width: '80%',
      }} />
    </div>
    )
};

export default Title;

