import React from 'react';
import './tasklist.css';

const tasks = [
  { id: 1, taskName: "Complete project" },
  { id: 2, taskName: "Review code" },
  { id: 3, taskName: "Push to GitHub" },
  { id: 4, taskName: "Submit assignment" },
  { id: 5, taskName: "Prepare for presentation" },
];

function TaskList({ title }) {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.taskName}</li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskList;
