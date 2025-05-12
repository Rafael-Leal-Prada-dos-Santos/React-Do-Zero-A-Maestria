import './App.css';

//1 - config react router

import {BrowserRouter , Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
