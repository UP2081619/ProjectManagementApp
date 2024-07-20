import React, { useState } from 'react';

const ProjectList = ({ projects, addProject, setCurrentProject }) => {
  const [newProjectName, setNewProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(newProjectName);
    setNewProjectName('');
  };

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id} onClick={() => setCurrentProject(project.id)}>
            {project.name}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          placeholder="New project name"
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectList;