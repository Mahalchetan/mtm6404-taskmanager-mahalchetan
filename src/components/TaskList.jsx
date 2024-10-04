import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <section className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;

