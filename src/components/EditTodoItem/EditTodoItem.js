import React from 'react';
import useInput from '../../hooks/useInput';
import './EditTodoItem.css';

const EditTodoItem = (props) => {
  const [text, changeText, resetText] = useInput(props.item.text);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div className='EditTodoItem'>
      <form onSubmit={submitHandler}>
        <input type='text' value={text} onChange={changeText} />
        <div>
          <button onClick={props.toggleEdit} className='button'>
            Cancel
          </button>
          <input type='submit' value='Save' />
        </div>
      </form>
    </div>
  );
};

export default EditTodoItem;
