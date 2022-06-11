import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Promo from './Components/Promo';
import Portfolio from './Components/Portfolio';
import AboutUs from './Components/AboutUs/index.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Portfolio />
      <AboutUs />
    </div>
  );
}

export default App;
