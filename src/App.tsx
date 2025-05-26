import Home from './pages/home';
import Menu from './components/Menu';
import About from './pages/about';
import Services from './pages/services';
import './assets/fonts/fonts.css'
import './App.css'; 


function App() {
  return (
    <div className='app-background'>
      <Menu />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
