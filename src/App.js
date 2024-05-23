
import NavBar from './Pages/NavBar';
import HomePage from './Pages/HomePage';
//import AboutPage from './Pages/AboutPage'
import './App.css';
import './NavBar.css';
import './HomePage.css';
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
        </Routes>
        </main>
      </BrowserRouter>
        </nav>

      </header>
    </div>
  );
}

export default App;
