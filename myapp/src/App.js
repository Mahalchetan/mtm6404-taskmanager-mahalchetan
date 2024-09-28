import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import TaskList from './components/TaskList';  
import Footer from './components/Footer';  
import Home from './components/Home';  
import AboutUs from './components/AboutUs';  
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/tasks" element={<TaskList />} />  
            <Route path="/about" element={<AboutUs />} />  
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;