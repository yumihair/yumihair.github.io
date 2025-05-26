import Logo from "../components/Logo";
import '../assets/fonts/fonts.css'
import './home.css'; 
import flower from '../assets/graphics/flower.svg';
import rose_branch from '../assets/graphics/branch_rosecolor.svg';

function Home() {
  return (
    <div>
        <img
        src={rose_branch}
        alt="branch outline"
        style={{ 
            marginTop: '6rem', 
            maxWidth: '17rem',
            position: 'absolute',
            right: '-113px',
            zIndex: '0',
            rotate: '45deg'
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
            rotate: '119deg'
        }}
      />
      <div className='center-screen'>
        <img
        src={flower}
        alt="Flower outline"
        style={{ 
            marginTop: '1rem', 
            maxWidth: '18rem',
            position: 'absolute',
            top: '24%',
            zIndex: '0'
        }}
      />
        <Logo />
        <div className='julius-sans-one' style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '1.9rem',
            margin: '10px 10% 0 10%',
        }}>Dream Hair <p style={{margin: '0'}}>For</p> Everyone</div>
      </div>
    </div>
  );
}

export default Home;
