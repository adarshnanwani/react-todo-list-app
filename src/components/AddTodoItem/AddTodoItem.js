import React from 'react';
import { connect } from 'react-redux';
import useInput from '../../hooks/useInput';
import { addTodo } from '../../actions/todolistitem';
import './AddTodoItem.css';

const AddTodoItem = (props) => {
  const [text, changeText, resetText] = useInput('');
  const [todoListId, changeTodoListId, resetTodoListId] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (text !== '' && todoListId !== '') {
      console.log(text, todoListId);
      props.addTodo(text, todoListId);
      resetText();
      resetTodoListId();
    }
  };

  const options = props.todolists.map((list) => (
    <option value={list._id} key={list._id}>
      {list.name}
    </option>
  ));
  return (
    <div className='AddTodoItem'>
      <h3>Add Todo Item</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='todo-list-name'>Todo Item:</label>
          <input
            type='text'
            id='todo-list-name'
            value={text}
            onChange={changeText}
          />
        </div>
        <div>
          <label htmlFor='todo-list-name'>Todo List:</label>
          <select value={todoListId} onChange={changeTodoListId}>
            <option disabled value=''>
              Choose One
            </option>
            {options}
          </select>
        </div>
        <input type='submit' value='Add' />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todolists: state.todolists,
});

export default connect(mapStateToProps, { addTodo })(AddTodoItem);
