import React from 'react';
import TaskItem from './TaskItem';

function TaskList() {
  const tasks = [
    'Complete the project plan',
    'Implement static mockup',
    'Review code with mentor',
    'Prepare for iteration 2',
    'Push code to GitHub'
  ];

  return (
    <section id="tasks">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
