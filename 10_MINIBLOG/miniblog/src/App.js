import './App.css';

import { Router, Routes, Navigate, Route, BrowserRouter } from 'react-router-dom';

import { useAuthentication } from './hooks/useAuthentication';

//context
import { AuthProvider } from './contexts/AuthContext';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [ user, setUser ] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })

  },[auth])

  if(loadingUser)
  {
     return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
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
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
