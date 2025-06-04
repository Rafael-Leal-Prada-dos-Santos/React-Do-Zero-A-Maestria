import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </div>
  );
}

export default App;
