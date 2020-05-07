import React from 'react';
import { connect } from 'react-redux';
import useInput from '../../hooks/useInput';
import { updateTodo } from '../../actions/todolistitem';
import './EditTodoItem.css';

const EditTodoItem = (props) => {
  const [text, changeText, resetText] = useInput(props.item.text);
  const submitHandler = (e) => {
    e.preventDefault();
    props.updateTodo(props.item._id, text);
    resetText();
    props.toggleEdit();
  };
  return (
    <div className='EditTodoItem'>
      <form onSubmit={submitHandler}>
        <input type='text' value={text} onChange={changeText} />
        <div>
          <input type='submit' value='Save' />
          <button onClick={props.toggleEdit} className='button' role='cancel'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { updateTodo })(EditTodoItem);
