
import NavBar from './Pages/NavBar';
import HomePage from './Pages/HomePage';
import Checkout from './Pages/Checkout';
//import AboutPage from './Pages/AboutPage'
import './App.css';
import './CSS/NavBar.css';
import './CSS/HomePage.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav'>
        <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        </main>
      </BrowserRouter>
        </nav>

      </header>
    </div>
  );
}

export default App;
