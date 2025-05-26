import Logo from "../components/Logo";
import BookButton from "../components/BookButton";
import '../assets/fonts/fonts.css'
import './home.css'; 
import flower from '../assets/graphics/flower.svg';
import rose_branch from '../assets/graphics/branch_rosecolor.svg';
import { FaMapMarkerAlt } from 'react-icons/fa';


function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <img
        src={rose_branch}
        alt="branch outline"
        style={{
          marginTop: '6rem',
          maxWidth: '17rem',
          position: 'absolute',
          right: '-113px',
          zIndex: '0',
          rotate: '45deg',
          overflow: 'hidden',
        }}
      />
      <img
        src={rose_branch}
        alt="branch outline"
        style={{
          maxWidth: '14rem',
          position: 'absolute',
          left: '-75px',
          bottom: '-1px',
          zIndex: '0',
          rotate: '119deg',
          overflow: 'hidden',
        }}
      />
      <div className="center-screen">
        <img
          src={flower}
          alt="Flower outline"
          style={{
            marginTop: '1rem',
            maxWidth: '18rem',
            position: 'absolute',
            top: '17%',
            zIndex: '0',
          }}
        />
        <div style={{marginTop: '5%', zIndex: 100}}>
        <Logo />
        </div>
        <div
          className="julius-sans-one"
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '1.9rem',
            margin: '10px 10% 10% 10%',
            lineHeight: '1',
          }}
        >
          Dream Hair <p style={{ margin: '0' }}>For</p> Everyone
        </div>
        <BookButton name="Book an appointment"link="https://yummi-hair.square.site/" />
      {/* Contact Info Below Button */}
        <div style={{ 
          color: 'white', 
          fontFamily: 'quicksand', 
          fontSize: '0.9rem', 
          textAlign: 'center', 
          lineHeight: '1.6',
          zIndex: '100'
        }}>
        
          <br />
          <a href="mailto:Yummihairlv@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
            Yummihairlv@gmail.com
          </a><br />
          <a href="tel:2067660469" style={{ color: '#fff', textDecoration: 'none' }}>
            206-766-0469
          </a>
          <a 
            href="https://www.google.com/maps/place/7315+W+Warm+Springs+Rd,+Las+Vegas,+NV+89113" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: '#fff', 
              textDecoration: 'none', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              gap: '6px' }}
          >
            <FaMapMarkerAlt />
            7315 W Warm Springs Rd. Las Vegas, NV 89113
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
