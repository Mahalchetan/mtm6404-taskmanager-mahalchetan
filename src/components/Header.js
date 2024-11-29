// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for navigation

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="app-title">Task Manager</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/list" className="nav-link">New List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
