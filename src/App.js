import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.js';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about-us" element={<AboutUs />} />
              <Route exact path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
