import React from 'react';
import useInput from '../../hooks/useInput';
import { connect } from 'react-redux';
import { addTodoList } from '../../actions/todolist';
import './AddTodoList.css';

const AddTodoList = (props) => {
  const [name, changeName, resetName] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    // Call a function to save todo list
    props.addTodoList(name);
    resetName();
  };
  return (
    <div className='AddTodoList'>
      <h3>Add Todo List</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='todo-list-name'>Todo List Name:</label>
          <input
            type='text'
            id='todo-list-name'
            value={name}
            onChange={changeName}
          />
        </div>
        <input type='submit' value='Add' />
      </form>
    </div>
  );
};

export default connect(null, { addTodoList })(AddTodoList);
