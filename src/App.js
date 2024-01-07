import {  Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from "./pages/Login";
import Shop from './pages/Shop';

function App() {
  return (

    <div className="App">
      <Navbar />
      
      {/* //! Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/shop"
            element={
              // Only allow access to Shop if the user is logged in
              localStorage.getItem('isLoggedIn') ? <Shop /> : <Navigate to="/login" />
            }
          />
        </Routes>
      {/* //! Router */}

      <Footer />
    </div>

  );
}

export default App;
