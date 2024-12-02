import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';
import Contact from './pages/Contact'; // Ensure this path is correct
import Footer from './components/Footer';
import './App.css'; // Make sure to import your main CSS file

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer>
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
