import React from 'react';
import AddTodoList from '../AddTodoList/AddTodoList';
import AddTodoItem from '../AddTodoItem/AddTodoItem';
import ManageTodoLists from '../ManageTodoLists/ManageTodoLists';
import TodoList from '../TodoList/TodoList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <section className='add-todo'>
        <AddTodoItem />
      </section>
      <section className='add-todo-list'>
        <AddTodoList />
      </section>
      <section className='todo-list'>
        <TodoList />
      </section>
      <section className='master-todo-list'>
        <ManageTodoLists />
      </section>
    </div>
  );
};

export default Dashboard;
