import React from 'react';

const Analytics = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks ? (completedTasks / totalTasks * 100).toFixed(2) : 0;

  return (
    <div>
      <h2>Analytics</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Completion Rate: {completionRate}%</p>
    </div>
  );
};

export default Analytics;