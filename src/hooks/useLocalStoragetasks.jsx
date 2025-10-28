{/* Task 3  */}
// src/hooks/useLocalStorageTasks.jsx
import { useState, useEffect } from 'react';

export const useLocalStorageTasks = (key = 'tasks') => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [tasks, key]);

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false, createdAt: new Date().toISOString() },
    ]);
  };

  const toggleTask = (id) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  return { tasks, addTask, toggleTask, deleteTask };
};
