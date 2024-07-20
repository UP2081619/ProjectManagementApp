import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import ProjectList from './components/ProjectList';
import Analytics from './components/Analytics';

function App() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [];
  });
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addProject = (name) => {
    const newProject = { id: Date.now(), name };
    setProjects([...projects, newProject]);
  };

  const addTask = (title, description, priority, dueDate) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      completed: false,
      projectId: currentProject
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const reorderTasks = (startIndex, endIndex) => {
    const filteredTasks = tasks.filter(task => task.projectId === currentProject);
    const [reorderedItem] = filteredTasks.splice(startIndex, 1);
    filteredTasks.splice(endIndex, 0, reorderedItem);
    
    const updatedTasks = tasks.map(task => 
      task.projectId === currentProject 
        ? filteredTasks[filteredTasks.findIndex(t => t.id === task.id)] || task
        : task
    );
    
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <h1>Project Management App</h1>
      <ProjectList 
        projects={projects} 
        addProject={addProject}
        setCurrentProject={setCurrentProject}
      />
      {currentProject && (
        <>
          <TaskForm onAddTask={addTask} />
          <TaskList 
            tasks={tasks.filter(task => task.projectId === currentProject)} 
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </>
      )}
      <Analytics tasks={tasks} />
    </div>
  );
}

export default App;