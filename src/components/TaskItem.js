// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} />
      <span>{task.name} (Priority: {task.priority})</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
