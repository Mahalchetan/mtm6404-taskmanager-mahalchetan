// src/contexts/TaskContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a context to manage task-related state
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]); // Initialize tasks state

  // Load lists and tasks from localStorage on component mount
  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem('lists')) || [];
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setLists(savedLists);
    setTasks(savedTasks);
  }, []);

  // Save lists and tasks to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [lists, tasks]);

  // Function to add a new list
  const addList = (listName) => {
    const newList = {
      id: lists.length + 1,  // Simple ID generation based on the current length
      name: listName,
    };
    setLists([...lists, newList]);
  };

  // Function to add a task to a list
  const addTask = (taskName, taskPriority, listId) => {
    const newTask = {
      id: tasks.length + 1,  // Simple task ID generation
      listId,
      name: taskName,
      priority: taskPriority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to delete a list (and associated tasks)
  const deleteList = (listId) => {
    setLists(lists.filter((list) => list.id !== listId));
    setTasks(tasks.filter((task) => task.listId !== listId)); // Delete all tasks associated with this list
  };

  return (
    <TaskContext.Provider value={{ lists, tasks, setLists, setTasks, addList, addTask, deleteTask, deleteList }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
