import './App.css';

import { Router, Routes, Navigate, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
