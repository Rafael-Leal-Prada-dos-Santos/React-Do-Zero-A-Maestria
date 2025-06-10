import './App.css';

import { Router, Routes, Navigate, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
