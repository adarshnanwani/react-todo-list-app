import React, { Fragment } from 'react';
import Moment from 'react-moment';
import useToggle from '../../hooks/useToggle';
import EditTodoItem from '../EditTodoItem/EditTodoItem';

const TodoListItem = (props) => {
  const { item } = props;
  const [edit, toggleEdit] = useToggle();

  return edit ? (
    <EditTodoItem toggleEdit={toggleEdit} item={item} />
  ) : (
    <Fragment>
      <div>
        <span>{item.text}</span> -{' '}
        <Moment format='DD/MMM/YYYY'>
          {item.createdAt && item.createdAt.toString()}
        </Moment>
      </div>
      <div className='action-area'>
        <button
          className='button'
          disabled={item.completed}
          onClick={toggleEdit}
        >
          Edit
        </button>
        <button className='button' onClick={() => props.toggleTodo(item._id)}>
          {item.completed ? 'Open' : 'Complete'}
        </button>
        <button className='button' onClick={() => props.deleteTodo(item._id)}>
          Delete
        </button>
      </div>
    </Fragment>
  );
};

export default TodoListItem;
