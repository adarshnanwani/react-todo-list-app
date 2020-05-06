import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <section className='add-todo'>Add todo</section>
      <section className='add-todo-list'>Add todo List</section>
      <section className='todo-list'>Todo list</section>
      <section className='master-todo-list'>Master todo list</section>
    </div>
  );
};

export default Dashboard;
