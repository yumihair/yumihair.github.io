import Home from './pages/home';
import Menu from './components/Menu';
import About from './pages/about';
import Services from './pages/services';
import Shop from './pages/shop';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import './assets/fonts/fonts.css'
import './App.css'; 


function App() {
  return (
    <div className='app-background'>
      <Menu />
      <Home />
      <About />
      <Services />
      <Shop />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
