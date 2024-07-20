import React from 'react';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title} - Priority: {task.priority} - Due: {task.dueDate}
        </span>
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;