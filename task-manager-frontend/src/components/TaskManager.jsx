import React, { useState, useEffect } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch('/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = () => {
    fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    })
      .then((response) => response.json())
      .then((newTask) => setTasks([...tasks, newTask]));
    setDescription('');
  };

  const deleteTask = (id) => {
    fetch(`/tasks/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="New task"
        />
        <button className="ml-2 p-2 bg-blue-500 text-white" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between mb-2">
            {task.description}
            <button
              className="p-2 bg-red-500 text-white"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
