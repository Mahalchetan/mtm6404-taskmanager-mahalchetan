// src/components/Navbar.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../contexts/TaskContext';

const Navbar = () => {
  const { lists, addList } = useContext(TaskContext);
  const [newListName, setNewListName] = useState('');
  
  const handleAddList = () => {
    if (newListName.trim()) {
      addList(newListName);
      setNewListName('');  // Clear the input field after adding
    }
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {lists.map((list) => (
          <li key={list.id}>
            <Link to={`/list/${list.id}`}>{list.name}</Link>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="Enter new list name"
        />
        <button onClick={handleAddList}>Add List</button>
      </div>
    </nav>
  );
};

export default Navbar;
