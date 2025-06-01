import Home from './pages/home';
import Menu from './components/Menu';
import About from './pages/about';
import Services from './pages/services';
import Shop from './pages/shop';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Footer from './components/Footer';
import AcuityEmbed from './components/AcuityEmbed';
import './assets/fonts/fonts.css'
import './App.css'; 
import Policies from './pages/policies';

const yummifolderId = process.env.REACT_APP_FOLDER_ID as string;
const yummiapiKey = process.env.REACT_APP_API_KEY as string;

function App() {
  return (
    <div className='app-background'>
      <Menu />
      <Home />
      <About />
      <Services />
      <Shop />
      <Gallery />
      <Policies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
