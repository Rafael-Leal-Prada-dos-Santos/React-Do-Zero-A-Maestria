import './App.css';

//1 - config react router

import { Routes, Route, Navigate } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Navbar/>
      {/*9 - Pesquisa*/}
      <SearchForm></SearchForm>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/** 6- Nested Route */}
        <Route path="/products/:id/info" element={<Info />} />

        {/* 4- Rota dinâmica */}
        <Route path="/products/:id" element={<Product />} />
       
        {/*9 - Search*/}
        <Route path='/search' element={<Search/>} />
        {/** 7- No Match Route */}
        <Route path="*" element={<NotFound />} />
        {/* 9- Redirect */}
        <Route path="/company" element={<Navigate to="/about" />} />
      </Routes>
    </div>
  );
}

export default App;
