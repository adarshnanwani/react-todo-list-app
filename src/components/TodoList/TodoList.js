import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
  return (
    <div className='TodoList'>
      <div>
        <select></select>
      </div>
      <div className='list-container'>
        <h3>Todo List</h3>
      </div>
    </div>
  );
};

export default TodoList;
