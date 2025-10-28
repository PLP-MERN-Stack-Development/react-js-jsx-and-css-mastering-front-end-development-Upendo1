{/* Task 3  */}
// src/components/TaskManager.jsx
import React, { useState } from 'react';
import Button from './Button';
import { useLocalStorageTasks } from '../hooks/useLocalStorageTasks';
import { useTheme } from '../context/ThemeContext';

const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');
  const { theme, toggleTheme } = useTheme();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-6">Task Manager</h2>

      <Button variant="secondary" onClick={toggleTheme} className="mb-4">
        Toggle Theme
      </Button>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
          className={`flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500'}`}
        />
        <Button type="submit" variant="primary">
          Add Task
        </Button>
      </form>

      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-4">No tasks found</li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-3 border rounded-lg ${theme === 'dark' ? 'dark:border-gray-700 dark:hover:bg-gray-700' : 'hover:bg-gray-50 border-gray-200'}`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}>
                  {task.text}
                </span>
              </div>
              <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        {tasks.filter((task) => !task.completed).length} tasks remaining
      </p>
    </div>
  );
};

export default TaskManager;
