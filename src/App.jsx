import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/About Us';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './app.css';

const App = () => {
  // Sample tasks for TaskList
  const tasks = [
    'Design Homepage',
    'Fix Bug #42',
    'Submit Assignment',
    'Attend Meeting',
    'Refactor Code'
  ];

  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <div className="main-content">
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/tasks" element={<TaskList tasks={tasks} />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;


