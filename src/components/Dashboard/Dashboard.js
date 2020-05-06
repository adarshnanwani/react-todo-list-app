import React from 'react';
import AddTodoList from '../AddTodoList/AddTodoList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <section className='add-todo'>Add todo</section>
      <section className='add-todo-list'>
        <AddTodoList />
      </section>
      <section className='todo-list'>Todo list</section>
      <section className='master-todo-list'>Master todo list</section>
    </div>
  );
};

export default Dashboard;
