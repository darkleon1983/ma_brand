import './App.css';
import Header from './Components/Header';
import Promo from './Components/Promo';
import Portfolio from './Components/Portfolio';
import AboutUs from './Components/AboutUs/index.js';
import Services from './Components/Services/index.js';
import Clients from './Components/Clients/index.js';
import Collaboration from './Components/Collaboration/index.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Portfolio />
      <AboutUs />
      <Services />
      <Clients />
      <Collaboration />
      <div><hr /></div>
      <Header /> 
    </div>
  );
}

export default App;
