import Home from './pages/home';
import Menu from './components/Menu';
import './assets/fonts/fonts.css'
import './App.css'; 


function App() {
  return (
    <div className='app-background'>
      <Menu />
      <Home />
    </div>
  );
}

export default App;
