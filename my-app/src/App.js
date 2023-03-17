import logo from './logo.svg';
import './App.css';
import React from 'react';
import ContactUs from './ContactUs';
import Deals from './Deals';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function App() {
  const [showContent, setShowContent] = useState(false);
  return (
    <Router>
    <div className="App">
      
      <nav>
        <ul style={{listStyle:'none'}}>
          <li><Link onClick={()=> setShowContent(false)}><h1>Home</h1></Link></li>
          <li >
            <Link to="/contact" onClick={ ()=> setShowContent(true)}>Contact Us</Link>
          </li>
          <li>
            <Link to="/deals" onClick={()=>setShowContent(true)}>Deals</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/contact" element={showContent && <ContactUs />} />
        <Route path="/deals" element={showContent && <Deals />} />
      </Routes>
    </div>
  </Router>
    
  );
}

export default App;
