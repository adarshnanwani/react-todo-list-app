import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteTodoList } from '../../actions/todolist';
import './ManageTodoLists.css';

const ManageTodoLists = (props) => {
  let list;
  if (props.todolists.length === 0) {
    list = <li>Please add a todo list.</li>;
  } else {
    list = props.todolists.map((list) => {
      let listName = list.name;

      if (list.name.length > 10) {
        listName = list.name.substr(0, 10) + '...';
      }
      return (
        <li key={list._id}>
          <div>
            <span>{listName}</span> -{' '}
            <Moment format='DD/MMM/YYYY'>{list.createdDate.toString()}</Moment>
          </div>
          <div className='action-area'>
            <button className='button'>Open</button>
            <button className='button'>Share</button>
            <button
              className='button'
              onClick={() => props.deleteTodoList(list._id)}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <div className='ManageTodoLists'>
      <h3>Manage Todo Lists</h3>
      <ul>{list}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todolists: state.todolists,
});

export default connect(mapStateToProps, { deleteTodoList })(ManageTodoLists);
