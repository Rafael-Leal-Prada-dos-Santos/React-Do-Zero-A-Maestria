import './App.css';

//1 - config react router

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 4- Rota dinâmica */}
        <Route path="/products/:id" element={<Product />} />
        {/** 6- Nested Route */}
        <Route path="/products/:id/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
