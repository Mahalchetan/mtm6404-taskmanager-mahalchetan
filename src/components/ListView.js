// src/components/ListView.js
import React, { useContext, useState } from 'react';
import TaskContext from '../contexts/TaskContext';
import TaskItem from './TaskItem';
import { useParams, Link } from 'react-router-dom';

const ListView = () => {
  const { id } = useParams();  // Get list ID from the URL
  const { lists, tasks, addTask, deleteTask } = useContext(TaskContext);

  // Find the current list by ID
  const currentList = lists.find((list) => list.id === parseInt(id));
  const listTasks = tasks.filter((task) => task.listId === parseInt(id)); // Filter tasks by listId

  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState(1);

  // Function to add a new task
  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask(taskName, taskPriority, parseInt(id)); // Pass the listId when adding task
      setTaskName('');
      setTaskPriority(1);
    }
  };

  if (!currentList) {
    return <h2>List not found</h2>;  // Display a message if list is not found
  }

  return (
    <div>
      <h1>{currentList.name}</h1>
      <ul>
        {listTasks
          .sort((a, b) => a.priority - b.priority)
          .map((task) => (
            <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
          ))}
      </ul>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ListView;
