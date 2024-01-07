import {  Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import './app.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from "./pages/Login";
import Shop from './pages/Shop';
import React, { useState } from 'react';
import { LoginContext } from './context/LoginContext';
import PrivateRouter from './pages/PrivateRouter';

function App() {
  const [shop, setshop] = useState({email:"", password:""})
  
  return (

    <div className="App">


  <LoginContext.Provider value={{shop,setshop}}>
    <BrowserRouter>
    <Navbar />
      
      {/* //! Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<PrivateRouter/>} >
            <Route path="" element={<Shop/>} />
          </Route>

          <Route e path="*" element={<Navigate to="/" />}/>
        </Routes>
      {/* //! Router */}

      <Footer />
    </BrowserRouter>
  </LoginContext.Provider>
    </div>

  );
}

export default App;
