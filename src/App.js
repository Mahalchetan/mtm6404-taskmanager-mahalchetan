// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import Navbar from './components/Navbar';
import ListView from './components/ListView';
import Footer from './components/Footer';

import './App.css';  // Import the CSS file


const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/list/:id" element={<ListView />} />
        </Routes>
        <Footer />
      </Router>
    </TaskProvider>
  );
};

export default App;
