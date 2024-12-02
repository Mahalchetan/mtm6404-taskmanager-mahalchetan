import React, { useState } from "react";
import "./Tasks.css"; // Make sure the path is correct

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [showTasks, setShowTasks] = useState(true);

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, priority, completed: false }]);
      setNewTask(""); // Reset the input field
      setPriority("low"); // Reset priority
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Function to toggle task completion
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to toggle task visibility
  const toggleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="tasks-container">
      <h2>Task Manager</h2>

      {/* Task Input Section */}
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button onClick={addTask} className="add-button">Add Task</button>
      </div>

      {/* Show/Hide Tasks Button */}
      <button onClick={toggleShowTasks} className="show-button">
        {showTasks ? "Hide Tasks" : "Show Tasks"}
      </button>

      {/* Task List */}
      {showTasks && (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`${task.priority}-priority ${task.completed ? "task-completed" : ""}`}
            >
              <span>{task.name}</span>

              {/* Task Action Buttons */}
              <div className="task-buttons">
                <button
                  onClick={() => toggleComplete(index)}
                  className="complete-button"
                >
                  {task.completed ? "Incomplete" : "Complete"}
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
